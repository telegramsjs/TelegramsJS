import type {
  Animation,
  Audio,
  Location,
  PhotoSize,
  Video,
  Voice,
  User,
} from "./Message";

/** Describes a rich message to be sent. Exactly one of the fields html or markdown must be used.
 *
 * Rich messages support advanced structured formatting options like headings, lists, tables, media, block quotations, collapsible blocks, footnotes, and formulas. Telegram clients will render them accordingly. You can specify rich message content using Markdown-style or HTML-style formatting.
 *
 * Plain URLs, e-mail addresses, username mentions, hashtags, cashtags, bot commands, phone numbers, and bank card numbers are detected automatically. To disable automatic entity detection, pass True in the skip_entity_detection field. Note that Telegram clients will display an alert to the user before opening an inline link ('Open this link?' together with the full URL).
 *
 * #### Rich Message Limits
 *
 * Rich messages are subject to the following limits:
 *
 * - Up to 32768 UTF-8 characters in the rich message text, including custom emoji alternative text and formula source.
 * - Up to 500 blocks, including nested blocks, list items, ordered list items, table rows, quotation blocks, and details blocks.
 * - Up to 16 levels of nested formatting and blocks.
 * - Up to 50 media attachments in total, including photos, videos, and audio files.
 * - Up to 20 columns in a table.
 *
 * #### Rich Markdown style
 *
 * To use this mode, pass rich message content in the markdown field. Use the following syntax in your message:
 *
 * ````markdown
 * **bold text**
 * __bold text__
 * *italic text*
 * _italic text_
 * ~~strikethrough text~~
 * `inline fixed-width code`
 * ==marked text==
 * ||spoiler||
 *
 * [inline URL](https://t.me/)
 * [inline e-mail](mailto:user@example.com)
 * [inline phone number](tel:+123456789)
 * [inline mention of a user](tg://user?id=123456789)
 * ![👍](tg://emoji?id=5368324170671202286)
 * ![22:45 tomorrow](tg://time?unix=1647531900&format=wDT)
 * $x^2 + y^2$
 * \#hashtag $USD +12345678901, card: 4242 4242 4242 4242, https://t.me t.me a@t.me /command @username
 * all the text above was on the same line
 *
 * # Heading 1
 * ## Heading 2
 * ### Heading 3
 * #### Heading 4
 * ##### Heading 5
 * ###### Heading 6
 *
 * Paragraph text
 *
 * ```python
 *   print('pre-formatted fixed-width code block written in the Python programming language')
 * ```
 *
 * ---
 *
 * - unordered list item
 * * unordered list item
 * + unordered list item
 *
 * 1. ordered list item
 * 2. ordered list item
 *
 * - [ ] task list item
 * - [x] completed task list item
 *
 * >Block quotation started
 * >
 * >Block quotation continued on the next line
 * >Block quotation continued on the same line
 * >
 * >The last line of the block quotation
 *
 * ![](https://telegram.org/example/photo.jpg)
 * ![](https://telegram.org/example/video.mp4)
 * ![](https://telegram.org/example/audio.mp3)
 * ![](https://telegram.org/example/audio.ogg)
 * ![](https://telegram.org/example/animation.gif)
 *
 * ![](https://telegram.org/example/photo.jpg "Photo caption")
 * ![](https://telegram.org/example/video.mp4 "Video caption")
 * ![](https://telegram.org/example/audio.mp3 "Audio caption")
 * ![](https://telegram.org/example/audio.ogg "Voice note caption")
 * ![](https://telegram.org/example/animation.gif "Animation caption")
 *
 * | Header 1 | Header 2 |
 * |:---------|:--------:|
 * | left     | center   |
 *
 * Text with a reference[^id1] and another one[^id2].
 *
 * [^id1]: Definition of the first footnote.
 * [^id2]: Definition of the second footnote.
 *
 * $$E = mc^2$$
 *
 * ```math
 * E = mc^2
 * ```
 *
 * ## Example Nested Syntax Report for _Q1_
 * Intro with <u>underlined text</u>, ==marked text==, and $x^2 + y^2$.
 * **Bold _italic <u>underlined italic bold</u> italic_ bold**
 * <u>In inline tags, nested **markdown** is parsed</u>
 * >Quote with **bold text, ~~strikethrough, and <tg-spoiler>spoiler</tg-spoiler>~~**, plus [a link](https://t.me/).
 *
 * - List item with `code`, <sup>superscript</sup>, <sub>subscript</sub>, and a footnote[^note]
 * - Another item with **bold <tg-spoiler><code>spoiler code</code></tg-spoiler>**
 * - Another item with ~~strikethrough and <ins>inserted text</ins>~~
 *
 * | Metric | Value |
 * |:-------|------:|
 * | Speed  | **42** <sup>ms</sup> |
 * | Status | <tg-spoiler>ready</tg-spoiler> |
 *
 * [^note]: Footnote with _italic text_ and <u>HTML underline</u>.
 *
 * ---
 *
 * # Details blocks can contain Markdown content:
 *
 * <details open><summary>Summary with **bold text**</summary>
 *
 * ### Details heading
 * - List item with _italic text_
 * - List item with <tg-spoiler>spoiler</tg-spoiler>
 *
 * </details>
 *
 * # Collages and slideshows can contain Markdown media blocks:
 *
 * <tg-collage>
 *
 * ![](https://telegram.org/example/photo.jpg)
 * ![](https://telegram.org/example/video.mp4)
 *
 * </tg-collage>
 *
 * <tg-slideshow>
 *
 * ![](https://telegram.org/example/photo.jpg)
 * ![](https://telegram.org/example/video.mp4)
 *
 * </tg-slideshow>
 * ````
 *
 * For formatting features that don't have Markdown syntax, use HTML tags:
 *
 * ```html
 * <u>underlined text</u>, <ins>underlined text</ins>
 * <sub>subscript text</sub>
 * <sup>superscript text</sup>
 * <a name="chapter-1"></a>
 * <aside>Pull quote<cite>The Author</cite></aside>
 * <details open><summary>Title</summary>Content</details>
 * <tg-map lat="41.9" long="12.5" zoom="14"/>
 * <tg-collage><img src="https://telegram.org/example/photo.jpg"/><figcaption>Caption<cite>The Author</cite></figcaption></tg-collage>
 * <tg-slideshow><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/><figcaption>Slideshow caption<cite>The Author</cite></figcaption></tg-slideshow>
 * ```
 *
 * Please note:
 *
 * - Rich Markdown is compatible with GitHub Flavored Markdown where possible and can contain arbitrary HTML. Supported rich message HTML tags are parsed as described in Rich HTML style.
 * - Media can be specified only as a separate block.
 * - Media blocks support only HTTP and HTTPS URLs.
 * - Media type is determined by the MIME type and the URL of the media.
 * - In media syntax, the optional title after the URL is used as the caption; for example, displays “Photo caption” under the media.
 * - Table cells can contain only inline formatting.
 * - Formula source is treated as raw LaTeX.
 * - See date-time entity formatting for more details about supported date-time formats.
 *
 * #### Rich HTML style
 *
 * To use this mode, pass rich message content in the html field. The following tags are currently supported:
 *
 * ```html
 * <a name="chapter-0"></a>
 * <b>bold text</b>, <strong>bold text</strong>
 * <i>italic text</i>, <em>italic text</em>
 * <u>underlined text</u>, <ins>underlined text</ins>
 * <s>strikethrough text</s>, <strike>strikethrough text</strike>, <del>strikethrough text</del>
 * <code>inline fixed-width code</code>
 * <mark>marked text</mark>
 * <sub>subscript text</sub>
 * <sup>superscript text</sup>
 * <tg-spoiler>spoiler</tg-spoiler>
 *
 * <a href="#note-1">Reference</a>
 * <a href="https://t.me/">inline URL</a>
 * <a href="mailto:user@example.com">inline e-mail</a>
 * <a href="tel:+123456789">inline phone number</a>
 * <a href="tg://user?id=123456789">inline mention of a user</a>
 * <a href="#chapter-1">in-document link</a>
 * <a name="chapter-1"></a>
 *
 * <tg-reference name="note-1">Referenced text</tg-reference>
 * <tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>
 * <img src="tg://emoji?id=5368324170671202286" alt="👍"/>
 * <tg-time unix="1647531900" format="wDT">22:45 tomorrow</tg-time>
 * <tg-math>x^2 + y^2</tg-math>
 *
 * #hashtag $USD +12345678901, card: 4242 4242 4242 4242, https://t.me t.me a@t.me /command @username
 *
 * all the text above was on the same line
 *
 * <h1>Heading 1</h1>
 * <h2>Heading 2</h2>
 * <h3>Heading 3</h3>
 * <h4>Heading 4</h4>
 * <h5>Heading 5</h5>
 * <h6>Heading 6</h6>
 *
 * <a name="chapter-2"></a>
 *
 * <p>Paragraph text</p>
 * <pre>pre-formatted fixed-width code block</pre>
 * <pre><code class="language-python">  print('pre-formatted fixed-width code block written in the Python programming language')</code></pre>
 * <footer>Footer text</footer>
 * <hr/>
 * <ul><li>unordered list item</li></ul>
 * <ol><li>ordered list item</li></ol>
 * <ol start="3" type="a" reversed><li>ordered list item</li></ol>
 * <ol><li value="7" type="i">ordered list item with explicit number</li></ol>
 * <ul>
 * <li><input type="checkbox" checked>Checked checkbox</li>
 * <li><input type="checkbox">Unchecked checkbox</li>
 * </ul>
 *
 * <blockquote>Block quotation started<br>Block quotation continued<br>The last line of the block quotation<cite>The Author</cite></blockquote>
 * <aside>Pull quote<cite>The Author</cite></aside>
 *
 * <img src="https://telegram.org/example/photo.jpg"/>
 * <video src="https://telegram.org/example/video.mp4"></video>
 * <audio src="https://telegram.org/example/audio.mp3"></audio>
 * <audio src="https://telegram.org/example/audio.ogg"></audio>
 * <video src="https://telegram.org/example/animation.gif"></video>
 *
 * <figure><img src="https://telegram.org/example/photo.jpg" tg-spoiler/><figcaption>Photo caption<cite>Photo credit</cite></figcaption></figure>
 * <figure><video src="https://telegram.org/example/video.mp4" tg-spoiler></video><figcaption>Video caption</figcaption></figure>
 * <figure><audio src="https://telegram.org/example/audio.mp3"></audio><figcaption>Audio caption</figcaption></figure>
 * <figure><audio src="https://telegram.org/example/audio.ogg"></audio><figcaption>Voice note caption</figcaption></figure>
 * <figure><video src="https://telegram.org/example/animation.gif" tg-spoiler></video><figcaption>Animation caption</figcaption></figure>
 *
 * <tg-map lat="41.9" long="12.5" zoom="14"/>
 * <figure><tg-map lat="41.9" long="12.5" zoom="14"/><figcaption>Map caption</figcaption></figure>
 *
 * <tg-collage><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/></tg-collage>
 * <tg-collage><video src="https://telegram.org/example/video.mp4"/><img src="https://telegram.org/example/photo.jpg"/><figcaption>Collage caption</figcaption></tg-collage>
 * <tg-slideshow><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/></tg-slideshow>
 * <tg-slideshow><video src="https://telegram.org/example/video.mp4"/><img src="https://telegram.org/example/photo.jpg"/><figcaption>Slideshow caption</figcaption></tg-slideshow>
 *
 * <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Value 1</td><td>Value 2</td></tr></table>
 * <table bordered striped><caption>Table caption</caption>
 * <tr><td colspan="2" rowspan="2" align="left">Value</td><td align="center">Value2</td><td align="right">Value3</td></tr>
 * <tr><td valign="top">Value4</td><td valign="middle">Value5</td><td valign="bottom">Value6</td></tr>
 * <tr><td>Value7</td></tr></table>
 *
 * <details><summary>Title</summary>Content</details>
 * <details open><summary>Title</summary>Content</details>
 * <tg-math-block>E = mc^2</tg-math-block>
 * ```
 *
 * Please note:
 *
 * - Only the tags mentioned above are currently supported.
 * - All numerical HTML entities are supported.
 * - The API currently supports only the following named HTML entities: &lt;, &gt;, &amp;, &quot;, &apos;, &nbsp;, &hellip;, &mdash;, &ndash;, &lsquo;, &rsquo;, &ldquo; and &rdquo;.
 * - Use nested pre and code tags to define the programming language for a pre-formatted block.
 * - Programming language can't be specified for standalone code tags.
 * - Links mailto:..., tel:..., and tg://user?id=... are rendered as e-mail links, phone links, and inline mentions respectively. Other supported links are rendered as regular inline links.
 * - Images, videos, and audio files can be specified only as separate media blocks.
 * - Media blocks support only HTTP and HTTPS URLs.
 * - An empty \<a name="..."></a> on its own creates an anchor that can be linked to with \<a href="#...">...</a>.
 * - In \<figcaption>, you can use \<cite> tags to specify caption credit.
 * - Use \<tg-reference name="...">...</tg-reference> to define referenced text that can be linked to with \<a href="#...">...</a>.
 * - The body of a \<details> tag can contain rich message content. If the open attribute is specified, the block is expanded by default.
 * - Formula source is treated as raw LaTeX.
 * - See date-time entity formatting for more details about supported date-time formats. */
