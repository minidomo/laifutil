import type { APIEmbed, APIEmbedField } from 'discord-api-types/v10';
import { BasePersonalSimpleCharacterEmbed } from './BasePersonalSimpleCharacterEmbed';

const CLAIM_REGEX = /\*\*Claimed By:\*\* (.+)/;
const AGE_REGEX = /\*\*Age:\*\* ([\d-]+) \| `(-?\d+)`/;
const BADGE_REGEX = /❦#(\d+)/u;
const GLITCH_REGEX = /ɢʟɪᴛᴄʜᴇᴅ/u;
const INFLUENCE_SKIN_ID_REGEX = /:ig?(\d+):/;

/** An extension of {@link BasePersonalSimpleCharacterEmbed} with additional information */
export abstract class BasePersonalFullCharacterEmbed extends BasePersonalSimpleCharacterEmbed {
    /** The username of the initial user that claimed this character */
    claimedBy: string;
    /** The date when this character was claimed */
    dateClaimed?: string;
    /** The number of days since this character was claimed */
    age?: number;
    /** The badge ID of this character */
    badgeId?: number;
    /** Indicates whether the character is glitched or not */
    glitched: boolean;
    /** The influence skin ID of the character's influence skin */
    influenceSkinId?: number;

    /**
     * @param embed The embed
     * @param ownerRegex The regular expression to obtain the owner of the character
     */
    constructor(embed: APIEmbed, ownerRegex: RegExp) {
        super(embed, ownerRegex);

        const fields = embed.fields as APIEmbedField[];

        const claimMatch = fields[0].value.match(CLAIM_REGEX) as RegExpMatchArray;
        this.claimedBy = claimMatch[1];

        const ageMatch = fields[0].value.match(AGE_REGEX);
        if (ageMatch) {
            this.dateClaimed = ageMatch[1];
            this.age = parseInt(ageMatch[2]);
        }

        const rarityField = fields[1];

        const badgeMatch = rarityField.value.match(BADGE_REGEX);
        if (badgeMatch) {
            this.badgeId = parseInt(badgeMatch[1]);
        }

        const influenceSkinIdMatch = rarityField.value.match(INFLUENCE_SKIN_ID_REGEX);
        if (influenceSkinIdMatch) {
            this.influenceSkinId = parseInt(influenceSkinIdMatch[1]);
        }

        this.glitched = GLITCH_REGEX.test(rarityField.value);
    }
}
