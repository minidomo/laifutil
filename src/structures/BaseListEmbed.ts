import type { MessageEmbed, MessageEmbedFooter } from 'discord.js';

const FOOTER_REGEX = /Page (\d+)\/(\d+) • (\d+) /;

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
    /**
     * The current page the embed is on
     */
    currentPage: number;
    /**
     * The number of pages available on this embed
     */
    pages: number;
    /**
     * The number of entities in the entire list
     */
    entities: number;

    constructor(embed: MessageEmbed) {
        const titleParts = (embed.title as string).split(' - ');
        this.name = titleParts[0];
        this.identifier = titleParts[1];

        this.data = (embed.description as string).split(/\n+/);

        const footerMatch = (embed.footer as MessageEmbedFooter).text.match(FOOTER_REGEX) as RegExpMatchArray;
        this.currentPage = parseInt(footerMatch[1]);
        this.pages = parseInt(footerMatch[2]);
        this.entities = parseInt(footerMatch[3]);
    }
}