export interface InputRichMessage {
  /** Content of the rich message to send described using HTML formatting. See rich message formatting options for more details. */
  html?: string;
  /** Content of the rich message to send described using Markdown formatting. See rich message formatting options for more details. */
  markdown?: string;
  /** Pass True if the rich message must be shown right-to-left */
  is_rtl?: boolean;
  /** Pass True to skip automatic detection of entities (e.g., URLs, email addresses, username mentions, hashtags, cashtags, bot commands, or phone numbers) in the text */
  skip_entity_detection?: boolean;
}

/** This object represents a rich formatted text. Currently, it can be either a String for plain text, an Array of RichText, or any of the following types:

- RichTextBold
- RichTextItalic
- RichTextUnderline
- RichTextStrikethrough
- RichTextSpoiler
- RichTextDateTime
- RichTextTextMention
- RichTextSubscript
- RichTextSuperscript
- RichTextMarked
- RichTextCode
- RichTextCustomEmoji
- RichTextMathematicalExpression
- RichTextUrl
- RichTextEmailAddress
- RichTextPhoneNumber
- RichTextBankCardNumber
- RichTextMention
- RichTextHashtag
- RichTextCashtag
- RichTextBotCommand
- RichTextAnchor
- RichTextAnchorLink
- RichTextReference
- RichTextReferenceLink */
export type RichText =
  | string
  | RichText[]
  | RichTextBold
  | RichTextItalic
  | RichTextUnderline
  | RichTextStrikethrough
  | RichTextSpoiler
  | RichTextDateTime
  | RichTextTextMention
  | RichTextSubscript
  | RichTextSuperscript
  | RichTextMarked
  | RichTextCode
  | RichTextCustomEmoji
  | RichTextMathematicalExpression
  | RichTextUrl
  | RichTextEmailAddress
  | RichTextPhoneNumber
  | RichTextBankCardNumber
  | RichTextMention
  | RichTextHashtag
  | RichTextCashtag
  | RichTextBotCommand
  | RichTextAnchor
  | RichTextAnchorLink
  | RichTextReference
  | RichTextReferenceLink;

