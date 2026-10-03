// @ts-check
const { Base } = require("../Base");
const { Animation } = require("../media/Animation");
const { Audio } = require("../media/Audio");
const { Photo } = require("../media/Photo");
const { Video } = require("../media/video/Video");
const { Voice } = require("../media/Voice");
const { Location } = require("../misc/Location");
const { Document } = require("../media/Document");
class RichBlockParagraph extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockParagraph} data - Data about the paragraph block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "paragraph" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;
  }
}

class RichBlockSectionHeading extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockSectionHeading} data - Data about the heading block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "heading" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;

    /** Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest */
    this.size = data.size;
  }
}

class RichBlockPreformatted extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockPreformatted} data - Data about the preformatted block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "pre" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;

    if (data.language) {
      /** The programming language of the text */
      this.language = data.language;
    }
  }
}

class RichBlockFooter extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockFooter} data - Data about the footer block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "footer" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;
  }
}

class RichBlockDivider extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockDivider} data - Data about the divider block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "divider" */
    this.type = data.type;
  }
}

class RichBlockMathematicalExpression extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockMathematicalExpression} data - Data about the mathematical expression block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "mathematical_expression" */
    this.type = data.type;

    /** The mathematical expression in LaTeX format */
    this.expression = data.expression;
  }
}

class RichBlockAnchor extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockAnchor} data - Data about the anchor block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "anchor" */
    this.type = data.type;

    /** The name of the anchor */
    this.name = data.name;
  }
}

class RichBlockList extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockList} data - Data about the list block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "list" */
    this.type = data.type;

    /** Items of the list */
    this.items = data.items;
  }
}

class RichBlockBlockQuotation extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockBlockQuotation} data - Data about the blockquote block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "blockquote" */
    this.type = data.type;

    /** Content of the block */
    this.blocks = data.blocks.map((block) => resolveRichBlock(client, block));

    if (data.credit) {
      /** Credit of the block */
      this.credit = data.credit;
    }
  }
}

class RichBlockPullQuotation extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockPullQuotation} data - Data about the pullquote block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "pullquote" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;

    if (data.credit) {
      /** Credit of the block */
      this.credit = data.credit;
    }
  }
}

class RichBlockCollage extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockCollage} data - Data about the collage block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "collage" */
    this.type = data.type;

    /** Elements of the collage */
    this.blocks = data.blocks.map((block) => resolveRichBlock(client, block));

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockSlideshow extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockSlideshow} data - Data about the slideshow block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "slideshow" */
    this.type = data.type;

    /** Elements of the slideshow */
    this.blocks = data.blocks.map((block) => resolveRichBlock(client, block));

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockTable extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockTable} data - Data about the table block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "table" */
    this.type = data.type;

    /** Cells of the table */
    this.cells = data.cells;

    if (data.is_bordered) {
      /** True, if the table has borders */
      this.isBordered = data.is_bordered;
    }

    if (data.is_striped) {
      /** True, if the table is striped */
      this.isStriped = data.is_striped;
    }

    if (data.caption) {
      /** Caption of the table */
      this.caption = data.caption;
    }
  }
}

class RichBlockDetails extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockDetails} data - Data about the details block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "details" */
    this.type = data.type;

    /** Always shown summary of the block */
    this.summary = data.summary;

    /** Content of the block */
    this.blocks = data.blocks.map((block) => resolveRichBlock(client, block));

    if (data.is_open) {
      /** True, if the content of the block is visible by default */
      this.isOpen = data.is_open;
    }
  }
}

class RichBlockMap extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockMap} data - Data about the map block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "map" */
    this.type = data.type;

    /** Location of the center of the map */
    this.location = new Location(client, data.location);

    /** Map zoom level; 13-20 */
    this.zoom = data.zoom;

    /** Expected width of the map */
    this.width = data.width;

    /** Expected height of the map */
    this.height = data.height;

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockAnimation extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockAnimation} data - Data about the animation block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "animation" */
    this.type = data.type;

    /** The animation */
    this.animation = new Animation(client, data.animation);

    if (data.has_spoiler) {
      /** True, if the media preview is covered by a spoiler animation */
      this.hasSpoiler = data.has_spoiler;
    }

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockAudio extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockAudio} data - Data about the audio block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "audio" */
    this.type = data.type;

    /** The audio */
    this.audio = new Audio(client, data.audio);

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockPhoto extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockPhoto} data - Data about the photo block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "photo" */
    this.type = data.type;

    /** Available sizes of the photo */
    this.photo = data.photo.map((photo) => new Photo(client, photo));

    if (data.has_spoiler) {
      /** True, if the media preview is covered by a spoiler animation */
      this.hasSpoiler = data.has_spoiler;
    }

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockVideo extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockVideo} data - Data about the video block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "video" */
    this.type = data.type;

    /** The video */
    this.video = new Video(client, data.video);

    if (data.has_spoiler) {
      /** True, if the media preview is covered by a spoiler animation */
      this.hasSpoiler = data.has_spoiler;
    }

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockVoiceNote extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockVoiceNote} data - Data about the voice note block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "voice_note" */
    this.type = data.type;

    /** The voice note */
    this.voiceNote = new Voice(client, data.voice_note);

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockThinking extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockThinking} data - Data about the "Thinking…" placeholder block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "thinking" */
    this.type = data.type;

    /** Text of the block */
    this.text = data.text;
  }
}

