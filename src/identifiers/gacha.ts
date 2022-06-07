import type { MessageEmbed } from 'discord.js';
import { CARD_TITLE_REGEX } from './constants';
import type { Event } from './types';

export function isCharacterEmbed(embed: MessageEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields.some(val => val.name === 'Account');
        return validTitle && validField;
    }
    return false;
}

export function isBadgeEmbed(embed: MessageEmbed): boolean {
    return embed.description?.includes('You unboxed a rare badge!') ?? false;
}

export function isLoadingEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Feeling Lucky?';
}

export const medalDrop: Event = {
    isActiveEmbed(embed: MessageEmbed): boolean {
        return embed.title?.includes('Medal Drop : Active!') ?? false;
    },
    isClosedEmbed(embed: MessageEmbed): boolean {
        return embed.title?.includes('Medal Drop : Closed!') ?? false;
    },
};
