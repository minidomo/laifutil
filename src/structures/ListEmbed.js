'use strict';

class ListEmbed {
    /**
     * @param {Object} [data={}]
     * @param {Discord.MessageEmbed=} data.embed
     */
    constructor(data = {}) {
        /**
         * @type {?string}
         * @public
         */
        this.name = null;
        /**
         * @type {?string}
         * @public
         */
        this.identifier = null;
        /**
         * @type {?string[]}
         * @public
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
