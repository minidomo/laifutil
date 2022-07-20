<h1 align="center">laifutil</h1>

## About

laifutil is a library to identify and parse Discord embeds sent from [LaifuBot](https://laifubot.fandom.com/wiki/Laifubot_Wiki).

## Installation

```sh
npm install laifutil
```

## Example usage

We can make a simple bot to remind a user to drop after six minutes upon completing a drop code.

Using discord.js v13:

```js
const { setTimeout } = require('node:timers/promises');
const { Client, Intents, Formatters } = require('discord.js');
const { isLaifuBot, isDropOpenedEmbed, DropOpenedEmbed } = require('laifutil');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Six minutes in milliseconds
const dropInterval = 360_000;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    const srcEmbed = message.embeds[0];

    if (isLaifuBot(message.author.id) && srcEmbed) {
        const apiEmbed = srcEmbed.toJSON();

        if (isDropOpenedEmbed(apiEmbed)) {
            const embed = new DropOpenedEmbed(apiEmbed);

            if (embed.userId) {
                await setTimeout(dropInterval);
                const content = `Time to drop, ${Formatters.userMention(embed.userId)}!`;
                message.reply({ content });
            }
        }
    }
});

client.login('token');
```

Using discord.js v14:

```js
const { setTimeout } = require('node:timers/promises');
const { Client, GatewayIntentBits, userMention } = require('discord.js');
const { isLaifuBot, isDropOpenedEmbed, DropOpenedEmbed } = require('laifutil');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// Six minutes in milliseconds
const dropInterval = 360_000;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    const srcEmbed = message.embeds[0];

    if (isLaifuBot(message.author.id) && srcEmbed) {
        const apiEmbed = srcEmbed.toJSON();

        if (isDropOpenedEmbed(apiEmbed)) {
            const embed = new DropOpenedEmbed(apiEmbed);

            if (embed.userId) {
                await setTimeout(dropInterval);
                const content = `Time to drop, ${userMention(embed.userId)}!`;
                message.reply({ content });
            }
        }
    }
});

client.login('token');
```

## Links

-   [Documentation](https://minidomo.github.io/laifutil/)
-   [GitHub](https://github.com/minidomo/laifutil)
-   [npm](https://www.npmjs.com/package/laifutil)
