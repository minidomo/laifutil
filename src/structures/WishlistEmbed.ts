import type { MessageEmbed } from 'discord.js';
import { ListEmbed } from './ListEmbed';
import { WishlistCharacter } from './WishlistCharacter';

const footerRegex = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;

export class WishlistEmbed extends ListEmbed {
    username: string | null = null;
    currentPage: number | null = null;
    pages: number | null = null;
    charactersWanted: number | null = null;
    characters: WishlistCharacter[] | null = null;

    constructor(embed: MessageEmbed) {
        super(embed);

        if (embed.footer) {
            const footerParts = embed.footer.text.match(footerRegex);
            if (footerParts) {
                this.currentPage = parseInt(footerParts[1]);
                this.pages = parseInt(footerParts[2]);
                this.charactersWanted = parseInt(footerParts[3]);
            }
        }

        if (this.data) {
            this.characters = this.data.map(text => new WishlistCharacter(text));
            this.username = this.name;
        }
    }
}
