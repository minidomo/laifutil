import type { MessageEmbed } from 'discord.js';
import { BaseListEmbed } from './BaseListEmbed';
import type { WishlistCharacter } from './types';

const FOOTER_REGEX = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;
const ROW_REGEX = /(\d+) \| (.+)・\*\*(\d+)/;

/**
 * Represents a wishlist embed from LaifuBot
 */
export class WishlistListEmbed extends BaseListEmbed {
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
            this.username = this.name;
            this.characters = this.data.map(text => {
                const obj: WishlistCharacter = {};

                const rowMatch = text.match(ROW_REGEX);
                if (rowMatch) {
                    obj.gid = parseInt(rowMatch[1]);
                    obj.name = rowMatch[2];
                    obj.influence = parseInt(rowMatch[3]);
                }

                return obj;
            });
        }
    }
}
