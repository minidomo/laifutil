const ROW_REGEX = /(\d+) \| (.+)・\*\*(\d+)/;

export class WishlistCharacter {
    gid: number | null = null;
    name: string | null = null;
    influence: number | null = null;

    constructor(data: string) {
        const rowMatch = data.match(ROW_REGEX);
        if (rowMatch) {
            this.gid = parseInt(rowMatch[1]);
            this.name = rowMatch[2];
            this.influence = parseInt(rowMatch[3]);
        }
    }
}
