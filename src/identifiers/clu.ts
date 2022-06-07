import type { MessageEmbed } from 'discord.js';

export function isSearchEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('- Searching') ?? false;
}

export function isErrorEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Error');

    if (field) {
        const validField = field.value.includes('Lookup');
        return validField;
    }
    return false;
}
