import type { MessageEmbed } from 'discord.js';
import { BaseListEmbed } from './BaseListEmbed';
import { ListCharacter } from './ListCharacter';

/**
 * Represents a list embed from LaifuBot
 */
export class ListEmbed extends BaseListEmbed {
    /**
     * The nickname of the user this list belongs to
     */
    nickname: string;
    /**
     * The list of characters currently displayed on this embed
     */
    characters: ListCharacter[];

    constructor(embed: MessageEmbed) {
        super(embed);

        this.nickname = this.name;

        this.characters = this.data.map(line => new ListCharacter(line));
    }
}
