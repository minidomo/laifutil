import type { MessageEmbed } from 'discord.js';
import { BaseListEmbed } from './BaseListEmbed';
import { WishlistCharacter } from './WishlistCharacter';

const FOOTER_REGEX = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;

/**
 * Represents a wishlist embed from LaifuBot
 */
export class WishlistEmbed extends BaseListEmbed {
    /**
     * The username of which the wishlist command was used on
     */
    username?: string;
    /**
     * The current page the embed is on
     */
    currentPage?: number;
    /**
     * The number of pages available on this embed
     */
    pages?: number;
    /**
     * The number of characters wanted on this embed
     */
    charactersWanted?: number;
    /**
     * The list of characters currently displayed on this embed
     */
    characters: WishlistCharacter[] = [];

    constructor(embed: MessageEmbed) {
        super(embed);

        if (embed.footer) {
            const footerMatch = embed.footer.text.match(FOOTER_REGEX);
            if (footerMatch) {
                this.currentPage = parseInt(footerMatch[1]);
                this.pages = parseInt(footerMatch[2]);
                this.charactersWanted = parseInt(footerMatch[3]);
            }
        }

        if (this.data) {
            this.characters = this.data.map(text => new WishlistCharacter(text));
            this.username = this.name;
        }
    }
}
