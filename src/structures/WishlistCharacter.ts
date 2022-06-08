const ROW_REGEX = /(\d+) \| (.+)・\*\*(\d+)/;

/**
 * Represents a character found in a wishlist embed
 */
export class WishlistCharacter {
    /**
     * The global ID of this character
     */
    gid?: number;
    /**
     * The name of this character
     */
    name?: string;
    /**
     * The influence of this character
     */
    influence?: number;

    constructor(data: string) {
        const rowMatch = data.match(ROW_REGEX);
        if (rowMatch) {
            this.gid = parseInt(rowMatch[1]);
            this.name = rowMatch[2];
            this.influence = parseInt(rowMatch[3]);
        }
    }
}
