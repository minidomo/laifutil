import { writeFileSync } from 'fs';
import * as process from 'process';
import type { APIEmbed } from 'discord-api-types/v10';
import { Client, Intents, Message, MessageEmbed } from 'discord.js';
import { Identifier } from '../dist';
import { hasLaifuEmbed, LaifuEmbedOptions } from '../dist/util';


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const embedSet: Set<string> = new Set();
const embeds: APIEmbed[] = [];

const settings: LaifuEmbedOptions = {
    loaded: false,
    duplicates: false,
    embedSet,
};

function identifyEmbed(embed: MessageEmbed): boolean {
    const identities: string[] = [];
    Object.values(Identifier)
        .forEach(f => {
            const res = f.call(Identifier, embed);
            if (res) {
                identities.push(f.name);
            }
        });
    console.log(`${identities}`);
    return identities.length === 1;
}

function laifuFunction(message: Message<boolean> | null) {
    if (!message) {
        return;
    }

    message.embeds.forEach(embed => {
        const identity = identifyEmbed(embed);

        if (!identity) {
            console.log(embed);
        }

        embeds.push(embed.toJSON());
    });
}

async function messageFunction(message: Message<boolean>) {
    if (!client.application?.owner) await client.application?.fetch();

    hasLaifuEmbed(message, settings)
        .then(laifuFunction)
        .catch(console.error);

    if (message.content.includes('save')) {
        writeFileSync('temp/embeds.json', JSON.stringify(embeds, null, 4), { encoding: 'utf-8' });
        console.log('saved embeds');
    }
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', messageFunction);
client.on('messageUpdate', (_oldMessage, newMessage) => {
    messageFunction(newMessage as Message<boolean>);
});

client.login(process.env.BOT_TOKEN);
