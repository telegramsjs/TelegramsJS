// @ts-check
class SuggestedPostPrice {
  /**
   * @param {import("@telegram.ts/types").SuggestedPostPrice} data - Data about the describes price of a suggested post
   */
  constructor(data) {
    /**
     * Currency in which the post will be paid. Currently, must be one of “XTR” for Telegram Stars or “TON” for TON grams.
     * @type {"XTR" | "TON"}
     */
    this.currency = data.currency;

    /**
     * The amount of the currency that will be paid for the post in the smallest units of the currency, i.e. Telegram Stars or nanograms. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanograms must be between 10000000 and 10000000000000.
     * @type {number}
     */
    this.amount = data.amount;
  }
}

module.exports = { SuggestedPostPrice };
