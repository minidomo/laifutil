import type { MessageEmbed } from 'discord.js';
import { BasePersonalSimpleCharacterEmbed } from './BasePersonalSimpleCharacterEmbed';

const CLAIM_REGEX = /\*\*Claimed By:\*\* (.+)\n\*\*Age:\*\* ([\d-]+) \| `(\d+)`/;
const BADGE_REGEX = /❦#(\d+)/u;
const GLITCH_REGEX = /ɢʟɪᴛᴄʜᴇᴅ/u;

/** An extension of {@link BasePersonalSimpleCharacterEmbed} with additional information */
export abstract class BasePersonalFullCharacterEmbed extends BasePersonalSimpleCharacterEmbed {
    /** The username of the initial user that claimed this character */
    claimedBy: string;
    /** The date when this character was claimed */
    dateClaimed: string;
    /** The number of days since this character was claimed */
    age: number;
    /** The badge ID of this character */
    badgeId?: number;
    /** Indicates whether the character is glitched or not */
    glitched: boolean;

    /**
     * @param embed The embed
     * @param ownerRegex The regular expression to obtain the owner of the character
     */
    constructor(embed: MessageEmbed, ownerRegex: RegExp) {
        super(embed, ownerRegex);

        const claimMatch = embed.fields[0].value.match(CLAIM_REGEX) as RegExpMatchArray;
        this.claimedBy = claimMatch[1];
        this.dateClaimed = claimMatch[2];
        this.age = parseInt(claimMatch[3]);

        const rarityField = embed.fields[1];

        const badgeMatch = rarityField.value.match(BADGE_REGEX);
        if (badgeMatch) {
            this.badgeId = parseInt(badgeMatch[1]);
        }

        this.glitched = GLITCH_REGEX.test(rarityField.value);
    }
}
