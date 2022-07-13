import type { MessageEmbed } from 'discord.js';
import { BadgeRarity } from '../constants';

const TITLE_REGEX = /#(\d+) (.+)/;
const ACCOUNT_REGEX = /\*\*x(\d)\*\*\n.+\*\*x(\d+)\*\*/;
const RARITY_REGEX = /(.+)/;

function resolveBadgeRarity(str: string): BadgeRarity {
    const key = str.replaceAll(/ +/g, '_').replaceAll(/\*/g, '').toUpperCase();

    if (key in BadgeRarity) {
        return BadgeRarity[key as keyof typeof BadgeRarity];
    } else {
        return BadgeRarity.UNKNOWN;
    }
}

/** Represents a clu search embed from LaifuBot */
export class GachaBadgeEmbed {
    /** The badge ID */
    id: number;
    /** The title of the badge */
    title: string;
    /** The rarity of the badge */
    rarity: BadgeRarity;
    /** The number of stones used for this gacha */
    stonesUsed: number;
    /** The owner's current balance in stones */
    balance: number;

    constructor(embed: MessageEmbed) {
        const titleMatch = embed.title?.match(TITLE_REGEX) as RegExpExecArray;
        this.id = parseInt(titleMatch[1]);
        this.title = titleMatch[2];

        const rarityMatch = embed.fields[0].value.match(RARITY_REGEX) as RegExpMatchArray;
        this.rarity = resolveBadgeRarity(rarityMatch[1]);

        const accountMatch = embed.fields[1].value.match(ACCOUNT_REGEX) as RegExpMatchArray;
        this.stonesUsed = parseInt(accountMatch[1]);
        this.balance = parseInt(accountMatch[2]);
    }
}