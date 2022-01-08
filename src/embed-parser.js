'use strict';

const WishlistEmbed = require('./structures/WishlistEmbed');

module.exports = {
    /**
     * @param {Discord.MessageEmbed} embed
     * @returns {WishlistEmbed}
     */
    parseWishlistEmbed(embed) {
        return new WishlistEmbed({ embed });
    },
};
