'use strict';

const removeMd = require('remove-markdown');

const Discord = require('discord.js');
console.log(new Discord.MessageEmbed().fields.length ? '' : '');

const CARD_TITLE = {
    OWNER_REGEX: /(?:([^\s]+) )?#([1-9]) (.+)/,
    INFO_REGEX: /(.+)/,
};
const GENERAL_INFO = {
    OWNER_REGEX: /UID: (\d+) \| GID: (\d+)/,
    INFO_REGEX: /Global ID: (\d+)/,
};
const MAIN_SERIES_REGEX = /ENG: ([^\n]+)\nJP: ([^\n]+)\n(?:SID|Series ID): (\d+)/;

module.exports = {
    /**
     * Returns the name of the character
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {?string}
     */
    getName(embed) {
        let res = CARD_TITLE.OWNER_REGEX.exec(embed.title);
        let name = null;
        if (res) {
            name = res[3] ?? null;
        } else {
            res = CARD_TITLE.INFO_REGEX.exec(embed.title);
            if (!res) return null;
            name = res[1] ?? null;
        }
        return name;
    },
    /**
     * Returns the number of the card
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {?number}
     */
    getCardNumber(embed) {
        const res = CARD_TITLE.OWNER_REGEX.exec(embed.title);
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
        const res = CARD_TITLE.OWNER_REGEX.exec(embed.title);
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
        const cleanValue = removeMd(field.value);
        const res = GENERAL_INFO.OWNER_REGEX.exec(cleanValue);
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
        const cleanValue = removeMd(field.value);
        let res = GENERAL_INFO.OWNER_REGEX.exec(cleanValue);
        let numStr = null;
        if (res) {
            numStr = res[2] ?? null;
        } else {
            res = GENERAL_INFO.INFO_REGEX.exec(cleanValue);
            if (!res) return null;
            numStr = res[1] ?? null;
        }
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
        const cleanValue = removeMd(field.value);
        const res = MAIN_SERIES_REGEX.exec(cleanValue);
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
        const cleanValue = removeMd(field.value);
        const res = MAIN_SERIES_REGEX.exec(cleanValue);
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
        const cleanValue = removeMd(field.value);
        const res = MAIN_SERIES_REGEX.exec(cleanValue);
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
        const cleanValue = removeMd(field.value);
        const REGEX = /\| (?:.+ )?([^»]+)»/;
        const res = REGEX.exec(cleanValue);
        if (!res) return null;
        return res[1] ?? null;
    },
    /**
     * Returns the star number
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {?number}
     */
    getStarNumber(embed) {
        const field = embed.fields?.find(val => val.name === 'Rarity');
        if (!field) return null;
        const cleanValue = removeMd(field.value);
        const REGEX = /(★+)/;
        const res = REGEX.exec(cleanValue);
        if (!res) return 0;
        return res[1]?.length ?? 0;
    },
    /**
     * Returns true if the card is glitched, false otherwise
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isGlitched(embed) {
        const field = embed.fields?.find(val => val.name === 'Rarity');
        if (!field) return false;
        const cleanValue = removeMd(field.value);
        const REGEX = /\| (.+) [^»]+»/;
        const res = REGEX.exec(cleanValue);
        if (!res) return false;
        return (res[1] ?? null) === 'ɢʟɪᴛᴄʜᴇᴅ';
    },
    /**
     * Returns the badge id
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {?number}
     */
    getBadgeId(embed) {
        const field = embed.fields?.find(val => val.name === 'Rarity');
        if (!field) return null;
        const cleanValue = removeMd(field.value);
        const REGEX = /❦#(\d+)/;
        const res = REGEX.exec(cleanValue);
        if (!res) return false;
        const numStr = res[1] ?? null;
        if (!numStr) return null;
        return parseInt(numStr);
    },
};
