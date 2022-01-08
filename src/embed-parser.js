'use strict';

const Structures = require('./structures');

module.exports = {
    /**
     * @param {import('discord.js').MessageEmbed} embed
     * @returns {import('./structures/WishlistEmbed')}
     */
    parseWishlistEmbed(embed) {
        return new Structures.WishlistEmbed({ embed });
    },
};
