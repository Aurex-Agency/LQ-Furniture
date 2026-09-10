# Launching on lqfurniture.com

The apex domain is not empty. It currently serves a GoDaddy Website Builder
site from AWS, and `sms.lqfurniture.com` serves this build. Going live is a
migration between two running sites, so the order below matters.

## Before the cutover

### 1. Resend: the environment variables must exist in Vercel

**This is what actually broke the contact form after launch.** The code shipped
and worked; the credentials only ever existed in a gitignored `.env.local` on a
developer machine, so in production `RESEND_API_KEY` was simply unset and every
submission failed. Code and credentials do not travel together, and nothing in
a deploy will warn you.

Four variables belong in the Vercel project, for Production and Preview:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | the Resend key |
| `CONTACT_FROM_EMAIL` | `support@team.lqfurniture.com` |
| `CONTACT_TO_EMAIL` | where messages should land |
| `CONTACT_FROM_NAME` | optional; defaults to "LQ Furniture Website" |

Environment variables only apply to **new** deployments. After setting them,
redeploy, or the running deployment keeps the old empty environment.

Check from outside at any time:

```
curl -s https://lqfurniture.com/api/contact
```

`deliverable: true` means a real verified sender is in use. `deliverable:
false` means the site is on Resend's sandbox and only the Resend account owner
will receive anything. The endpoint never reveals the key.

#### A verified domain and an authorised key are two different things

A restricted Resend key is scoped to specific domains. `team.lqfurniture.com`
can be verified in the Resend dashboard while a given key still returns
`403 not authorized to send emails from ...` for it. If the health probe says
`deliverable: true` but nothing arrives, send a test straight at the API to see
which of the two is wrong:

```
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"from":"support@team.lqfurniture.com","to":["delivered@resend.dev"],"subject":"probe","text":"probe"}'
```

A message id means the key is authorised. A 403 names the domain it refused.

#### Deliverability: add a DMARC record

As of this writing `team.lqfurniture.com` has DKIM, SPF and a bounce MX, all
correct, but **neither `lqfurniture.com` nor `team.lqfurniture.com` has a DMARC
record**. Mail still sends, but a brand-new sending domain with no reputation
and no DMARC is a strong candidate for the spam folder, and Google and Yahoo
both now expect DMARC from anyone sending at volume.

Add this TXT record and let it sit before tightening it:

```
Name:  _dmarc.lqfurniture.com
Type:  TXT
Value: v=DMARC1; p=none; rua=mailto:dmarc@lqfurniture.com; fo=1
```

`p=none` only monitors, so it cannot break existing mail. Once the reports look
clean, move to `p=quarantine`.

Until the domain has a track record, **check the spam folder** before
concluding a submission was lost. Resend returning a message id means Resend
accepted it, not that the inbox filed it where you were looking.

### 2. Confirm the SMS webhook

```
curl -s https://lqfurniture.com/api/sms-optin
```

`webhookConfigured` must be `true`, or every text-list sign-up fails. It is set
by `GHL_SMS_WEBHOOK_URL`.

### 3. Supply the three facts left out of the structured data

`geo`, `sameAs` and `priceRange` are deliberately absent from the
`FurnitureStore` schema in `src/lib/schema.ts`. Geocoding the street address
returns matches kilometres apart, and a wrong map pin is worse than none.
From the Google Business Profile, get:

- the exact latitude and longitude of the store pin
- the Google Business Profile URL and the Facebook page URL
- the store's own answer for price range

Add them to `src/lib/store.ts` and thread them through `schema.ts`.

### 4. Confirm Google Analytics is receiving data

GA4 (`G-DZ7R9W7GJH`) is in the site, and the Content Security Policy in
`next.config.ts` allowlists the three hosts it needs. After the cutover, open
GA4 Realtime, load the site, tap the phone number and submit the contact form,
and confirm these events arrive:

| Event | Fires when |
| --- | --- |
| `generate_lead` | contact form delivery is confirmed by the server |
| `join_text_list` | SMS opt-in reaches the CRM |
| `click_to_call` | any `tel:` link is tapped |
| `get_directions` | any maps link is opened |
| `financing_apply` | an outbound financing application is opened |

Then mark `generate_lead`, `join_text_list` and `click_to_call` as **key
events** in GA4 (Admin → Events), or they will be counted but not reported as
conversions.

Two things worth knowing:

- The form events fire only after the server confirms delivery, never on
  submit. If the Resend domain or the CRM webhook is misconfigured, the
  conversion count stays at zero rather than inflating. A zero here is a real
  signal, not a tracking bug.
- Tracker blockers are common on phones. GA will undercount. Treat it as a
  trend line, not a ledger; the store's own phone log is the ground truth for
  calls.

## The cutover

1. Point the apex and `www` at Vercel and add both domains to the project.
   Set `www` to redirect to the apex, which is what every canonical, sitemap
   entry and Open Graph URL in the build already claims.
2. Wait for the certificate to issue and confirm `https://lqfurniture.com`
   serves this build.
3. Redirect `sms.lqfurniture.com` to the apex **at the same time**. Earlier
   kills the site people are using now; much later leaves two complete,
   indexable copies of the same site competing with each other.

## After the cutover

Smoke test, in this order:

```
curl -sI https://lqfurniture.com/            # 200
curl -sI https://www.lqfurniture.com/        # 301 -> https://lqfurniture.com/
curl -sI https://sms.lqfurniture.com/        # 301 -> https://lqfurniture.com/
curl -sI https://lqfurniture.com/home.html   # 301 -> /
curl -s  https://lqfurniture.com/api/contact # deliverable: true
curl -s  https://lqfurniture.com/sitemap.xml | head
```

Then send one real message through `/contact` and confirm it arrives.

The legacy URLs that must all return 301:

| Old | New |
| --- | --- |
| `/home.html` | `/` |
| `/about-us.html` | `/visit` |
| `/our-furniture-.html` | `/the-floor` |
| `/faq.html` | `/#faq` |
| `/contact-us.html` | `/contact` |

Finally:

- Google Search Console: verify the apex, submit `/sitemap.xml`, and file a
  Change of Address from the old property if it was ever verified.
- Google Business Profile: change the website link to `https://lqfurniture.com`.
- Update the link in the Facebook page and anywhere else the old URL is printed.

## Known gaps

- **Content Security Policy.** `script-src` includes `'unsafe-inline'` because
  the Metricool tracker is bootstrapped inline and Next inlines hydration data.
  It constrains which hosts can be reached; it is not a strict XSS barrier.
  Tightening it means adopting nonces throughout.
- **Rate limiting** on the form endpoints counts in the memory of a single
  serverless instance. It is a brake on casual spam and runaway retries, not a
  security boundary. If real abuse appears, move the counter to Vercel KV.
- **Mobile LCP is about 3.3s** in Lighthouse's simulated slow-4G lab, down from
  4.1s. That is a photograph-led design on a deliberately pessimistic
  connection; check real numbers in Search Console once traffic arrives before
  spending more on it.
