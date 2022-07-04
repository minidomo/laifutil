import type { MessageEmbed } from 'discord.js';
import { BasePersonalSimpleCharacterEmbed } from './BasePersonalSimpleCharacterEmbed';

const ACCOUNT_REGEX = /\*\*x(\d)\*\*\n.+\*\*x(\d+)\*\*/;
const OWNER_REGEX = /(.+)/;

/**
 * Represents a character embed from the gacha command
 */
export class GachaCharacterEmbed extends BasePersonalSimpleCharacterEmbed {
    /**
     * The number of stones used for this gacha
     */
    stonesUsed: number;
    /**
     * The owner's current balance in stones
     */
    balance: number;

    constructor(embed: MessageEmbed) {
        super(embed, OWNER_REGEX);

        const accountMatch = embed.fields[3].value.match(ACCOUNT_REGEX) as RegExpMatchArray;
        this.stonesUsed = parseInt(accountMatch[1]);
        this.balance = parseInt(accountMatch[2]);
    }
}
