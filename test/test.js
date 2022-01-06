'use strict';

const Discord = require('discord.js');
const { Client, Intents } = Discord;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const Laifu = require('../src/index');

/**
 *
 * @param {Discord.MessageEmbed} embed
 * @returns {boolean}
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
    return arr.length > 0;
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
 * @param {Discord.MessageEmbed} embed
 */
const embedFunction = embed => {
    if (!embed) return;
    const res = identifyEmbed(embed);
    if (!res) console.log(embed);

    // if (Laifu.Identifier.isViewEmbed(embed)) {
    //     // console.log(embed.toJSON());
    //     checkCharacterProperties(embed);
    // }

    // console.log(embed);
};

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Laifu.Util.hasLaifuEmbed(message, { loaded: false, duplicates: false })
        .then(embedFunction);
});

client.on('messageUpdate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Laifu.Util.hasLaifuEmbed(message, { delay: 1000, loaded: false, duplicates: false })
        .then(embedFunction);
});

client.login(process.env.BOT_TOKEN);
