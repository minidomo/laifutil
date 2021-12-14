'use strict';

const Discord = require('discord.js');
const { Client, Intents } = Discord;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const wait = require('util').promisify(setTimeout);
const Laifu = require('./index');
const LAIFU_ID = '688202466315206661';
const embedStrSet = new Set();

/**
 *
 * @param {Discord.MessageEmbed} embed
 */
const checkEmbed = embed => {
    const arr = [];
    Object.values(Laifu)
        .filter(val => typeof val === 'function')
        .forEach(func => {
            const res = func.call(Laifu, embed);
            if (res) arr.push(func.name);
        });
    console.log(`${arr}`);
};

/**
 *
 * @param {string} id
 * @param {Discord.MessageEmbed} embed
 */
const hashEmbed = (id, embed) => id + JSON.stringify(embed.toJSON(), null, 0);

/**
 *
 * @param {Discord.Message} message
 */
const messageFunction = async message => {
    if (!client.application?.owner) await client.application?.fetch();

    const targetMessage = await message.channel.messages.fetch(message.id);

    if (targetMessage.author.id !== LAIFU_ID) return;
    if (targetMessage.embeds && targetMessage.embeds.length) {
        const embed = targetMessage.embeds[0];

        const embedStr = hashEmbed(message.id, embed);
        if (embedStrSet.has(embedStr)) return;
        embedStrSet.add(embedStr);

        checkEmbed(embed);

        console.log(embed);
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
