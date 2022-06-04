import type { MessageEmbed } from 'discord.js';
import { BaseFullCharacter } from './BaseFullCharacter';

const EMOJI_REGEX = /^(?:([^\s]+) )?#/;
const NUM_EXISTING_REGEX = /^([\d,]+).+\n/;

function removeCommas(str: string) {
    return str.replaceAll(',', '');
}

export class ViewEmbed extends BaseFullCharacter {
    protected OWNER_REGEX = /^(.+) is Viewing\.\.\.$/;

    emoji: string | null = null;
    numExisting: number | null = null;

    constructor(embed: MessageEmbed) {
        super();

        this.init(embed);
    }

    protected override parseTitle(title: string) {
        super.parseTitle(title);

        const emojiMatch = title.match(EMOJI_REGEX);
        if (emojiMatch) {
            this.emoji = emojiMatch[1] ?? null;
        }
    }

    protected override parseFooter(text: string) {
        super.parseFooter(text);

        const numExistingMatch = text.match(NUM_EXISTING_REGEX);
        if (numExistingMatch) {
            this.numExisting = parseInt(removeCommas(numExistingMatch[1]));
        }
    }
}
