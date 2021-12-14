'use strict';

const Discord = require('discord.js');
console.log(new Discord.MessageEmbed().fields);

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;
const GENERAL_INFO_REGEX = /\*\*UID:\*\* (\d+) | \*\*GID:\*\* (\d+)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* ([^\n]+)\n\*\*JP:\*\* ([^\n]+)\n\*\*SID:\*\* (\d+)/;

module.exports = {
    /**
     * Checks if the given embed is from gacha and is a character
     * @param {Discord.MessageEmbed} embed a Discord embed
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
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBurnEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validField = embed.fields?.some(val => val.name === 'Guide');
        return validTitle && validField;
    },
    /**
     * Checks if the given embed is from view
     * @param {Discord.MessageEmbed} embed a Discord embed
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
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isAuctionEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Auction Card';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from info
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isInfoEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Information Card';
        const validField = embed.fields?.some(val => val.name === 'Collections');
        return validTitle && validField;
    },
    /**
     * Checks if the given embed is from badge preview
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBadgePreviewEmbed(embed) {
        if (!embed) return false;
        const validTitle = CARD_TITLE_REGEX.test(embed.title);
        const validAuthor = embed.author?.name.endsWith('is Viewing...');
        const validField = embed.fields?.some(val => val.name === 'Guide');
        return validTitle && validAuthor && validField;
    },
    /**
     * Checks if the given embed is from blu
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isBluEmbed(embed) {
        if (!embed) return false;
        const validAuthor = embed.author?.name === 'Detailed Badge View';
        return validAuthor === true;
    },
    /**
     * Checks if the given embed is from reward box
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isRewardBoxEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.endsWith('- Reward Box');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from gacha and is a badge
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGachaBadgeEmbed(embed) {
        if (!embed) return false;
        const validDescription = embed.description?.includes('You unboxed a rare badge!');
        return validDescription === true;
    },
    /**
     * Checks if the given embed is from cd
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isCdEmbed(embed) {
        if (!embed) return false;
        const validField = embed.fields?.some(val => val.name === 'Cooldowns');
        return validField === true;
    },
    /**
     * Checks if the given embed is from list
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isListEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.endsWith('- Collection');
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from drop code
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCodeEmbed(embed) {
        if (!embed) return false;
        const validDescription = embed.description?.includes('Dropped a Case File');
        return validDescription === true;
    },
    /**
     * Checks if the given embed is from drop completion
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCompletionEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Case File Opened';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from drop cooldown
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDropCooldownEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Drop: Cooldown';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from loading a gacha
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGachaLoadEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Feeling Lucky?';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from daily claim
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDailyClaimEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Daily: Claimed';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from daily cooldown
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isDailyCooldownEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title === 'Daily: Cooldown';
        return validTitle === true;
    },
    /**
     * Checks if the given embed is from arena initial
     * @param {Discord.MessageEmbed} embed a Discord embed
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
     * @param {Discord.MessageEmbed} embed a Discord embed
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
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isArenaGifEmbed(embed) {
        if (!embed) return false;
        const validTitle = embed.title?.includes('ARENA: ');
        const validImage = embed.image !== null;
        return validTitle && validImage;
    },
    CharacterCard: {
        /**
         * Returns the name of the character
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getName(embed) {
            const res = CARD_TITLE_REGEX.exec(embed.title);
            if (!res) return null;
            return res[3] ?? null;
        },
        /**
         * Returns the number of the card
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?number}
         */
        getCardNumber(embed) {
            const res = CARD_TITLE_REGEX.exec(embed.title);
            if (!res) return null;
            const numStr = res[2] ?? null;
            if (!numStr) return null;
            return parseInt(numStr);
        },
        /**
         * Returns the favorite emote for the card
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getFavoriteEmote(embed) {
            const res = CARD_TITLE_REGEX.exec(embed.title);
            if (!res) return null;
            return res[1] ?? null;
        },
        /**
         * Returns the UID
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?number}
         */
        getUid(embed) {
            const field = embed.fields?.find(val => val.name === 'General Info');
            if (!field) return null;
            const res = GENERAL_INFO_REGEX.exec(field.value);
            if (!res) return null;
            const numStr = res[1] ?? null;
            if (!numStr) return null;
            return parseInt(numStr);
        },
        /**
         * Returns the GID
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?number}
         */
        getGid(embed) {
            const field = embed.fields?.find(val => val.name === 'General Info');
            if (!field) return null;
            const res = GENERAL_INFO_REGEX.exec(field.value);
            if (!res) return null;
            const numStr = res[2] ?? null;
            if (!numStr) return null;
            return parseInt(numStr);
        },
        /**
         * Returns the english series
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getEngSeries(embed) {
            const field = embed.fields?.find(val => val.name === 'Main Series');
            if (!field) return null;
            const res = MAIN_SERIES_REGEX.exec(field.value);
            if (!res) return null;
            return res[1] ?? null;
        },
        /**
         * Returns the japanese series
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getJpSeries(embed) {
            const field = embed.fields?.find(val => val.name === 'Main Series');
            if (!field) return null;
            const res = MAIN_SERIES_REGEX.exec(field.value);
            if (!res) return null;
            return res[2] ?? null;
        },
        /**
         * Returns the SID
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getSid(embed) {
            const field = embed.fields?.find(val => val.name === 'Main Series');
            if (!field) return null;
            const res = MAIN_SERIES_REGEX.exec(field.value);
            if (!res) return null;
            const numStr = res[3] ?? null;
            if (!numStr) return null;
            return parseInt(numStr);
        },
        /**
         * Returns the rarity
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {?string}
         */
        getRarity(embed) {
            const field = embed.fields?.find(val => val.name === 'Rarity');
            if (!field) return null;
            const REGEX = /\| `(?:.+ )?(.+)`»/;
            const res = REGEX.exec(field.value);
            if (!res) return null;
            return res[1] ?? null;
        },
        /**
         * Returns true if the card is glitched, false otherwise
         * @param {Discord.MessageEmbed} embed a Discord embed
         * @returns {boolean}
         */
        isGlitched(embed) {
            const field = embed.fields?.find(val => val.name === 'Rarity');
            if (!field) return null;
            const REGEX = /\| `(.+) .+`»/;
            const res = REGEX.exec(field.value);
            if (!res) return null;
            return (res[1] ?? null) === 'ɢʟɪᴛᴄʜᴇᴅ';
        },

    },
};
