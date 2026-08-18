import type { PromoCode } from "../types/reviewTypes";

/**
 * Ongoing promo codes shown on the review page. There's no promo-codes
 * endpoint in this mock backend yet, so this list is static; swap for a
 * `fetchPromoCodes()` call once that API exists. The "applied" code should
 * match a discount already reflected on the rate's pricing.total for the
 * numbers to make sense out of the box — everything else here is illustrative.
 */
export const mockPromoCodes: PromoCode[] = [
  {
    code: "YTHOTEL",
    save: 1792,
    description: "Up to 60% OFF on Domestic Hotels. Valid with all Payment Methods.",
    terms: "*T&C",
    applied: true,
  },
  {
    code: "YRSBIVISADC",
    save: 2100,
    description: "Up to INR 7,500 OFF on SBI VISA Debit Platinum, Business Platinum or Signature Card Only.",
    terms: "*T&C",
  },
  {
    code: "HSBCTRAVEL1",
    save: 2050,
    description: "Up to Rs. 7,500 OFF on HSBC Credit / Debit Card + additional discount on DigiSmart Credit Card.",
    terms: "*T&C",
  },
  {
    code: "YATRAHSBC",
    save: 1950,
    description: "Up to INR 7,500 on HSBC Credit Card.",
    terms: "*T&C",
  },
  {
    code: "YATRARBL",
    save: 1950,
    description: "Up to Rs. 7,500 on using RBL Bank Credit Card.",
    terms: "*T&C",
  },
  {
    code: "YRDBSVISADC",
    save: 1900,
    description: "Up to INR 7,500 OFF on DBS VISA Debit Card Only.",
    terms: "*T&C",
  },
  {
    code: "YTUPI",
    save: 1750,
    description: "Up to 65% OFF on hotels using UPI payment modes.",
    terms: "*T&C",
  },
];
