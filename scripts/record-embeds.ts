import { writeFileSync } from 'fs';
import * as process from 'process';
import type { APIEmbed } from 'discord-api-types/v10';
import { Client, Intents, MessageEmbed } from 'discord.js';
import { identifiers, isLaifuBot, hasSameImage } from '../dist';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

interface RecordEmbed {
    identity: string[],
    embed: APIEmbed,
}

const recordedEmbeds: RecordEmbed[] = [];

function identifyEmbed(embed: MessageEmbed): string[] {
    const identities: string[] = [];

    type IsEmbedFunction = (boolean: MessageEmbed) => boolean;
    type IdentifierObject = { [key: string]: IdentifierObject | IsEmbedFunction };

    function recursiveIdentifyEmbed(obj: IdentifierObject, path: string) {
        Object.keys(obj)
            .forEach(key => {
                if (typeof obj[key] === 'object') {
                    recursiveIdentifyEmbed(obj[key] as IdentifierObject, `${path}.${key}`);
                } else {
                    const f = obj[key] as IsEmbedFunction;
                    if (f(embed)) {
                        identities.push(`${path}.#${key}`);
                    }
                }
            });
    }

    recursiveIdentifyEmbed(identifiers as unknown as IdentifierObject, '');

    return identities;
}

function laifuFunction(embed: MessageEmbed) {
    const identity = identifyEmbed(embed);
    console.log(`${identity}`);

    if (identity.length !== 1) {
        console.log(embed);
    }

    recordedEmbeds.push({
        identity,
        embed: embed.toJSON(),
    });
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.id === client.user?.id) return;

    if (isLaifuBot(message.author.id) && message.embeds[0]) {
        laifuFunction(message.embeds[0]);
    }

    if (message.content.includes('save')) {
        writeFileSync('temp/embeds.json', JSON.stringify(recordedEmbeds, null, 4), { encoding: 'utf-8' });
        message.reply('saved embeds');
        console.log('saved embeds');
    }

    if (message.content.includes('get')) {
        const id = message.content.substring(3).trim();
        message.channel.messages.fetch(id)
            .then(msg => {
                message.reply('retrieved message');

                if (isLaifuBot(msg.author.id)) {
                    laifuFunction(msg.embeds[0]);
                }
            })
            .catch(console.error);
    }
});

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (isLaifuBot(newMessage)) {
        const oldEmbed = oldMessage.embeds[0];
        const newEmbed = newMessage.embeds[0];
        if (newEmbed && !hasSameImage(oldEmbed, newEmbed)) {
            laifuFunction(newEmbed);
        }
    }
});

client.login(process.env.BOT_TOKEN);
