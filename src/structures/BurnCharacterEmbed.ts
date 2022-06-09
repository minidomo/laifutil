import type { EmbedField, MessageEmbed } from 'discord.js';
import { BaseFullCharacter } from './BaseFullCharacter';

const BURN_REWARD_REGEX = /^Burn Reward Counter: (\d+) \/ 15\n/;
const GUIDE_REGEX = /(\d+)% of players/;

/**
 * Represents a character embed from the burn command
 */
export class BurnCharacterEmbed extends BaseFullCharacter {
    protected OWNER_REGEX = /(.+)/;

    /**
     * The current amount of characters burned until the burn reward
     */
    burnRewardCounter?: number;
    /**
     * The burn percent rate of this character, represented as an integer from 0 to 100
     */
    burnPercentage?: number;

    constructor(embed: MessageEmbed) {
        super();

        if (embed.fields[3]) {
            this.parseGuideField(embed.fields[3]);
        }

        this.init(embed);
    }

    protected override parseFooter(text: string) {
        super.parseFooter(text);

        const burnRewardMatch = text.match(BURN_REWARD_REGEX);
        if (burnRewardMatch) {
            this.burnRewardCounter = parseInt(burnRewardMatch[1]);
        }
    }

    protected parseGuideField(field: EmbedField) {
        const guideMatch = field.value.match(GUIDE_REGEX);
        if (guideMatch) {
            this.burnPercentage = parseInt(guideMatch[1]);
        }
    }
}
