import type { APIEmbed } from 'discord-api-types/v10';

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;

export function isArenaInitialEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = !embed.image;
    const field = embed.fields?.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && !validField && validImage;
    }
    return false;
}

export function isArenaResultEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const field = embed.fields?.find(val => val.name === 'Attacker');

    if (field) {
        const validField = field.value.includes('+');
        return validTitle && validField;
    }
    return false;
}

export function isArenaLoadingEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('ARENA: ') ?? false;
    const validImage = !!embed.image;
    return validTitle && validImage;
}

export function isBluMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.fields?.some(e => e.name === 'Guide') ?? false;
    return validTitle && validField;
}

export function isBluInfoEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Badge Index') ?? false;
    const validField = embed.description?.includes('Badge Completion') ?? false;
    return validTitle && validField;
}

export function isBurnCharacterEmbed(embed: APIEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const field = embed.fields?.find(val => val.name === 'Guide');

        if (field) {
            const validField = field.value.includes('burn');
            return validTitle && validField;
        }
    }
    return false;
}

export function isBurnRewardEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('Burn: Rewards') ?? false;
}

export function isCluSearchEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('- Searching') ?? false;
    const validFooter = embed.footer?.text.includes(' Results Found') ?? false;
    return validTitle && validFooter;
}

export function isCluErrorEmbed(embed: APIEmbed): boolean {
    const field = embed.fields?.find(val => val.name === 'Error');

    if (field) {
        const validField = field.value.includes('Lookup');
        return validField;
    }
    return false;
}

export function isDailyClaimedEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Daily: Claimed';
}

export function isDailyCooldownEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Daily: Cooldown';
}

export function isDropCodeEmbed(embed: APIEmbed): boolean {
    return embed.description?.includes('Dropped a Case File') ?? false;
}

export function isDropOpenedEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Case File Opened';
}

export function isDropCooldownEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Drop: Cooldown';
}

export function isFavoriteAddEmbed(embed: APIEmbed): boolean {
    const field = embed.fields?.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorite') && field.value.includes('set');
    }
    return false;
}

export function isFavoriteRemoveEmbed(embed: APIEmbed): boolean {
    const field = embed.fields?.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('favorites') && field.value.includes('removed');
    }
    return false;
}

export function isGachaCharacterEmbed(embed: APIEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields?.some(val => val.name === 'Account') ?? false;
        return validTitle && validField;
    }
    return false;
}

export function isGachaBadgeEmbed(embed: APIEmbed): boolean {
    return embed.description?.includes('You unboxed a rare badge!') ?? false;
}

export function isGachaLoadingEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Feeling Lucky?';
}

export function isMedalDropActiveEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('Medal Drop : Active!') ?? false;
}

export function isMedalDropClosedEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('Medal Drop : Closed!') ?? false;
}

export function isUpgradeMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Depths of RNG') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isStarEnhancingMenuEmbed(embed: APIEmbed): boolean {
    return embed.description?.includes('Star Enhancing(SE)') ?? false;
}

export function isStarEnhancingConfirmationEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Star Enhancing') && embed.description.includes('COST');
    }
    return false;
}

export function isCardGlitchingMenuEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('Insert');
    }
    return false;
}

export function isCardGlitchingConfirmationEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Card Glitching(Glitch)') && embed.description.includes('COST');
    }
    return false;
}

export function isInfluenceSkinsMenuEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CURRENT ROTATION');
    }
    return false;
}

export function isInfluenceSkinsConfirmationEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Influence Skins') && embed.description.includes('CHANGES APPLIED');
    }
    return false;
}

export function isMedalsMenuEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('Insert');
    }
    return false;
}

export function isMedalsConfirmationEmbed(embed: APIEmbed): boolean {
    if (embed.description) {
        return embed.description.includes('Medals') && embed.description.includes('COST');
    }
    return false;
}

export function isWishlistListEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('- Wishlist') ?? false;
}

export function isWishlistAddEmbed(embed: APIEmbed): boolean {
    const field = embed.fields?.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('set');
    }
    return false;
}

export function isWishlistRemoveEmbed(embed: APIEmbed): boolean {
    const field = embed.fields?.find(val => val.name === 'Success');

    if (field) {
        return field.value.includes('wishlist') && field.value.includes('removed');
    }
    return false;
}

export function isWorkshopMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Choose an option') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a badge') ?? false;
    return validTitle && validDescription;
}

export function isBadgeTransferConfirmationEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the badge') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a influence skin') ?? false;
    return validTitle && validDescription;
}

export function isSkinTransferConfirmationEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the influence skin') ?? false;
    return validTitle && validDescription;
}

export function isViewEmbed(embed: APIEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...') ?? false;
        const validField = embed.fields?.some(val => val.name === 'Guide') ?? false;
        return validTitle && validAuthor && !validField;
    }
    return false;
}

export function isAuctionEmbed(embed: APIEmbed): boolean {
    return embed.title === 'Auction Card' ?? false;
}

export function isInfoEmbed(embed: APIEmbed): boolean {
    const validAuthor = embed.author?.name === 'Information Card';
    const validField = embed.fields?.some(val => val.name === 'Collections') ?? false;
    return validAuthor && validField;
}

export function isBadgePreviewEmbed(embed: APIEmbed): boolean {
    if (embed.title) {
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...') ?? false;
        const field = embed.fields?.find(val => val.name === 'Guide');

        if (field) {
            const validField = field.value.includes('apply');
            return validTitle && validAuthor && validField;
        }
    }
    return false;
}

export function isRewardBoxEmbed(embed: APIEmbed): boolean {
    return embed.title?.endsWith('- Reward Box') ?? false;
}

export function isCdEmbed(embed: APIEmbed): boolean {
    return embed.fields?.some(val => val.name === 'Cooldowns') ?? false;
}

export function isListEmbed(embed: APIEmbed): boolean {
    return embed.title?.endsWith('- Collection') ?? false;
}

export function isTopEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('TOP 500') ?? false;
}

export function isVoteCooldownEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('Vote: Cooldown') ?? false;
}

export function isProfileEmbed(embed: APIEmbed): boolean {
    return embed.title?.includes('Account Perks & Options') ?? false;
}

export function isCasinoEmbed(embed: APIEmbed): boolean {
    return embed.title?.endsWith('The Palace') ?? false;
}

export function isFluMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Frame Index') ?? false;
    const validField = embed.fields?.some(e => e.name === 'Guide') ?? false;
    return validTitle && validField;
}

export function isFluInfoEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.endsWith('- Frame Index') ?? false;
    const validField = embed.description?.includes('Frame Completion') ?? false;
    return validTitle && validField;
}

export function isFrameTransferMenuEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('Return a frame') ?? false;
    return validTitle && validDescription;
}

export function isFrameTransferConfirmationEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes('Card Workshop') ?? false;
    const validDescription = embed.description?.includes('returning the frame') ?? false;
    return validTitle && validDescription;
}

export function isBcompletionEmbed(embed: APIEmbed): boolean {
    const validTitle = embed.title?.includes(' - Searching') ?? false;
    const validFooter = embed.footer?.text.includes(' • Completion') ?? false;
    return validTitle && validFooter;
}
