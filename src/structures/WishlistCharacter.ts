import removeMd from 'remove-markdown';

const rowRegex = /(\d+) \| (.+)・(\d+)/;

interface WishlistCharacterOptions {
    text: string;
}

export class WishlistCharacter {
    gid: number | null = null;
    name: string | null = null;
    influence: number | null = null;

    constructor(data: WishlistCharacterOptions) {
        const rowParts = removeMd(data.text).match(rowRegex);
        if (rowParts) {
            this.gid = parseInt(rowParts[1]);
            this.name = rowParts[2];
            this.influence = parseInt(rowParts[3]);
        }
    }
}
