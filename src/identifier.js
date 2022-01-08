'use strict';

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;

module.exports = {
    /**
     * Checks if the given embed is from gacha and is a character
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGachaCharacterEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields?.some(val => val.name === 'Account');
        return validTitle && validField;
    },
    /**
     * Checks if the given embed is from burn
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBurnEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields?.some(val => val.name === 'Guide')
            && embed.fields.find(val => val.name === 'Guide').value.includes('burn');
        return validTitle && validField;
    },
    /**
     * Checks if the given embed is from view
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isViewEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...');
        const validField = embed.fields?.some(val => val.name === 'Guide');
        return validTitle && validAuthor && !validField;
    },
    /**
     * Checks if the given embed is from auction
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isAuctionEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Auction Card';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from info
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isInfoEmbed(embed) {
        if (!embed) return false;
        const validAuthor = embed.author?.name === 'Information Card';
        const validField = embed.fields?.some(val => val.name === 'Collections');
        return validAuthor && validField;
    },
    /**
     * Checks if the given embed is from badge preview
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBadgePreviewEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...');
        const validField = embed.fields?.some(val => val.name === 'Guide')
            && embed.fields.find(val => val.name === 'Guide').value.includes('apply');
        return validTitle && validAuthor && validField;
    },
    /**
     * Checks if the given embed is from blu
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBluEmbed(embed) {
        if (!embed) return false;
        const validAuthor = embed.author?.name === 'Detailed Badge View';
        return validAuthor === true;
    },
    /**
     * Checks if the given embed is from reward box
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isRewardBoxEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.endsWith('- Reward Box');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from gacha and is a badge
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGachaBadgeEmbed(embed) {
        if (!embed) return false;
        const validDescription = embed.description?.includes('You unboxed a rare badge!');
        return validDescription === true;
    },
    /**
     * Checks if the given embed is from cd
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isCdEmbed(embed) {
        if (!embed) return false;
        const validField = embed.fields?.some(val => val.name === 'Cooldowns');
        return validField === true;
    },
    /**
     * Checks if the given embed is from list
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isListEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.endsWith('- Collection');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from drop code
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCodeEmbed(embed) {
        if (!embed) return false;
        const validDescription = embed.description?.includes('Dropped a Case File');
        return validDescription === true;
    },
    /**
     * Checks if the given embed is from drop completion
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCompletionEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Case File Opened';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from drop cooldown
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCooldownEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Drop: Cooldown';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from loading a gacha
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGachaLoadEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Feeling Lucky?';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from daily claim
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDailyClaimEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Daily: Claimed';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from daily cooldown
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDailyCooldownEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Daily: Cooldown';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from arena initial
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isArenaInitialEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('ARENA: ');
        const validImage = embed.image !== null;
        const validField = embed.fields?.some(val => val.name === 'Attacker') &&
            embed.fields.find(val => val.name === 'Attacker').value.includes('+');
        return validTitle && !validField && !validImage;
    },
    /**
     * Checks if the given embed is from arena result
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isArenaResultEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('ARENA: ');
        const validField = embed.fields?.some(val => val.name === 'Attacker') &&
            embed.fields.find(val => val.name === 'Attacker').value.includes('+');
        return validTitle && validField;
    },
    /**
     * Checks if the given embed is from arena gif
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isArenaGifEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('ARENA: ');
        const validImage = embed.image !== null;
        return validTitle && validImage;
    },
    /**
     * Checks if the given embed is from favorite
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isFavoriteEmbed(embed) {
        if (!embed) return false;
        const validField = embed.fields?.some(val => val.name === 'Success') &&
            embed.fields.find(val => val.name === 'Success').value.includes('favorite');
        return validField === true;
    },
    /**
     * Checks if the given embed is from top
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isTopEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('TOP 500');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from vote cooldown
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isVoteCooldownEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('Vote: Cooldown');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from clu
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isCluSearchEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('- Searching');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from workshop
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isCardWorkshopEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('Card Workshop');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from wishlist
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isWishlistEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('- Wishlist');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from wishlist add
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isWishlistAddEmbed(embed) {
        if (!embed) return false;
        const field = embed.fields.find(val => val.name === 'Success');
        if (!field) return false;
        const validField = field.value.includes('wishlist') && field.value.includes('set');
        return validField;
    },
    /**
     * Checks if the given embed is from wishlist remove
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isWishlistRemoveEmbed(embed) {
        if (!embed) return false;
        const field = embed.fields.find(val => val.name === 'Success');
        if (!field) return false;
        const validField = field.value.includes('wishlist') && field.value.includes('removed');
        return validField;
    },
};
