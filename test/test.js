'use strict';

const Discord = require('discord.js');
const { Client, Intents } = Discord;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const wait = require('util').promisify(setTimeout);
const Laifu = require('../src/index');
const embedStrSet = new Set();

/**
 *
 * @param {Discord.MessageEmbed} embed
 */
const identifyEmbed = embed => {
    const arr = [];
    Object.values(Laifu.Identifier)
        .filter(val => typeof val === 'function')
        .forEach(func => {
            const res = func.call(Laifu.Identifier, embed);
            if (res) arr.push(func.name);
        });
    console.log(`${arr}`);
};

/**
 * 
 * @param {Discord.MessageEmbed} embed 
 */
const checkCharacterProperties = embed => {
    const arr = [];
    Object.values(Laifu.Character)
        .filter(val => typeof val === 'function')
        .forEach(func => {
            const res = func.call(Laifu.Character, embed);
            arr.push(`${func.name}:${res}`);
        });
    console.log(`${arr}`);
};

/**
 *
 * @param {string} id
 * @param {Discord.MessageEmbed} embed
 * @returns {string}
 */
const hashEmbed = (id, embed) => {
    const cleanEmbed = embed.toJSON();
    if (cleanEmbed.image) cleanEmbed.image.height = cleanEmbed.image.width = 0;
    return id + JSON.stringify(cleanEmbed, null, 0);
};

/**
 *
 * @param {Discord.Message} message
 */
const messageFunction = async message => {
    if (!client.application?.owner) await client.application?.fetch();

    const targetMessage = await message.channel.messages.fetch(message.id);

    if (targetMessage.author.id !== Laifu.Properties.ID) return;
    if (targetMessage.embeds && targetMessage.embeds.length) {
        const embed = targetMessage.embeds[0];

        const embedStr = hashEmbed(message.id, embed);
        if (embedStrSet.has(embedStr)) return;
        embedStrSet.add(embedStr);

        identifyEmbed(embed);

        if (Laifu.Identifier.isViewEmbed(embed)) {
            // console.log(embed.toJSON());
            checkCharacterProperties(embed);
        }

        // console.log(embed);
    }
};

client.once('ready', () => {
    console.log('Ready!');
    setInterval(() => {
        embedStrSet.clear();
    }, 1000 * 60 * 5);
});

client.on('messageCreate', async message => {
    await messageFunction(message);
});

client.on('messageUpdate', async message => {
    await wait(1000);
    await messageFunction(message);
});

client.login(process.env.BOT_TOKEN);
