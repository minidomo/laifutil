import type { MessageEmbed } from 'discord.js';
import { BaseFullCharacter } from './BaseFullCharacter';

const EMOJI_REGEX = /^(?:([^\s]+) )?#/;
const NUM_EXISTING_REGEX = /^([\d,]+).+\n/;

function removeCommas(str: string) {
    return str.replaceAll(',', '');
}

/**
 * Represents a character embed from the view command
 */
export class ViewEmbed extends BaseFullCharacter {
    protected OWNER_REGEX = /^(.+) is Viewing\.\.\.$/;

    /**
     * The emoji this character has from the favorite command
     */
    emoji?: string;
    /**
     * The number of existing characters with the current rarity
     */
    existingAmount = 0;

    constructor(embed: MessageEmbed) {
        super();

        this.init(embed);
    }

    protected override parseTitle(title: string) {
        super.parseTitle(title);

        const emojiMatch = title.match(EMOJI_REGEX);
        if (emojiMatch) {
            this.emoji = emojiMatch[1];
        }
    }

    protected override parseFooter(text: string) {
        super.parseFooter(text);

        const numExistingMatch = text.match(NUM_EXISTING_REGEX);
        if (numExistingMatch) {
            this.existingAmount = parseInt(removeCommas(numExistingMatch[1]));
        }
    }
}
