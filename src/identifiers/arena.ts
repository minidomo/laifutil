import type { MessageEmbed } from 'discord.js';

export function isInitialEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = embed.image !== null;
    const field = embed.fields.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && !validField && !validImage;
    }
    return false;
}

export function isResultEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const field = embed.fields.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && validField;
    }
    return false;
}

export function isLoadingEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = embed.image !== null;
    return validTitle && validImage;
}
