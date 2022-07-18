import type { APIEmbed } from 'discord-api-types/v10';
import { BaseListEmbed } from './BaseListEmbed';
import { CluCharacter } from './CluCharacter';

/** Represents a clu search embed from LaifuBot */
export class CluSearchEmbed extends BaseListEmbed {
    /** The nickname of the user this list belongs to */
    nickname: string;
    /** The list of characters currently displayed on this embed */
    characters: CluCharacter[];

    constructor(embed: APIEmbed) {
        super(embed);

        this.nickname = this.name;

        this.characters = this.data.map(line => new CluCharacter(line));
    }
}
