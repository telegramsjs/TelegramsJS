// @ts-check
const { Base } = require("./Base");
const { User } = require("./misc/user/User");

class BotSubscriptionUpdated extends Base {
  /**
   * @param {import("../client/TelegramClient").TelegramClient | import("../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").BotSubscriptionUpdated} data - Data about the represents changes to a user payment subscription toward the current bot.
   */
  constructor(client, data) {
    super(client);

    /** User who subscribed for payments toward the bot */
    this.user = new User(client, data.user);

    /** Bot-specified invoice payload */
    this.invoicePayload = data.invoice_payload;

    /** The new state of the subscription. Currently, it can be one of “canceled” if the user canceled the subscription, “active” if the user re-enabled a previously canceled subscription, or “failed” if payment for the subscription failed. */
    this.state = data.state;
  }
}

module.exports = { BotSubscriptionUpdated };
