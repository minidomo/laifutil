import removeMd from 'remove-markdown';

const dataRegex = /(\d+) \| (.+)・(\d+)/;

interface WishlistCharacterOptions {
    text: string;
}

export class WishlistCharacter {
    gid: number | null = null;
    name: string | null = null;
    influence: number | null = null;

    constructor(data: WishlistCharacterOptions) {
        const dataRes = removeMd(data.text).match(dataRegex);
        if (dataRes) {
            this.gid = parseInt(dataRes[1]);
            this.name = dataRes[2];
            this.influence = parseInt(dataRes[3]);
        }
    }
}
