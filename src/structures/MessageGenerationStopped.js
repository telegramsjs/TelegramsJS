// @ts-check
const { Base } = require("./Base");

/**
 * @typedef {import("../types").MethodParameters} MethodParameters
 */

class MessageGenerationStopped extends Base {
  /**
   * @param {import("../client/TelegramClient").TelegramClient | import("../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").MessageGenerationStopped} data - update about a user stopping message generation.
   */
  constructor(client, data) {
    super(client);

    /** Unique identifier of the message draft which was stopped */
    this.draftId = data.draft_id;

    /** Chat in which the message is generated */
    this.chat = this.client.chats._add(data.chat);

    if ("message_thread_id" in data) {
      /** Unique identifier of the message thread in which the message is generated */
      this.messageThreadId = data.message_thread_id;
    }
  }

  /**
   * Use this method to stream a partial message to a user while the message is being generated; supported only for bots with forum topic mode enabled.
   * @param {string} text - Text of the message to be sent, 1-4096 characters after entities parsing
   * @param {Omit<MethodParameters["sendMessageDraft"], "text" | "chatId" | "draftId" | "messageThreadId">} [options={}] - out parameters
   * @returns {Promise<true>} - Returns True on success.
   */
  sendDraft(text, options = {}) {
    return this.client.sendMessageDraft({
      text,
      draftId: this.draftId,
      chatId: this.chat.id,
      ...(this.messageThreadId &&
        this.chat.inTopic && { messageThreadId: this.messageThreadId }),
      ...options,
    });
  }

  /**
   * Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you must call sendRichMessage with the complete message to persist it in the user's chat.
   * @param {import("../client/interfaces/RichMessage").InputRichMessage} richMessage - The partial message to be streamed
   * @param {number} draftId - Unique identifier of the message draft; must be non-zero. Changes to drafts with the same identifier are animated.
   * @returns {Promise<true>} - Returns True on success.
   */
  sendRichDraft(richMessage, draftId) {
    return this.client.sendRichMessageDraft({
      richMessage,
      draftId,
      chatId: this.chat.id,
      ...(this.messageThreadId &&
        this.chat.inTopic && { messageThreadId: this.messageThreadId }),
    });
  }
}

module.exports = { MessageGenerationStopped };
