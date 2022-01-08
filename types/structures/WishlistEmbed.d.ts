export = WishlistEmbed;
declare class WishlistEmbed extends ListEmbed {
    /**
     * @type {?string}
     */
    username: string | null;
    /**
     * @type {number}
     */
    currentPage: number;
    /**
     * @type {number}
     */
    pages: number;
    /**
     * @type {number}
     */
    charactersWanted: number;
    /**
     * @type {?WishlistCharacter[]}
     */
    characters: WishlistCharacter[] | null;
}
import ListEmbed = require("./ListEmbed");
declare class WishlistCharacter {
    /**
     * @param {Object} [data={}]
     * @param {string=} data.text
     */
    constructor(data?: {
        text?: string | undefined;
    });
    /**
     * @type {?number}
     */
    gid: number | null;
    /**
     * @type {?string}
     */
    name: string | null;
    /**
     * @type {?number}
     */
    influence: number | null;
}
//# sourceMappingURL=WishlistEmbed.d.ts.map