<h1 align="center">laifutil</h1>

## About
laifutil is a library to identify and parse [Discord embeds](https://discord.js.org/#/docs/discord.js/13.8.0/class/MessageEmbed) sent from [LaifuBot](https://laifubot.fandom.com/wiki/Laifubot_Wiki).

## Installation
```sh
npm install laifutil
```

### Peer Dependencies
- [discord.js](https://discord.js.org/#/) v13.x

## Example usage

We can make a simple bot to remind a user to drop after six minutes upon completing a drop code:

```js
const { setTimeout } = require('node:timers/promises');
const { Client, Intents } = require('discord.js');
const { isLaifuBot, isDropOpenedEmbed, DropOpenedEmbed } = require('laifutil');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// Six minutes in milliseconds
const dropInterval = 1000 * 60 * 6;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (isLaifuBot(message) && isDropOpenedEmbed(message.embeds[0])) {
        setTimeout(dropInterval)
            .then(async () => {
                const dropOpenedEmbed = new DropOpenedEmbed(message.embeds[0]);

                const users = await message.guild.members.fetch({
                    query: dropOpenedEmbed.username,
                    limit: 1,
                });

                const member = users.first();
                message.channel.send(`Time to drop, ${member}!`);
            })
            .catch(console.error);
    }
});

client.login('token');
```

## Links
- [Documentation](https://minidomo.github.io/laifutil/docs/)
- [GitHub](https://github.com/minidomo/laifutil)
- [npm]()
