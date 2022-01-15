'use strict';

const Discord = require('discord.js');
const { Client, Intents } = Discord;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const Laifu = require('../src');

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
    return arr.length === 0;
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
 * @param {Discord.Message} message
 */
const laifuFunction = message => {
    if (!message) return;
    const embed = message.embeds[0];

    const res = identifyEmbed(embed);
    if (!res) console.log(embed);

    const Identifier = Laifu.Identifier;
    if (Identifier.isInfoEmbed(embed)
        || Identifier.isViewEmbed(embed)) {
        // console.log(embed.toJSON());
        // checkCharacterProperties(embed);
    }

    if (Identifier.isWishlistEmbed(embed)) {
        const obj = Laifu.EmbedParser.parseWishlistEmbed(embed);
        obj.characters = obj.characters.map(c => {
            c.name = Laifu.Util.cleanCharacterName(c.name);
            return c;
        });
        console.log(obj);
        // console.log(embed);
    }

    // console.log(embed);
};

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Laifu.Util.hasLaifuEmbed(message, { loaded: false, duplicates: false })
        .then(laifuFunction);
});

client.on('messageUpdate', async message => {
    if (!client.application?.owner) await client.application?.fetch();

    Laifu.Util.hasLaifuEmbed(message, { delay: 1000, loaded: false, duplicates: false })
        .then(laifuFunction);
});

client.login(process.env.BOT_TOKEN);
