import type { MessageEmbed } from 'discord.js';
import { ListEmbed } from './ListEmbed';
import { WishlistCharacter } from './WishlistCharacter';

const FOOTER_REGEX = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;

export class WishlistEmbed extends ListEmbed {
    username: string | null = null;
    currentPage: number | null = null;
    pages: number | null = null;
    charactersWanted: number | null = null;
    characters: WishlistCharacter[] | null = null;

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
