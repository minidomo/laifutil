import type { MessageEmbed } from 'discord.js';
import { CARD_TITLE_REGEX } from './constants';

export function isCharacterEmbed(embed: MessageEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const field = embed.fields.find(val => val.name === 'Guide');

        if (field) {
            const validField = field.value.includes('burn');
            return validTitle && validField;
        }
    }
    return false;
}

export function isRewardEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Burn: Rewards') ?? false;
}
