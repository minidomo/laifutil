import type { MessageEmbed } from 'discord.js';
import { WishlistEmbed } from './structures';

export function parseWishlistEmbed(embed: MessageEmbed) {
    return new WishlistEmbed({ embed });
}
