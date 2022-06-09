import type { MessageEmbed } from 'discord.js';
import type { Consumption } from './types';

const STONES_REGEX = /\*\*(\d)\*\*.+\((\d+)\)/;
const CONSUMPTION_REGEX = /\+ (\d+).+\+ (\d+).+\+ (\d+).+\+ (\d+)/s;

/**
 * Represents a opened drop embed from the drop command
 */
export class DropOpenedEmbed {
    /**
     * The username of the user that opened the drop
     */
    username?: string;
    /**
     * The number of stones received from the drop
     */
    stonesReceived?: number;
    /**
     * The player's current balance in stones
     */
    balance?: number;
    /**
     * The consumption data
     */
    consumption?: Consumption;

    constructor(embed: MessageEmbed) {
        if (embed.author?.name) {
            this.username = embed.author.name;
        }

        if (embed.fields[0]) {
            const stonesMatch = embed.fields[0].value.match(STONES_REGEX);
            if (stonesMatch) {
                this.stonesReceived = parseInt(stonesMatch[1]);
                this.balance = parseInt(stonesMatch[2]);
            }
        }

        if (embed.fields[1]) {
            const consumptionMatch = embed.fields[1].value.match(CONSUMPTION_REGEX);
            if (consumptionMatch) {
                this.consumption = {
                    experience: parseInt(consumptionMatch[1]),
                    health: parseInt(consumptionMatch[2]),
                    attack: parseInt(consumptionMatch[3]),
                    defense: parseInt(consumptionMatch[4]),
                };
            }
        }
    }
}
