/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The card's brand (ie. credit card network)
 */
export type StripeCardBrand =
    | "Visa"
    | "American Express"
    | "MasterCard"
    | "Discover"
    | "JCB"
    | "Diners Club"
    | "Unknown";

export const StripeCardBrand = {
    Visa: "Visa",
    AmericanExpress: "American Express",
    MasterCard: "MasterCard",
    Discover: "Discover",
    Jcb: "JCB",
    DinersClub: "Diners Club",
    Unknown: "Unknown",
} as const;