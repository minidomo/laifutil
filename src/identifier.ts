import type { MessageEmbed } from 'discord.js';

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;

export function isArenaInitialEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
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
    if (!embed) return false;
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const field = embed.fields.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && validField;
    }
    return false;
}

export function isArenaLoadingEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = embed.image !== null;
    return validTitle && validImage;
}

export function isBluMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.fields.some(e => e.name === 'Guide');
    return validTitle && validField;
}

export function isBluInfoEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.description?.includes('Badge Completion') ?? false;
    return validTitle && validField;
}

export function isBurnCharacterEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
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

export function isBurnRewardEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('Burn: Rewards') ?? false;
}

export function isCluSearchEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('- Searching') ?? false;
    const validFooter = embed.footer?.text.includes(' Results Found') ?? false;
    return validTitle && validFooter;
}

export function isCluErrorEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const field = embed.fields.find(val => val.name === 'Error');

    if (field) {
        const validField = field.value.includes('Lookup');
        return validField;
    }
    return false;
}

export function isDailyClaimedEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Daily: Claimed';
}

export function isDailyCooldownEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Daily: Cooldown';
}

export function isDropCodeEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.description?.includes('Dropped a Case File') ?? false;
}

export function isDropOpenedEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Case File Opened';
}

export function isDropCooldownEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Drop: Cooldown';
}

export function isFavoriteAddEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorite') && field.value.includes('set');
    }
    return false;
}

export function isFavoriteRemoveEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorites') && field.value.includes('removed');
    }
    return false;
}

export function isGachaCharacterEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields.some(val => val.name === 'Account');
        return validTitle && validField;
    }
    return false;
}

export function isGachaBadgeEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.description?.includes('You unboxed a rare badge!') ?? false;
}

export function isGachaLoadingEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Feeling Lucky?';
}

export function isMedalDropActiveEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('Medal Drop : Active!') ?? false;
}

export function isMedalDropClosedEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('Medal Drop : Closed!') ?? false;
}

export function isUpgradeMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Depths of RNG') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isStarEnhancingMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.description?.includes('Star Enhancing(SE)') ?? false;
}

export function isStarEnhancingConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Star Enhancing') && embed.description.includes('COST');
    }
    return false;
}

export function isCardGlitchingMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('Insert');
    }
    return false;
}

export function isCardGlitchingConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('COST');
    }
    return false;
}

export function isInfluenceSkinsMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CURRENT ROTATION');
    }
    return false;
}

export function isInfluenceSkinsConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CHANGES APPLIED');
    }
    return false;
}

export function isMedalsMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('Insert');
    }
    return false;
}

export function isMedalsConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('COST');
    }
    return false;
}

export function isWishlistListEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('- Wishlist') ?? false;
}

export function isWishlistAddEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('set');
    }
    return false;
}

export function isWishlistRemoveEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const field = embed.fields.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('removed');
    }
    return false;
}

export function isWorkshopMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a badge') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the badge') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a influence skin') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the influence skin') ?? false;
    return validTitle && validDescription;
}

export function isViewEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...') ?? false;
        const validField = embed.fields.some(val => val.name === 'Guide');
        return validTitle && validAuthor && !validField;
    }
    return false;
}

export function isAuctionEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title === 'Auction Card' ?? false;
}

export function isInfoEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validAuthor = embed.author?.name === 'Information Card';
    const validField = embed.fields.some(val => val.name === 'Collections');
    return validAuthor && validField;
}

export function isBadgePreviewEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
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
    if (!embed) return false;
    return embed.title?.endsWith('- Reward Box') ?? false;
}

export function isCdEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.fields.some(val => val.name === 'Cooldowns');
}

export function isListEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.endsWith('- Collection') ?? false;
}

export function isTopEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('TOP 500') ?? false;
}

export function isVoteCooldownEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('Vote: Cooldown') ?? false;
}

export function isProfileEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.includes('Account Perks & Options') ?? false;
}

export function isCasinoEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    return embed.title?.endsWith('The Palace') ?? false;
}

export function isFluMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.endsWith('- Frame Index') ?? false;
    const validField = embed.fields.some(e => e.name === 'Guide');
    return validTitle && validField;
}

export function isFluInfoEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.endsWith('- Frame Index') ?? false;
    const validField = embed.description?.includes('Frame Completion') ?? false;
    return validTitle && validField;
}

export function isFrameTransferMenuEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a frame') ?? false;
    return validTitle && validDescription;
}

export function isFrameTransferConfirmationEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the frame') ?? false;
    return validTitle && validDescription;
}

export function isBcompletionEmbed(embed: MessageEmbed): boolean {
    if (!embed) return false;
    const validTitle = embed.title?.includes(' - Searching') ?? false;
    const validFooter = embed.footer?.text.includes(' • Completion') ?? false;
    return validTitle && validFooter;
}
