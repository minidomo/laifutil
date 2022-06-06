import type { MessageEmbed } from 'discord.js';

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;

export function isGachaCharacterEmbed(embed: MessageEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields.some(val => val.name === 'Account');
        return validTitle && validField;
    }
    return false;
}

export function isBurnEmbed(embed: MessageEmbed): boolean {
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

export function isBluEmbed(embed: MessageEmbed): boolean {
    return embed.title?.endsWith('- Badge Index') ?? false;
}

export function isRewardBoxEmbed(embed: MessageEmbed): boolean {
    return embed.title?.endsWith('- Reward Box') ?? false;
}

export function isGachaBadgeEmbed(embed: MessageEmbed): boolean {
    return embed.description?.includes('You unboxed a rare badge!') ?? false;
}

export function isCdEmbed(embed: MessageEmbed): boolean {
    return embed.fields.some(val => val.name === 'Cooldowns') ?? false;
}

export function isListEmbed(embed: MessageEmbed): boolean {
    return embed.title?.endsWith('- Collection') ?? false;
}

export function isDropCodeEmbed(embed: MessageEmbed): boolean {
    return embed.description?.includes('Dropped a Case File') ?? false;
}

export function isDropCompletionEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Case File Opened';
}

export function isDropCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Drop: Cooldown';
}

export function isGachaLoadEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Feeling Lucky?';
}

export function isDailyClaimEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Daily: Claimed';
}

export function isDailyCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title === 'Daily: Cooldown';
}

export function isArenaInitialEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = embed.image !== null;
    const field = embed.fields.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && !validField && !validImage;
    }
    return false;
}

export function isArenaResultEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const field = embed.fields.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && validField;
    }
    return false;
}

export function isArenaGifEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = embed.image !== null;
    return validTitle && validImage;
}

export function isFavoriteEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorite') && field.value.includes('set');
    }
    return false;
}

export function isFavoriteRemovedEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorites') && field.value.includes('removed');
    }
    return false;
}

export function isTopEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('TOP 500') ?? false;
}

export function isVoteCooldownEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Vote: Cooldown') ?? false;
}

export function isCluSearchEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('- Searching') ?? false;
}

export function isCardWorkshopEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferCharacterPromptEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('swap badges') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferCostPromptEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('swapping the badges') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferCharacterPromptEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('swap skins') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferCostPromptEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('swapping the skins') ?? false;
    return validTitle && validDescription;
}

export function isWishlistEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('- Wishlist') ?? false;
}

export function isWishlistAddEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('set');
    }
    return false;
}

export function isWishlistRemoveEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('removed');
    }
    return false;
}

export function isLookUpErrorEmbed(embed: MessageEmbed): boolean {
    const field = embed.fields.find(val => val.name === 'Error');

    if (field) {
        const validField = field.value.includes('Lookup');
        return validField;
    }
    return false;
}

export function isMedalDropActiveEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Medal Drop : Active!') ?? false;
}

export function isMedalDropClosedEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Medal Drop : Closed!') ?? false;
}

export function isBurnRewardEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Burn: Rewards') ?? false;
}

export function isProfileEmbed(embed: MessageEmbed): boolean {
    return embed.title?.includes('Account Perks & Options') ?? false;
}

export function isUpgradeEmbed(embed: MessageEmbed): boolean {
    const validTitle = embed.title?.includes('Depths of RNG') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isStarEnhancingCharacterPromptEmbed(embed: MessageEmbed): boolean {
    return embed.description?.includes('Star Enhancing(SE)') ?? false;
}

export function isStarEnhancingCostPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Star Enhancing') && embed.description.includes('COST');
    }
    return false;
}

export function isCardGlitchingCharacterPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('Insert');
    }
    return false;
}

export function isCardGlitchingCostPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('COST');
    }
    return false;
}

export function isInfluenceSkinsCharacterPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CURRENT ROTATION');
    }
    return false;
}

export function isInfluenceSkinsCostPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CHANGES APPLIED');
    }
    return false;
}

export function isMedalsCharacterPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('Insert');
    }
    return false;
}

export function isMedalsCostPromptEmbed(embed: MessageEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('COST');
    }
    return false;
}
