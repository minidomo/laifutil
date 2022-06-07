import type { MessageEmbed } from 'discord.js';

export function isListEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('- Wishlist') ?? false;
}

export function isAddEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('set');
    }
    return false;
}

export function isRemoveEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('removed');
    }
    return false;
}
