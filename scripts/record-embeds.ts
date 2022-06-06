import { writeFileSync } from 'fs';
import * as process from 'process';
import type { APIEmbed } from 'discord-api-types/v10';
import { Client, Intents, MessageEmbed } from 'discord.js';
import { Identifier } from '../dist';
import { isLaifuBot } from '../dist/util';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

interface RecordEmbed {
    identity: string[],
    embed: APIEmbed,
}

const recordedEmbeds: RecordEmbed[] = [];

function identifyEmbed(embed: MessageEmbed): string[] {
    const identities: string[] = [];
    Object.values(Identifier)
        .forEach(f => {
            const res = f.call(Identifier, embed);
            if (res) {
                identities.push(f.name);
            }
        });
    return identities;
}

function laifuFunction(embeds: MessageEmbed[]) {
    embeds.forEach(embed => {
        const identity = identifyEmbed(embed);
        console.log(`${identity}`);

        if (identity.length !== 1) {
            console.log(embed);
        }

        recordedEmbeds.push({
            identity,
            embed: embed.toJSON(),
        });
    });
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', message => {
    if (isLaifuBot(message.author.id)) {
        laifuFunction(message.embeds);
    }

    if (message.content.includes('save')) {
        writeFileSync('temp/embeds.json', JSON.stringify(recordedEmbeds, null, 4), { encoding: 'utf-8' });
        console.log('saved embeds');
    }

    if (message.content.includes('get')) {
        const id = message.content.substring(3).trim();
        message.channel.messages.fetch(id)
            .then(msg => {
                if (isLaifuBot(msg.author.id)) {
                    laifuFunction(msg.embeds);
                }
            })
            .catch(console.error);
    }
});

client.on('messageUpdate', (_oldMessage, newMessage) => {
    if (newMessage.author && isLaifuBot(newMessage.author.id)) {
        laifuFunction(newMessage.embeds);
    }
});

client.login(process.env.BOT_TOKEN);
