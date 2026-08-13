// Financing partners, terms, and application links supplied by LQ.
// These are the same applications behind the QR codes at the counter.
// Do not change terms or links without confirming with the store.

export type FinancingPartner = {
  name: string;
  kind: "Credit plan" | "No credit check";
  headline: string;
  detail: string;
  applyUrl: string;
};

export const FINANCING_PARTNERS: FinancingPartner[] = [
  {
    name: "Synchrony",
    kind: "Credit plan",
    headline: "Up to 12 months, no interest",
    detail:
      "Spend over $2,000 and pay it off across 12 months, interest free. Smaller purchases qualify for shorter no-interest windows based on what you spend.",
    applyUrl: "https://www.synchrony.com/mmc/AR187953700?sitecode=ac0lpi0e2",
  },
  {
    name: "Tower Loans",
    kind: "Credit plan",
    headline: "12 months, no interest",
    detail:
      "A straightforward 12 months interest free. Every so often a limited-time promotion stretches it to 24, so ask what's running.",
    applyUrl:
      "https://creditapp.towerloan.com/LoanApp?siteType=ConsumerApp",
  },
  {
    name: "Acima",
    kind: "No credit check",
    headline: "90 days, no interest",
    detail:
      "No credit check to apply, and 90 days to pay with no interest. A different road to yes when the banks make it complicated.",
    applyUrl:
      "https://apply.acima.com/?app_id=lo&location_guid=loca-f70c81d5-ef4f-46ee-a96d-0f4744129b35&utm_campaign=generic_qr&utm_content=dwt-ins-en-0723&utm_medium=merchant&utm_source=qr&lang=en",
  },
  {
    name: "Snap",
    kind: "No credit check",
    headline: "100 days, no interest",
    detail:
      "No credit check to apply, and 100 days to pay with no interest. The longest no-credit-check window on the board.",
    applyUrl:
      "https://snapfinance.com/find-stores?city=NEW+ALBANY&state=MS&zipCode=38652&industry=FURNITURE&storeType=in-store&merchantId=4904733759&dbaName=L+Q+Furniture+Llc",
  },
];