class RichBlockDocument extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockDocument} data - Data about the document block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "document" */
    this.type = data.type;

    /** The document */
    this.document = new Document(client, data.document);

    if (data.caption) {
      /** Caption of the block */
      this.caption = data.caption;
    }
  }
}

class RichBlockButtons extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockButtons} data - Data about the buttons block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "buttons" */
    this.type = data.type;

    /** The buttons */
    this.buttons = data.buttons;

    if (data.align) {
      /** Horizontal alignment of the buttons: "left", "center" or "right" */
      this.align = data.align;
    }
  }
}

class RichBlockExpandableBlockQuotation extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichBlockExpandableBlockQuotation} data - Data about the "Thinking…" placeholder block
   */
  constructor(client, data) {
    super(client);

    /** Type of the block, always "“expandable_blockquote”" */
    this.type = data.type;

    /** Content of the block */
    this.text = data.text;

    if ("credit" in data) {
      /** Credit of the block */
      this.credit = data.credit;
    }
  }
}

/** Maps a block's `type` discriminator to the class that wraps it */
const RichBlockTypes = {
  paragraph: RichBlockParagraph,
  heading: RichBlockSectionHeading,
  pre: RichBlockPreformatted,
  footer: RichBlockFooter,
  divider: RichBlockDivider,
  mathematical_expression: RichBlockMathematicalExpression,
  anchor: RichBlockAnchor,
  list: RichBlockList,
  blockquote: RichBlockBlockQuotation,
  pullquote: RichBlockPullQuotation,
  collage: RichBlockCollage,
  slideshow: RichBlockSlideshow,
  table: RichBlockTable,
  details: RichBlockDetails,
  map: RichBlockMap,
  animation: RichBlockAnimation,
  audio: RichBlockAudio,
  document: RichBlockDocument,
  photo: RichBlockPhoto,
  video: RichBlockVideo,
  voice_note: RichBlockVoiceNote,
  thinking: RichBlockThinking,
  buttons: RichBlockButtons,
  expandable_blockquote: RichBlockExpandableBlockQuotation,
};

/**
 * Wraps a raw rich block object into an instance of its matching class,
 * based on the block's `type` discriminator.
 * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
 * @param {import("@telegram.ts/types").RichBlock} data - Raw block data returned by the API
 * @returns {InstanceType<(typeof RichBlockTypes)[keyof typeof RichBlockTypes]>}
 */
function resolveRichBlock(client, data) {
  /** @type {keyof typeof RichBlockTypes} */
  const type = data.type;

  if (!Object.prototype.hasOwnProperty.call(RichBlockTypes, type)) {
    throw new TypeError(`Unknown rich block type: "${data.type}"`);
  }

  const RichBlockClass = RichBlockTypes[type];

  if (typeof RichBlockClass !== "function") {
    throw new TypeError(`Invalid rich block constructor for type: "${data.type}"`);
  }

  // Each block class accepts its own narrowed block type, while the lookup
  // returns a union of those constructors. TypeScript otherwise treats the
  // constructor parameter as an intersection of all block types.
  return new /** @type {any} */ (RichBlockClass)(client, data);
}

class RichMessage extends Base {
  /**
   * @param {import("../../client/TelegramClient").TelegramClient | import("../../client/BaseClient").BaseClient} client - The client that instantiated this
   * @param {import("@telegram.ts/types").RichMessage} data - Data about the rich formatted message
   */
  constructor(client, data) {
    super(client);

    /** Content of the message */
    this.blocks = data.blocks.map((block) => resolveRichBlock(client, block));

    if (data.is_rtl) {
      /** True, if the rich message must be shown right-to-left */
      this.isRtl = data.is_rtl;
    }
  }
}

module.exports = { RichMessage };