/** A bold text. */
export interface RichTextBold {
  /** Type of the rich text, always “bold” */
  type: "bold";
  /** The text */
  text: RichText;
}

/** An italicized text. */
export interface RichTextItalic {
  /** Type of the rich text, always “italic” */
  type: "italic";
  /** The text */
  text: RichText;
}

/** An underlined text. */
export interface RichTextUnderline {
  /** Type of the rich text, always “underline” */
  type: "underline";
  /** The text */
  text: RichText;
}

/** A strikethrough text. */
export interface RichTextStrikethrough {
  /** Type of the rich text, always “strikethrough” */
  type: "strikethrough";
  /** The text */
  text: RichText;
}

/** A text covered by a spoiler. */
export interface RichTextSpoiler {
  /** Type of the rich text, always “spoiler” */
  type: "spoiler";
  /** The text */
  text: RichText;
}

/** Formatted date and time. */
export interface RichTextDateTime {
  /** Type of the rich text, always “date_time” */
  type: "date_time";
  /** The text */
  text: RichText;
  /** The Unix time associated with the entity */
  unix_time: number;
  /** The string that defines the formatting of the date and time. See date-time entity formatting for more details. */
  date_time_format: "r" | `${"w" | ""}${"d" | "D" | ""}${"t" | "T" | ""}`;
}

