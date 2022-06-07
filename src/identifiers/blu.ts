import type { MessageEmbed } from 'discord.js';

export function isMenuEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.fields.some(e => e.name === 'Guide');
    return validTitle && validField;
}

export function isInfoEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.description?.includes('Badge Completion') ?? false;
    return validTitle && validField;
}
