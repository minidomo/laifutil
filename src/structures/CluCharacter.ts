const LINE_REGEX = /(\d+) \| \[#(\d)\] (.+?) - (.+) ・\*\*(\d+)\*\*/;

/** Represents a character found in a clu search embed */
export class CluCharacter {
    /** The global ID of the character */
    globalId: number;
    /** The total number of images this character has */
    totalImages: number;
    /** The name of the character */
    name: string;
    /** The English title of the series this character is from */
    title: string;
    /** The influence of the character */
    influence: number;

    constructor(text: string) {
        const lineMatch = text.match(LINE_REGEX) as RegExpMatchArray;
        this.globalId = parseInt(lineMatch[1]);
        this.totalImages = parseInt(lineMatch[2]);
        this.name = lineMatch[3];
        this.title = lineMatch[4];
        this.influence = parseInt(lineMatch[5]);
    }
}