/** A mention of a Telegram user by their identifier. */
export interface RichTextTextMention {
  /** Type of the rich text, always “text_mention” */
  type: "text_mention";
  /** The text */
  text: RichText;
  /** The mentioned user */
  user: User;
}

/** A subscript text. */
export interface RichTextSubscript {
  /** Type of the rich text, always “subscript” */
  type: "subscript";
  /** The text */
  text: RichText;
}

/** A superscript text. */
export interface RichTextSuperscript {
  /** Type of the rich text, always “superscript” */
  type: "superscript";
  /** The text */
  text: RichText;
}

/** A marked text. */
export interface RichTextMarked {
  /** Type of the rich text, always “marked” */
  type: "marked";
  /** The text */
  text: RichText;
}

/** A monowidth text. */
export interface RichTextCode {
  /** Type of the rich text, always “code” */
  type: "code";
  /** The text */
  text: RichText;
}

/** A custom emoji. */
export interface RichTextCustomEmoji {
  /** Type of the rich text, always “custom_emoji” */
  type: "custom_emoji";
  /** Unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker. */
  custom_emoji_id: string;
  /** Alternative emoji for the custom emoji */
  alternative_text: string;
}

/** A mathematical expression. */
export interface RichTextMathematicalExpression {
  /** Type of the rich text, always “mathematical_expression” */
  type: "mathematical_expression";
  /** The expression in LaTeX format */
  expression: string;
}

