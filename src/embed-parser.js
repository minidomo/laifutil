'use strict';

const Structures = require('./structures');

module.exports = {
    /**
     * @param {import('discord.js').MessageEmbed} embed
     * @returns {Structures.WishlistEmbed}
     */
    parseWishlistEmbed(embed) {
        return new Structures.WishlistEmbed({ embed });
    },
};
