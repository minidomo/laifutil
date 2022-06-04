import type { EmbedField, MessageEmbed } from 'discord.js';
import { BaseSimpleCharacter } from './BaseSimpleCharacter';

const ACCOUNT_REGEX = /\*\*x(\d)\*\*\n.+\*\*x(\d+)\*\*/;

export class GachaCharacterEmbed extends BaseSimpleCharacter {
    protected OWNER_REGEX = /(.+)/;

    numStonesUsed: number | null = null;
    balance: number | null = null;

    constructor(embed: MessageEmbed) {
        super();

        if (embed.fields[3]) {
            this.parseAccountField(embed.fields[3]);
        }

        this.init(embed);
    }

    private parseAccountField(field: EmbedField) {
        const accountMatch = field.value.match(ACCOUNT_REGEX);
        if (accountMatch) {
            this.numStonesUsed = parseInt(accountMatch[1]);
            this.balance = parseInt(accountMatch[2]);
        }
    }
}
