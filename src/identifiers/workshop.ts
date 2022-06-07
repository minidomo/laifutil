import type { MessageEmbed } from 'discord.js';
import type { Selection } from './types';

export function isMenuEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export const badge: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        const validTitle = embed.title?.includes('Card Workshop') ?? false;
        const validDescription = embed.description?.includes('swap badges') ?? false;
        return validTitle && validDescription;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        const validTitle = embed.title?.includes('Card Workshop') ?? false;
        const validDescription = embed.description?.includes('swapping the badges') ?? false;
        return validTitle && validDescription;
    },
};

export const skin: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        const validTitle = embed.title?.includes('Card Workshop') ?? false;
        const validDescription = embed.description?.includes('swap skins') ?? false;
        return validTitle && validDescription;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        const validTitle = embed.title?.includes('Card Workshop') ?? false;
        const validDescription = embed.description?.includes('swapping the skins') ?? false;
        return validTitle && validDescription;
    },
};
