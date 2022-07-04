import type { EmbedFooterData, MessageEmbed } from 'discord.js';
import { BasePersonalFullCharacter } from './BasePersonalFullCharacter';

const BURN_REWARD_REGEX = /^Burn Reward Counter: (\d+) \/ 15\n/;
const GUIDE_REGEX = /(\d+)% of players/;
const OWNER_REGEX = /(.+)/;

/**
 * Represents a character embed from the burn command
 */
export class BurnCharacterEmbed extends BasePersonalFullCharacter {
    /**
     * The current amount of characters burned until the burn reward
     */
    burnRewardCounter: number;
    /**
     * The burn percent rate of this character, represented as an integer from 0 to 100
     */
    burnPercentage?: number;

    constructor(embed: MessageEmbed) {
        super(embed, OWNER_REGEX);

        const burnRewardMatch = (embed.footer as EmbedFooterData).text.match(BURN_REWARD_REGEX) as RegExpMatchArray;
        this.burnRewardCounter = parseInt(burnRewardMatch[1]);

        const guideMatch = embed.fields[3].value.match(GUIDE_REGEX);
        if (guideMatch) {
            this.burnPercentage = parseInt(guideMatch[1]);
        }
    }
}
