import type { MessageEmbed } from 'discord.js';

export function isCodeEmbed(embed: MessageEmbed): boolean {
    return embed.description?.includes('Dropped a Case File') ?? false;
}

export function isOpenedEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Case File Opened';
}

export function isCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Drop: Cooldown';
}
