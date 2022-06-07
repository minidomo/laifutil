import type { MessageEmbed } from 'discord.js';
import { CARD_TITLE_REGEX } from './constants';

export * as arena from './arena';
export * as blu from './blu';
export * as burn from './burn';
export * as clu from './clu';
export * as daily from './daily';
export * as drop from './drop';
export * as favorite from './favorite';
export * as gacha from './gacha';
export * as upgrade from './upgrade';
export * as wishlist from './wishlist';
export * as workshop from './workshop';

export * from './types';

export function isViewEmbed(embed: MessageEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...') ?? false;
        const validField = embed.fields.some(val => val.name === 'Guide');
        return validTitle && validAuthor && !validField;
    }
    return false;
}

export function isAuctionEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Auction Card' ?? false;
}

export function isInfoEmbed(embed: MessageEmbed): boolean {
    const validAuthor = embed.author?.name === 'Information Card';
    const validField = embed.fields.some(val => val.name === 'Collections');
    return validAuthor && validField;
}

export function isBadgePreviewEmbed(embed: MessageEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...') ?? false;
        const field = embed.fields.find(val => val.name === 'Guide');

        if (field) {
            const validField = field.value.includes('apply');
            return validTitle && validAuthor && validField;
        }
    }
    return false;
}

export function isRewardBoxEmbed(embed: MessageEmbed): boolean {
    return embed.title?.endsWith('- Reward Box') ?? false;
}

export function isCdEmbed(embed: MessageEmbed): boolean {
    return embed.fields.some(val => val.name === 'Cooldowns');
}

export function isListEmbed(embed: MessageEmbed): boolean {
    return embed.title?.endsWith('- Collection') ?? false;
}

export function isTopEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('TOP 500') ?? false;
}

export function isVoteCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Vote: Cooldown') ?? false;
}

export function isProfileEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Account Perks & Options') ?? false;
}
