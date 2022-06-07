import type { MessageEmbed } from 'discord.js';

export function isAddEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorite') && field.value.includes('set');
    }
    return false;
}

export function isRemoveEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorites') && field.value.includes('removed');
    }
    return false;
}
