// Financing partners, terms, and application links supplied by LQ.
// These are the same applications behind the QR codes at the counter.
// Application links remain store-supplied. Offer terms must be confirmed with
// the provider; generic descriptions do not promise approval or promotions.

export type FinancingPartner = {
  name: string;
  kind: "Credit plan" | "Lease-to-own" | "Payment options";
  headline: string;
  detail: string;
  applyUrl: string;
};

export const FINANCING_PARTNERS: FinancingPartner[] = [
  {
    name: "Synchrony",
    kind: "Credit plan",
    headline: "Review current credit offers",
    detail:
      "Ask which promotional offer applies to your purchase. Review eligibility, payment requirements, interest and any deferred-interest terms with Synchrony before accepting.",
    applyUrl: "https://www.synchrony.com/mmc/AR187953700?sitecode=ac0lpi0e2",
  },
  {
    name: "Tower Loans",
    kind: "Credit plan",
    headline: "Ask about current loan terms",
    detail:
      "Confirm the current offer, payment schedule and total repayment amount with Tower Loans. Approval and promotional terms depend on the applicable agreement.",
    applyUrl:
      "https://creditapp.towerloan.com/Apps/ConsumerApp/3e1b8396-f774-468b-9783-876684340f3e",
  },
  {
    name: "Acima",
    kind: "Lease-to-own",
    headline: "Review lease purchase options",
    detail:
      "Acima offers lease-to-own rather than a loan. Early purchase options have conditions and costs. Review the total cost, fees and steps required to exercise an early purchase option.",
    applyUrl:
      "https://apply.acima.com/?app_id=lo&location_guid=loca-f70c81d5-ef4f-46ee-a96d-0f4744129b35&utm_campaign=generic_qr&utm_content=dwt-ins-en-0723&utm_medium=merchant&utm_source=qr&lang=en",
  },
  {
    name: "Snap",
    kind: "Payment options",
    headline: "Compare the available payment options",
    detail:
      "Ask which Snap product is offered for your purchase. Snap obtains information from consumer reporting agencies; approval is not guaranteed. Review any early ownership conditions and total cost.",
    applyUrl:
      "https://snapfinance.com/find-stores?city=NEW+ALBANY&state=MS&zipCode=38652&industry=FURNITURE&storeType=in-store&merchantId=4904733759&dbaName=L+Q+Furniture+Llc",
  },
];
