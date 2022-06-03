'use strict';

const { Client, Intents, MessageEmbed } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const { Identifier, Character, Util, EmbedParser } = require('../dist/index');
const embedSet = new Set();
const embeds = [];

/**
 *
 * @param {MessageEmbed} embed
 * @returns {boolean}
 */
const identifyEmbed = embed => {
    const arr = [];
    Object.values(Identifier)
        .filter(val => typeof val === 'function')
        .forEach(func => {
            const res = func.call(Identifier, embed);
            if (res) arr.push(func.name);
        });
    console.log(`${arr}`);
    return arr.length !== 0;
};

/**
 * 
 * @param {MessageEmbed} embed 
 */
const checkCharacterProperties = embed => {
    const arr = [];
    Object.values(Character)
        .filter(val => typeof val === 'function')
        .forEach(func => {
            const res = func.call(Character, embed);
            arr.push(`${func.name}:${res}`);
        });
    console.log(`${arr}`);
};

/**
 *
 * @param {Message} message
 */
const laifuFunction = message => {
    if (!message) return;
    const embed = message.embeds[0];

    const res = identifyEmbed(embed);
    if (!res) console.log(embed);

    embeds.push(embed.toJSON());

    if (Identifier.isInfoEmbed(embed)
        || Identifier.isViewEmbed(embed)) {
        // console.log(embed.toJSON());
        // checkCharacterProperties(embed);
    }

    if (Identifier.isWishlistEmbed(embed)) {
        const obj = EmbedParser.parseWishlistEmbed(embed);
        console.log(obj);
        console.log(embed);
    }

    if (Identifier.isGachaCharacterEmbed(embed)) {
        const obj = EmbedParser.parseGachaCharacterEmbed(embed);
        console.log(obj);
        console.log(embed);
    }

    if (Identifier.isBurnEmbed(embed)) {
        const obj = EmbedParser.parseBurnEmbed(embed);
        console.log(obj);
        console.log(embed);
    }


    // console.log(embed);
};

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Util.hasLaifuEmbed(message, { loaded: false, duplicates: false, embedSet })
        .then(laifuFunction);

    if (message.content.includes('save')) {
        fs.writeFileSync('temp/embeds.json', JSON.stringify(embeds, null, 4), { encoding: 'utf-8' });
        console.log('saved');
    }
});

client.on('messageUpdate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Util.hasLaifuEmbed(message, { delay: 1000, loaded: false, duplicates: false, embedSet })
        .then(laifuFunction);
});

client.login(process.env.BOT_TOKEN);
