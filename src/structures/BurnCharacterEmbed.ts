import type { APIEmbed, APIEmbedField, APIEmbedFooter } from 'discord-api-types/v10';
import { BasePersonalFullCharacterEmbed } from './BasePersonalFullCharacterEmbed';

const BURN_REWARD_REGEX = /^Burn Reward Counter: (\d+) \/ 15\n/;
const GUIDE_REGEX = /(\d+)% of players/;
const OWNER_REGEX = /(.+)/;

/** Represents a character embed from the burn command */
export class BurnCharacterEmbed extends BasePersonalFullCharacterEmbed {
    /** The current amount of characters burned until the burn reward */
    burnRewardCounter: number;
    /** The burn percent rate of this character, represented as an integer from 0 to 100 */
    burnPercentage?: number;

    constructor(embed: APIEmbed) {
        super(embed, OWNER_REGEX);

        const burnRewardMatch = (embed.footer as APIEmbedFooter).text.match(BURN_REWARD_REGEX) as RegExpMatchArray;
        this.burnRewardCounter = parseInt(burnRewardMatch[1]);

        const guideMatch = (embed.fields as APIEmbedField[])[3].value.match(GUIDE_REGEX);
        if (guideMatch) {
            this.burnPercentage = parseInt(guideMatch[1]);
        }
    }
}
