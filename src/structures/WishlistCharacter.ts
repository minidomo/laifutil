const LINE_REGEX = /(\d+) \| (.+)・\*\*(\d+)/;

/**
 * Represents a character found in a wishlist embed
 */
export class WishlistCharacter {
    /**
     * The name of the character
     */
    name: string;
    /**
     * The global ID of the character
     */
    globalId: number;
    /**
     * The influence of the character
     */
    influence: number;

    constructor(text: string) {
        const lineMatch = text.match(LINE_REGEX) as RegExpMatchArray;
        this.globalId = parseInt(lineMatch[1]);
        this.name = lineMatch[2];
        this.influence = parseInt(lineMatch[3]);
    }
}
