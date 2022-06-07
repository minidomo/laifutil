import type { MessageEmbed } from 'discord.js';

export function isClaimedEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Daily: Claimed';
}

export function isCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Daily: Cooldown';
}
