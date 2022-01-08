'use strict';

class ListEmbed {
    /**
     * @param {Object} [data={}]
     * @param {import('discord.js').MessageEmbed=} data.embed
     */
    constructor(data = {}) {
        /**
         * @type {?string}
         */
        this.name = null;
        /**
         * @type {?string}
         */
        this.identifier = null;
        /**
         * @type {?string[]}
         */
        this.data = null;

        if (data.embed) {
            const titleParts = data.embed.title.split(' - ');
            this.name = titleParts[0];
            this.identifier = titleParts[1];
            this.data = data.embed.description.split(/\n+/);
        }
    }
}

module.exports = ListEmbed;
