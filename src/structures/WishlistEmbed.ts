import { ListEmbed, ListEmbedOptions } from './ListEmbed';
import { WishlistCharacter } from './WishlistCharacter';

const footerRegex = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;

export class WishlistEmbed extends ListEmbed {
    username: string | null = null;
    currentPage: number | null = null;
    pages: number | null = null;
    charactersWanted: number | null = null;
    characters: WishlistCharacter[] | null = null;

    constructor(data: ListEmbedOptions) {
        super(data);

        if (data.embed.footer) {
            const footerRes = data.embed.footer.text.match(footerRegex);
            if (footerRes) {
                this.currentPage = parseInt(footerRes[1]);
                this.pages = parseInt(footerRes[2]);
                this.charactersWanted = parseInt(footerRes[3]);
            }
        }

        if (this.data) {
            this.characters = this.data.map(text => new WishlistCharacter({ text }));
            this.username = this.name;
        }
    }
}