/** A text with a link. */
export interface RichTextUrl {
  /** Type of the rich text, always “url” */
  type: "url";
  /** The text */
  text: RichText;
  /** URL of the link */
  url: string;
}

/** A text with an email address. */
export interface RichTextEmailAddress {
  /** Type of the rich text, always “email_address” */
  type: "email_address";
  /** The text */
  text: RichText;
  /** The email address */
  email_address: string;
}

/** A text with a phone number. */
export interface RichTextPhoneNumber {
  /** Type of the rich text, always “phone_number” */
  type: "phone_number";
  /** The text */
  text: RichText;
  /** The phone number */
  phone_number: string;
}

/** A text with a bank card number. */
export interface RichTextBankCardNumber {
  /** Type of the rich text, always “bank_card_number” */
  type: "bank_card_number";
  /** The text */
  text: RichText;
  /** The bank card number */
  bank_card_number: string;
}

/** A mention by a username. */
export interface RichTextMention {
  /** Type of the rich text, always “mention” */
  type: "mention";
  /** The text */
  text: RichText;
  /** The mentioned user */
  username: string;
}

/** A hashtag. */
export interface RichTextHashtag {
  /** Type of the rich text, always “hashtag” */
  type: "hashtag";
  /** The text */
  text: RichText;
  /** The hashtag */
  hashtag: string;
}

/** A cashtag. */
export interface RichTextCashtag {
  /** Type of the rich text, always “cashtag” */
  type: "cashtag";
  /** The text */
  text: RichText;
  /** The cashtag */
  cashtag: string;
}

/** A bot command. */
export interface RichTextBotCommand {
  /** Type of the rich text, always “bot_command” */
  type: "bot_command";
  /** The text */
  text: RichText;
  /** The bot command */
  bot_command: string;
}

/** An anchor. */
export interface RichTextAnchor {
  /** Type of the rich text, always “anchor” */
  type: "anchor";
  /** The name of the anchor */
  name: string;
}

/** A link to an anchor. */
export interface RichTextAnchorLink {
  /** Type of the rich text, always “anchor_link” */
  type: "anchor_link";
  /** The link text */
  text: RichText;
  /** The name of the anchor. If the name is empty, then the link brings back to the top of the message. */
  anchor_name: string;
}

/** A reference. */
export interface RichTextReference {
  /** Type of the rich text, always “reference” */
  type: "reference";
  /** Text of the reference */
  text: RichText;
  /** The name of the reference */
  name: string;
}

/** A link to a reference. */
export interface RichTextReferenceLink {
  /** Type of the rich text, always “reference_link” */
  type: "reference_link";
  /** The link text */
  text: RichText;
  /** The name of the reference */
  reference_name: string;
}

/** Caption of a rich formatted block. */
export interface RichBlockCaption {
  /** Block caption */
  text: RichText;
  /** Block credit which corresponds to the HTML tag \<cite> */
  credit?: RichText;
}

