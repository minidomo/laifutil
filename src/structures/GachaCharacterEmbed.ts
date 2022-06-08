import type { EmbedField, MessageEmbed } from 'discord.js';
import { BaseSimpleCharacter } from './BaseSimpleCharacter';

const ACCOUNT_REGEX = /\*\*x(\d)\*\*\n.+\*\*x(\d+)\*\*/;

/**
 * Represents a character embed from the gacha command
 */
export class GachaCharacterEmbed extends BaseSimpleCharacter {
    protected OWNER_REGEX = /(.+)/;

    /**
     * The number of stones used for this gacha
     */
    numStonesUsed?: number;
    /**
     * The owner's current balance in stones
     */
    balance?: number;

    constructor(embed: MessageEmbed) {
        super();

        if (embed.fields[3]) {
            this.parseAccountField(embed.fields[3]);
        }

        this.init(embed);
    }

    protected parseAccountField(field: EmbedField) {
        const accountMatch = field.value.match(ACCOUNT_REGEX);
        if (accountMatch) {
            this.numStonesUsed = parseInt(accountMatch[1]);
            this.balance = parseInt(accountMatch[2]);
        }
    }
}
