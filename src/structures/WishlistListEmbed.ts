import type { MessageEmbed, MessageEmbedFooter } from 'discord.js';
import { BaseListEmbed } from './BaseListEmbed';
import type { WishlistCharacter } from '../types';

const FOOTER_REGEX = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;
const ROW_REGEX = /(\d+) \| (.+)・\*\*(\d+)/;

/**
 * Represents a wishlist embed from LaifuBot
 */
export class WishlistListEmbed extends BaseListEmbed {
    /**
     * The username of which the wishlist command was used on
     */
    username: string;
    /**
     * The current page the embed is on
     */
    currentPage: number;
    /**
     * The number of pages available on this embed
     */
    pages: number;
    /**
     * The number of characters wanted on this embed
     */
    charactersWanted: number;
    /**
     * The list of characters currently displayed on this embed
     */
    characters: WishlistCharacter[];

    constructor(embed: MessageEmbed) {
        super(embed);

        this.username = this.name;

        const footerMatch = (embed.footer as MessageEmbedFooter).text.match(FOOTER_REGEX) as RegExpMatchArray;
        this.currentPage = parseInt(footerMatch[1]);
        this.pages = parseInt(footerMatch[2]);
        this.charactersWanted = parseInt(footerMatch[3]);

        this.characters = this.data.map(text => {
            const rowMatch = text.match(ROW_REGEX) as RegExpMatchArray;

            return {
                globalId: parseInt(rowMatch[1]),
                name: rowMatch[2],
                influence: parseInt(rowMatch[3]),
            } as WishlistCharacter;
        });
    }
}
