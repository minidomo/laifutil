import type { MessageEmbed } from 'discord.js';

export interface ListEmbedOptions {
    embed: MessageEmbed;
}

export class ListEmbed {
    name: string | null = null;
    identifier: string | null = null;
    data: string[] | null = null;

    constructor(data: ListEmbedOptions) {
        if (data.embed.title !== null) {
            const titleParts = data.embed.title.split(' - ');
            this.name = titleParts[0];
            this.identifier = titleParts[1];
        }
        if (data.embed.description !== null) {
            this.data = data.embed.description.split(/\n+/);
        }
    }
}
