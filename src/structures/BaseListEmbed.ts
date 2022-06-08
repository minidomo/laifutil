import type { MessageEmbed } from 'discord.js';

/**
 * A basic implementation for list-like embeds from LafiuBot
 */
export abstract class BaseListEmbed {
    /**
     * The name used in the title of this embed
     */
    protected name?: string;
    /**
     * The rows of data in the description of this embed
     */
    protected data?: string[];
    /**
     * The type of embed
     */
    protected identifier?: string;

    constructor(embed: MessageEmbed) {
        if (embed.title) {
            const titleParts = embed.title.split(' - ');
            this.name = titleParts[0];
            this.identifier = titleParts[1];
        }

        if (embed.description) {
            this.data = embed.description.split(/\n+/);
        }
    }
}
