import type { EmbedField, MessageEmbed, MessageEmbedAuthor } from 'discord.js';
import type { Consumption } from '../types';

const STONES_REGEX = /\*\*(\d)\*\*.+\((\d+)\)/;
const CONSUMPTION_REGEX = /\+ (\d+).+\+ (\d+).+\+ (\d+).+\+ (\d+)/s;
const USER_ID_REGEX = /^https:\/\/cdn\.discordapp\.com\/avatars\/(\d+)/;

/** Represents a opened drop embed from the drop command */
export class DropOpenedEmbed {
    /** The username of the user that opened the drop */
    username: string;
    /** The Discord user ID of the user that opened the drop */
    userId?: string;
    /** The number of stones received from the drop */
    stonesReceived: number;
    /** The player's current balance in stones */
    balance: number;
    /** The consumption data */
    consumption?: Consumption;

    constructor(embed: MessageEmbed) {
        const author = embed.author as MessageEmbedAuthor;
        this.username = author.name;

        const userIdMatch = author.iconURL?.match(USER_ID_REGEX) ?? undefined;
        if (userIdMatch) {
            this.userId = userIdMatch[1];
        }

        const stonesField = embed.fields[0] as EmbedField;
        const stonesMatch = stonesField.value.match(STONES_REGEX) as RegExpMatchArray;
        this.stonesReceived = parseInt(stonesMatch[1]);
        this.balance = parseInt(stonesMatch[2]);

        if (embed.fields[1]) {
            const consumptionMatch = embed.fields[1].value.match(CONSUMPTION_REGEX) as RegExpMatchArray;
            this.consumption = {
                experience: parseInt(consumptionMatch[1]),
                health: parseInt(consumptionMatch[2]),
                attack: parseInt(consumptionMatch[3]),
                defense: parseInt(consumptionMatch[4]),
            };
        }
    }
}