/** Cell in a table. */
export interface RichBlockTableCell {
  /** Text in the cell. If omitted, then the cell is invisible. */
  text?: RichText;
  /** True, if the cell is a header cell */
  is_header?: true;
  /** The number of columns the cell spans if it is bigger than 1 */
  colspan?: number;
  /** The number of rows the cell spans if it is bigger than 1 */
  rowspan?: number;
  /** Horizontal cell content alignment. Currently, must be one of “left”, “center”, or “right”. */
  align: "left" | "center" | "right";
  /** Vertical cell content alignment. Currently, must be one of “top”, “middle”, or “bottom”. */
  valign: "top" | "middle" | "bottom";
}

/** An item of a list. */
export interface RichBlockListItem {
  /** Label of the item */
  label: string;
  /** The content of the item */
  blocks: RichBlock[];
  /** True, if the item has a checkbox */
  has_checkbox?: true;
  /** True, if the item has a checked checkbox */
  is_checked?: true;
  /** For ordered lists, the numeric value of the item label */
  value?: number;
  /** For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers */
  type?: "a" | "A" | "i" | "I" | "1";
}

/** This object represents a block in a rich formatted message. Currently, it can be any of the following types:

- RichBlockParagraph
- RichBlockSectionHeading
- RichBlockPreformatted
- RichBlockFooter
- RichBlockDivider
- RichBlockMathematicalExpression
- RichBlockAnchor
- RichBlockList
- RichBlockBlockQuotation
- RichBlockPullQuotation
- RichBlockCollage
- RichBlockSlideshow
- RichBlockTable
- RichBlockDetails
- RichBlockMap
- RichBlockAnimation
- RichBlockAudio
- RichBlockPhoto
- RichBlockVideo
- RichBlockVoiceNote
- RichBlockThinking */
export type RichBlock =
  | RichBlockParagraph
  | RichBlockSectionHeading
  | RichBlockPreformatted
  | RichBlockFooter
  | RichBlockDivider
  | RichBlockMathematicalExpression
  | RichBlockAnchor
  | RichBlockList
  | RichBlockBlockQuotation
  | RichBlockPullQuotation
  | RichBlockCollage
  | RichBlockSlideshow
  | RichBlockTable
  | RichBlockDetails
  | RichBlockMap
  | RichBlockAnimation
  | RichBlockAudio
  | RichBlockPhoto
  | RichBlockVideo
  | RichBlockVoiceNote
  | RichBlockThinking;

/** A text paragraph, corresponding to the HTML tag \<p>. */
export interface RichBlockParagraph {
  /** Type of the block, always “paragraph” */
  type: "paragraph";
  /** Text of the block */
  text: RichText;
}

/** A section heading, corresponding to the HTML tags \<h1>, \<h2>, \<h3>, \<h4>, \<h5>, or \<h6>. */
export interface RichBlockSectionHeading {
  /** Type of the block, always “heading” */
  type: "heading";
  /** Text of the block */
  text: RichText;
  /** Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest */
  size: 1 | 2 | 3 | 4 | 5 | 6;
}

/** A preformatted text block, corresponding to the nested HTML tags \<pre> and \<code>. */
export interface RichBlockPreformatted {
  /** Type of the block, always “pre” */
  type: "pre";
  /** Text of the block */
  text: RichText;
  /** The programming language of the text */
  language?: string;
}

/** A footer, corresponding to the HTML tag \<footer>. */
export interface RichBlockFooter {
  /** Type of the block, always “footer” */
  type: "footer";
  /** Text of the block */
  text: RichText;
}

/** A divider, corresponding to the HTML tag \<hr/>. */
export interface RichBlockDivider {
  /** Type of the block, always “divider” */
  type: "divider";
}

/** A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag \<tg-math-block>. */
export interface RichBlockMathematicalExpression {
  /** Type of the block, always “mathematical_expression” */
  type: "mathematical_expression";
  /** The mathematical expression in LaTeX format */
  expression: string;
}

/** A block with an anchor, corresponding to the HTML tag \<a> with the attribute name. */
export interface RichBlockAnchor {
  /** Type of the block, always “anchor” */
  type: "anchor";
  /** The name of the anchor */
  name: string;
}

