'use strict';

const removeMd = require('remove-markdown');

const Discord = require('discord.js');
console.log(new Discord.MessageEmbed().fields.length ? '' : '');

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;
const GENERAL_INFO_REGEX = /UID: (\d+) \| GID: (\d+)/;
const MAIN_SERIES_REGEX = /ENG: ([^\n]+)\nJP: ([^\n]+)\nSID: (\d+)/;

module.exports = {
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
        const cleanValue = removeMd(field.value);
        const res = GENERAL_INFO_REGEX.exec(cleanValue);
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
        const res = GENERAL_INFO_REGEX.exec(cleanValue);
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
