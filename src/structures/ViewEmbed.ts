import type { EmbedFooterData, MessageEmbed } from 'discord.js';
import { BasePersonalFullCharacterEmbed } from './BasePersonalFullCharacterEmbed';

const EMOJI_REGEX = /^(?:([^\s]+) )#/;
const NUM_EXISTING_REGEX = /^([\d,]+).+\n/;
const OWNER_REGEX = /^(.+) is Viewing\.\.\.$/;

function removeCommas(str: string) {
    return str.replaceAll(',', '');
}

/**
 * Represents a character embed from the view command
 */
export class ViewEmbed extends BasePersonalFullCharacterEmbed {
    /**
     * The emoji this character has from the favorite command
     */
    emoji?: string;
    /**
     * The number of existing characters with the current rarity
     */
    existingAmount?: number;

    constructor(embed: MessageEmbed) {
        super(embed, OWNER_REGEX);

        const emojiMatch = (embed.title as string).match(EMOJI_REGEX);
        if (emojiMatch) {
            this.emoji = emojiMatch[1];
        }

        const numExistingMatch = (embed.footer as EmbedFooterData).text.match(NUM_EXISTING_REGEX);
        if (numExistingMatch) {
            this.existingAmount = parseInt(removeCommas(numExistingMatch[1]));
        }
    }
}
