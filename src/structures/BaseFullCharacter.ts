import type { EmbedField } from 'discord.js';
import { BaseSimpleCharacter } from './BaseSimpleCharacter';

const CLAIM_REGEX = /\*\*Claimed By:\*\* (.+)\n\*\*Age:\*\* ([\d-]+) \| `(\d+)`/;
const BADGE_REGEX = /❦#(\d+)/;
const GLITCH_REGEX = /ɢʟɪᴛᴄʜᴇᴅ/;

export abstract class BaseFullCharacter extends BaseSimpleCharacter {
    claimedBy: string | null = null;
    dateClaimed: string | null = null;
    age: number | null = null;

    badgeId: number | null = null;
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
