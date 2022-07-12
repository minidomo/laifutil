import type { MessageEmbed } from 'discord.js';
import { BaseListEmbed } from './BaseListEmbed';
import { WishlistCharacter } from './WishlistCharacter';

/** Represents a wishlist embed from LaifuBot */
export class WishlistListEmbed extends BaseListEmbed {
    /** The username of the user this wishlist belongs to */
    username: string;
    /** The list of characters currently displayed on this embed */
    characters: WishlistCharacter[];

    constructor(embed: MessageEmbed) {
        super(embed);

        this.username = this.name;

        this.characters = this.data.map(line => new WishlistCharacter(line));
    }
}
