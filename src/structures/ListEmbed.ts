import type { MessageEmbed } from 'discord.js';

export class ListEmbed {
    name: string | null = null;
    data: string[] | null = null;
    identifier: string | null = null;

    constructor(embed: MessageEmbed) {
        if (embed.title !== null) {
            const titleParts = embed.title.split(' - ');
            this.name = titleParts[0];
            this.identifier = titleParts[1];
        }

        if (embed.description !== null) {
            this.data = embed.description.split(/\n+/);
        }
    }
}
