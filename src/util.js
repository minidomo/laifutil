'use strict';

const Properties = require('./properties');

const wait = require('util').promisify(setTimeout);
const embedSet = new Set();

setInterval(() => {
    embedSet.clear();
}, 1000 * 60 * 10);

/**
 * Hashs an embed
 * @param {string} id the id of the message containing this embed
 * @param {import('discord.js').MessageEmbed} embed a Discord embed
 * @param {boolean} loaded take into consideration whether the entire embed was lodaed
 * @returns {string}
 */
const hashEmbed = (id, embed, loaded) => {
    const cleanEmbed = embed.toJSON();
    if (cleanEmbed.image && loaded === false) cleanEmbed.image.height = cleanEmbed.image.width = 0;
    return id + JSON.stringify(cleanEmbed, null, 0);
};

/**
 * Obtains the furthest left and right bounds of the left and right characters in the string
 * @param {string} str the string to examine
 * @param {string} leftChar the left character
 * @param {string} rightChar the right character
 * @returns {?number[]}
 */
const getLastBounds = (str, leftChar, rightChar) => {
    if (!str.includes(leftChar) || !str.includes(rightChar)) return null;
    let count = 0;
    let left = -1, right = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === leftChar) {
            if (count === 0) left = i;
            count++;
        } else if (str[i] === rightChar) {
            count--;
            if (count === 0) right = i;
        }
    }
    return left >= right ? null : [left, right];
};

/**
 * Options for the hasLaifuEmbed funcction
 * @typedef {Object} LaifuEmbedOptions
 * @property {number=} delay the time in milliseconds to wait before performing the function
 * @property {boolean=} loaded ensure the embed is loaded entirely
 * @property {boolean=} duplicates allow duplicate embed previously seen to be returned
 */

module.exports = {
    /**
     * Checks if the given embed's images/gifs, if any, are loaded
     * @param {import('discord.js').MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isLoaded(embed) {
        if (!embed) return false;
        if (!embed.image) return true;
        return embed.image.width > 0 && embed.image.height > 0;
    },
    /**
     * Checks if the given message has a Laifu embed and meets the criteria given in `options`
     * @param {import('discord.js').Message} message a Discord message
     * @param {LaifuEmbedOptions} [options={}] options for this function
     * @returns {Promise<?import('discord.js').Message>}
     */
    async hasLaifuEmbed(message, options = {}) {
        if (typeof options.delay === 'number') await wait(options.delay);
        if (!message) return null;

        const targetMessage = await message.channel.messages.fetch(message.id);
        if (targetMessage.author.id !== Properties.ID) return null;
        if (targetMessage.embeds && targetMessage.embeds.length) {
            const embed = targetMessage.embeds[0];
            if (options.loaded === true && !this.isLoaded(embed)) return null;
            if (options.duplicates === false) {
                const embedHash = hashEmbed(message.id, embed, options.loaded);
                if (embedSet.has(embedHash)) return null;
                embedSet.add(embedHash);
            }
            return targetMessage;
        }

        return null;
    },
    /**
     * Removes the last set of parenthesis and custom emotes in the name
     * @param {string} name the name
     * @returns {string}
     */
    cleanCharacterName(name) {
        const parenBounds = getLastBounds(name, '(', ')');
        const emoteBounds = getLastBounds(name, '<', '>');
        let ret = name;
        if (parenBounds) ret = ret.substring(0, parenBounds[0]) + ret.substring(parenBounds[1] + 1);
        if (emoteBounds) ret = ret.substring(0, emoteBounds[0]) + ret.substring(emoteBounds[1] + 1);
        return ret.trim();
    },
};
