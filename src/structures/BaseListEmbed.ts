import type { MessageEmbed } from 'discord.js';

/**
 * A basic implementation for list-like embeds from LafiuBot
 */
export abstract class BaseListEmbed {
    /**
     * The name used in the title of this embed
     */
    protected name: string;
    /**
     * The rows of data in the description of this embed
     */
    protected data: string[];
    /**
     * The type of embed
     */
    protected identifier: string;

    constructor(embed: MessageEmbed) {
        const titleParts = (embed.title as string).split(' - ');
        this.name = titleParts[0];
        this.identifier = titleParts[1];

        this.data = (embed.description as string).split(/\n+/);
    }
}
