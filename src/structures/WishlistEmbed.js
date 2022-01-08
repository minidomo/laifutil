'use strict';

const removeMd = require('remove-markdown');
const ListEmbed = require('./ListEmbed');

class WishlistCharacter {
    /**
     * @param {Object} [data={}]
     * @param {string=} data.text
     */
    constructor(data = {}) {
        /**
         * @type {?number}

         */
        this.gid = null;
        /**
         * @type {?string}

         */
        this.name = null;
        /**
         * @type {?number}

         */
        this.influence = null;

        if (data.text) {
            const dataRegex = /(\d+) \| (.+)・(\d+)/;
            const dataRes = removeMd(data.text).match(dataRegex);
            if (dataRes) {
                if (typeof dataRes[1] === 'string') this.gid = parseInt(dataRes[1]);
                if (typeof dataRes[2] === 'string') this.name = dataRes[2];
                if (typeof dataRes[3] === 'string') this.influence = parseInt(dataRes[3]);
            }
        }
    }
}

class WishlistEmbed extends ListEmbed {
    /**
     * @param {Object} [data={}]
     * @param {import('discord.js').MessageEmbed=} data.embed
     */
    constructor(data = {}) {
        super(data);
        /**
         * @type {?string}
         */
        this.username = this.name;
        /**
         * @type {number}
         */
        this.currentPage = 0;
        /**
         * @type {number}

         */
        this.pages = 0;
        /**
         * @type {number}

         */
        this.charactersWanted = 0;
        /**
         * @type {?WishlistCharacter[]}

         */
        this.characters = null;

        const footerRegex = /Page (\d+)\/(\d+) • (\d+) Characters Wanted/;
        const footerRes = data.embed?.footer.text.match(footerRegex);
        if (footerRes) {
            if (typeof footerRes[1] === 'string') this.currentPage = parseInt(footerRes[1]);
            if (typeof footerRes[2] === 'string') this.pages = parseInt(footerRes[2]);
            if (typeof footerRes[3] === 'string') this.charactersWanted = parseInt(footerRes[3]);
        }

        if (this.data) this.characters = this.data.map(text => new WishlistCharacter({ text }));
    }
}

module.exports = WishlistEmbed;