/** A list of blocks, corresponding to the HTML tag \<ul> or \<ol> with multiple nested tags \<li>. */
export interface RichBlockList {
  /** Type of the block, always “list” */
  type: "list";
  /** Items of the list */
  items: RichBlockListItem[];
}

/** A block quotation, corresponding to the HTML tag \<blockquote>. */
export interface RichBlockBlockQuotation {
  /** Type of the block, always “blockquote” */
  type: "blockquote";
  /** Content of the block */
  blocks: RichBlock[];
  /** Credit of the block */
  credit?: RichText;
}

/** A quotation with centered text, loosely corresponding to the HTML tag \<aside>. */
export interface RichBlockPullQuotation {
  /** Type of the block, always “pullquote” */
  type: "pullquote";
  /** Text of the block */
  text: RichText;
  /** Credit of the block */
  credit?: RichText;
}

/** A collage, corresponding to the custom HTML tag \<tg-collage>. */
export interface RichBlockCollage {
  /** Type of the block, always “collage” */
  type: "collage";
  /** Elements of the collage */
  blocks: RichBlock[];
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A slideshow, corresponding to the custom HTML tag \<tg-slideshow>. */
export interface RichBlockSlideshow {
  /** Type of the block, always “slideshow” */
  type: "slideshow";
  /** Elements of the slideshow */
  blocks: RichBlock[];
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A table, corresponding to the HTML tag \<table>. */
export interface RichBlockTable {
  /** Type of the block, always “table” */
  type: "table";
  /** Cells of the table */
  cells: RichBlockTableCell[][];
  /** True, if the table has borders */
  is_bordered?: true;
  /** True, if the table is striped */
  is_striped?: true;
  /** Caption of the table */
  caption?: RichText;
}

/** An expandable block for details disclosure, corresponding to the HTML tag \<details>. */
export interface RichBlockDetails {
  /** Type of the block, always “details” */
  type: "details";
  /** Always shown summary of the block */
  summary: RichText;
  /** Content of the block */
  blocks: RichBlock[];
  /** True, if the content of the block is visible by default */
  is_open?: true;
}

/** A block with a map, corresponding to the custom HTML tag \<tg-map>. */
export interface RichBlockMap {
  /** Type of the block, always “map” */
  type: "map";
  /** Location of the center of the map */
  location: Location;
  /** Map zoom level; 13-20 */
  zoom: 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
  /** Expected width of the map */
  width: number;
  /** Expected height of the map */
  height: number;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with an animation, corresponding to the HTML tag \<video>. */
export interface RichBlockAnimation {
  /** Type of the block, always “animation” */
  type: "animation";
  /** The animation */
  animation: Animation;
  /** True, if the media preview is covered by a spoiler animation */
  has_spoiler?: true;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with a music file, corresponding to the HTML tag \<audio>. */
export interface RichBlockAudio {
  /** Type of the block, always “audio” */
  type: "audio";
  /** The audio */
  audio: Audio;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with a photo, corresponding to the HTML tag \<photo>. */
export interface RichBlockPhoto {
  /** Type of the block, always “photo” */
  type: "photo";
  /** Available sizes of the photo */
  photo: PhotoSize[];
  /** True, if the media preview is covered by a spoiler animation */
  has_spoiler?: true;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with a video, corresponding to the HTML tag \<video>. */
export interface RichBlockVideo {
  /** Type of the block, always “video” */
  type: "video";
  /** The video */
  video: Video;
  /** True, if the media preview is covered by a spoiler animation */
  has_spoiler?: true;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with a voice note, corresponding to the HTML tag \<audio>. */
export interface RichBlockVoiceNote {
  /** Type of the block, always “voice_note” */
  type: "voice_note";
  /** The voice note */
  voice_note: Voice;
  /** Caption of the block */
  caption?: RichBlockCaption;
}

/** A block with a “Thinking…” placeholder, corresponding to the custom HTML tag \<tg-thinking>. The block may be used only in sendRichMessageDraft, therefore it can't be received in messages. See https://t.me/addemoji/AIActions for examples of custom emoji, which are recommended for usage in the block. */
export interface RichBlockThinking {
  /** Type of the block, always “thinking” */
  type: "thinking";
  /** Text of the block. See https://t.me/addemoji/AIActions for examples of custom emoji, which are recommended for usage in the block. */
  text: RichText;
}
