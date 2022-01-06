'use strict';

const Discord = require('discord.js');
console.log(new Discord.MessageEmbed().fields.length ? '' : '');

const Properties = require('./properties');

const wait = require('util').promisify(setTimeout);
const embedSet = new Set();

setInterval(() => {
    embedSet.clear();
}, 1000 * 60 * 10);

/**
 * Hashs an embed
 * @param {string} id the id of the message containing this embed
 * @param {Discord.MessageEmbed} embed a Discord embed
 * @param {boolean} loaded take into consideration whether the entire embed was lodaed
 * @returns {string}
 */
const hashEmbed = (id, embed, loaded) => {
    const cleanEmbed = embed.toJSON();
    if (cleanEmbed.image && loaded === false) cleanEmbed.image.height = cleanEmbed.image.width = 0;
    return id + JSON.stringify(cleanEmbed, null, 0);
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
     * @param {Discord.MessageEmbed} embed a Discord embed
     * @returns {boolean}
     */
    isLoaded(embed) {
        if (!embed) return false;
        if (!embed.image) return true;
        return embed.image.width > 0 && embed.image.height > 0;
    },
    /**
     * Checks if the given message has a Laifu embed and meets the criteria given in `options`
     * @param {Discord.Message} message a Discord message
     * @param {LaifuEmbedOptions} [options={}] options for this function
     * @returns {Promise<?Discord.MessageEmbed>}
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
            return embed;
        }

        return null;
    },
};
