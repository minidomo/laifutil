import type { MessageEmbed } from 'discord.js';
import type { Selection } from './types';

export function isMenuEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Depths of RNG') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export const starEnhancing: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        return embed.description?.includes('Star Enhancing(SE)') ?? false;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Star Enhancing') && embed.description.includes('COST');
        }
        return false;
    },
};

export const cardGlitching: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('Insert');
        }
        return false;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('COST');
        }
        return false;
    },
};

export const influenceSkins: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Influence Skins') && embed.description.includes('CURRENT ROTATION');
        }
        return false;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Influence Skins') && embed.description.includes('CHANGES APPLIED');
        }
        return false;
    },
};

export const medals: Selection = {
    isMenuEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Medals') && embed.description.includes('Insert');
        }
        return false;
    },
    isConfirmationEmbed(embed: MessageEmbed): boolean {
        if (embed.description) {
            return embed.description.includes('Medals') && embed.description.includes('COST');
        }
        return false;
    },
};
