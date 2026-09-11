# The weekly drop

`/weekly-drop` is the page the SMS campaign links to. It is not in the header
or footer navigation: the only way in is the text message. Every week the
store sends a Google Drive folder of new floor photos and the page is
replaced with them.

## The trigger

The client posts a Google Drive folder link and says **"this week's drops"**,
or words to that effect. That is the whole request. Everything below is the
job to run in response, without asking for anything else unless something is
genuinely ambiguous.

## The procedure

### 1. Read the folder

Take the folder id out of the link (`.../folders/<FOLDER_ID>?...`) and list it:

```
mcp__Google_Drive__search_files  query: parentId = '<FOLDER_ID>'  pageSize: 100
```

If that returns nothing, the folder may not be shared with the account this
session is authenticated as. Say so rather than guessing at the contents.

### 2. Pull the files down

The MCP download tool returns base64 into the transcript, which is wasteful
for a dozen photos. For a folder shared by link, fetch each id directly:

```bash
curl -sL --max-time 60 -o raw/<n>.jpg \
  "https://drive.google.com/uc?export=download&id=<FILE_ID>"
```

Check what actually arrived (`file raw/*`). Drive hands back an HTML
interstitial instead of the image for large files; if that happens, fall back
to the MCP download tool for those ids.

### 3. Convert and size them

Phone photos arrive as HEIC or as 4000px JPEGs, neither of which belongs in
the repo as-is. The site's existing photos are 2200px JPEGs, and the drop
photos should match.

`sharp` and `heic-convert` are **not** project dependencies and must not be
added to `package.json` (the brief forbids new runtime dependencies without
asking). Install them in the scratchpad instead and work there:

```bash
cd "$SCRATCHPAD" && npm install sharp heic-convert
```

For each photo, in the order the store sent them:

- HEIC input: decode with `heic-convert` first
- resize so the long edge is 2200px, never upscaling
- re-encode JPEG at quality 82, `mozjpeg: true`
- strip EXIF (`.withMetadata({})`), which also drops GPS coordinates from the
  store's phone
- write to `public/photos/drops/<weekOf>/01.jpg`, `02.jpg`, and so on

Check the output is around 300-600KB each. Anything much larger means the
resize did not apply.

### 4. Write the alt text

**This is the part that needs care, not the image pipeline.**

Alt text follows the store's naming rule, recorded in `src/lib/floor.ts` and
`PRODUCT.md`: describe only what the photograph proves. Colour, upholstery
where it is plainly fabric, and the pieces you can count.

- never name a wood species ("oak", "walnut")
- never write "leather"
- never imply a matching set unless matching pieces are in the frame
- never invent a product name

The owner corrected exactly these mistakes once already. Real product names
have to come off the store's tags; if they are wanted, ask for them.

### 5. Update the data

Edit `src/lib/drops.ts`:

- set `weekOf` to the Monday of the week being posted, ISO format
- replace `photos` with the new list, in the order the store sent them
- add `note` only if the client said something true about the load worth
  repeating. No invented hype.

Delete the previous week's folder under `public/photos/drops/`. Roughly a
dozen photos a week is several hundred megabytes a year if they accumulate,
and git history keeps them anyway.

### 6. Ship it

```bash
npm run build && npm run lint
```

Then screenshot `/weekly-drop` at desktop and mobile widths and look at it.
A rotated photo or one that is far darker than the rest is obvious in the
grid and invisible in a diff.

Commit on a **new branch off current `main`** and open a **new pull request**.
Do not push to a branch whose pull request is already merged; that has gone
wrong here before. One branch and one pull request per drop.

## Notes

- The page renders an honest empty state when `photos` is empty, so it is
  safe for it to sit between drops.
- `/weekly-drop` is in the sitemap with a weekly change frequency. It is a
  real public page with fresh local content, which is worth having indexed,
  and being absent from the navigation does not change that.
- The store's phone and address on the page come from `src/lib/store.ts`, so
  they are correct without touching this page.
