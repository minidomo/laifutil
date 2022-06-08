import type { EmbedField } from 'discord.js';
import { BaseSimpleCharacter } from './BaseSimpleCharacter';

const CLAIM_REGEX = /\*\*Claimed By:\*\* (.+)\n\*\*Age:\*\* ([\d-]+) \| `(\d+)`/;
const BADGE_REGEX = /❦#(\d+)/;
const GLITCH_REGEX = /ɢʟɪᴛᴄʜᴇᴅ/;

/**
 * An extension of {@link BaseSimpleCharacter} with additional information
 */
export abstract class BaseFullCharacter extends BaseSimpleCharacter {
    /**
     * The username of the initial user that claimed this character
     */
    claimedBy?: string;
    /**
     * The date when this character was claimed
     */
    dateClaimed?: string;
    /**
     * The number of days since this character was claimed
     */
    age?: number;

    /**
     * The badge ID of this character
     */
    badgeId?: number;
    /**
     * Indicates whether the character is glitched or not
     */
    glitched = false;

    protected override parseGeneralInfoField(field: EmbedField) {
        super.parseGeneralInfoField(field);

        const claimMatch = field.value.match(CLAIM_REGEX);
        if (claimMatch) {
            this.claimedBy = claimMatch[1];
            this.dateClaimed = claimMatch[2];
            this.age = parseInt(claimMatch[3]);
        }
    }

    protected override parseRarityField(field: EmbedField) {
        super.parseRarityField(field);

        const badgeMatch = field.value.match(BADGE_REGEX);
        if (badgeMatch) {
            this.badgeId = parseInt(badgeMatch[1]);
        }

        this.glitched = GLITCH_REGEX.test(field.value);
    }
}
