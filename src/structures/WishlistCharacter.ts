import removeMd from 'remove-markdown';

const rowRegex = /(\d+) \| (.+)・(\d+)/;

export class WishlistCharacter {
    gid: number | null = null;
    name: string | null = null;
    influence: number | null = null;

    constructor(data: string) {
        const rowParts = removeMd(data).match(rowRegex);
        if (rowParts) {
            this.gid = parseInt(rowParts[1]);
            this.name = rowParts[2];
            this.influence = parseInt(rowParts[3]);
        }
    }
}
