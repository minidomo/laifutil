export = ListEmbed;
declare class ListEmbed {
    /**
     * @param {Object} [data={}]
     * @param {import('discord.js').MessageEmbed=} data.embed
     */
    constructor(data?: {
        embed?: import('discord.js').MessageEmbed | undefined;
    });
    /**
     * @type {?string}

     */
    name: string | null;
    /**
     * @type {?string}

     */
    identifier: string | null;
    /**
     * @type {?string[]}

     */
    data: string[] | null;
}
//# sourceMappingURL=ListEmbed.d.ts.map