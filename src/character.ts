import type { MessageEmbed } from 'discord.js';
import removeMd from 'remove-markdown';

const CARD_TITLE = {
    OWNER_REGEX: /(?:([^\s]+) )?#([1-9]) (.+)/,
    INFO_REGEX: /(.+)/,
};

const GENERAL_INFO = {
    OWNER_REGEX: /UID: (\d+) \| GID: (\d+)/,
    INFO_REGEX: /Global ID: (\d+)/,
};

const MAIN_SERIES_REGEX = /ENG: ([^\n]+)\nJP: ([^\n]+)\n(?:SID|Series ID): (\d+)/;

export function getName(embed: MessageEmbed) {
    if (!embed.title) return null;
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
}

export function getCardNumber(embed: MessageEmbed) {
    if (!embed.title) return null;
    const res = CARD_TITLE.OWNER_REGEX.exec(embed.title);
    if (!res) return null;
    const numStr = res[2] ?? null;
    if (!numStr) return null;
    return parseInt(numStr);
}

export function getFavoriteEmote(embed: MessageEmbed) {
    if (!embed.title) return null;
    const res = CARD_TITLE.OWNER_REGEX.exec(embed.title);
    if (!res) return null;
    return res[1] ?? null;
}

export function getUid(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'General Info');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const res = GENERAL_INFO.OWNER_REGEX.exec(cleanValue);
    if (!res) return null;
    const numStr = res[1] ?? null;
    if (!numStr) return null;
    return parseInt(numStr);
}

export function getGid(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'General Info');
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
}

export function getEngSeries(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Main Series');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const res = MAIN_SERIES_REGEX.exec(cleanValue);
    if (!res) return null;
    return res[1] ?? null;
}

export function getJpSeries(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Main Series');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const res = MAIN_SERIES_REGEX.exec(cleanValue);
    if (!res) return null;
    return res[2] ?? null;
}

export function getSid(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Main Series');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const res = MAIN_SERIES_REGEX.exec(cleanValue);
    if (!res) return null;
    const numStr = res[3] ?? null;
    if (!numStr) return null;
    return parseInt(numStr);
}

export function getRarity(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Rarity');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const REGEX = /\| (?:.+ )?([^»]+)»/;
    const res = REGEX.exec(cleanValue);
    if (!res) return null;
    return res[1] ?? null;
}

export function getStarNumber(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Rarity');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const REGEX = /(★+)/;
    const res = REGEX.exec(cleanValue);
    if (!res) return 0;
    return res[1]?.length ?? 0;
}

export function isGlitched(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Rarity');
    if (!field) return false;
    const cleanValue = removeMd(field.value);
    const REGEX = /\| (.+) [^»]+»/;
    const res = REGEX.exec(cleanValue);
    if (!res) return false;
    return (res[1] ?? null) === 'ɢʟɪᴛᴄʜᴇᴅ';
}

export function getBadgeId(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Rarity');
    if (!field) return null;
    const cleanValue = removeMd(field.value);
    const REGEX = /❦#(\d+)/;
    const res = REGEX.exec(cleanValue);
    if (!res) return false;
    const numStr = res[1] ?? null;
    if (!numStr) return null;
    return parseInt(numStr);
}
