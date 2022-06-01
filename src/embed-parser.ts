import type { MessageEmbed } from 'discord.js';
import { BurnEmbed, GachaCharacterEmbed, WishlistEmbed } from './structures';

export function parseWishlistEmbed(embed: MessageEmbed): WishlistEmbed {
    return new WishlistEmbed({ embed });
}

export function parseGachaCharacterEmbed(embed: MessageEmbed): GachaCharacterEmbed {
    return new GachaCharacterEmbed({ embed });
}
export function parseBurnEmbed(embed: MessageEmbed): BurnEmbed {
    return new BurnEmbed({ embed });
}
