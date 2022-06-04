import type { Message, MessageEmbed } from 'discord.js';
import { LaifuProperties } from '.';
import { promisify } from 'util';

export function isLoaded(embed: MessageEmbed) {
    if (!embed.image) return true;
    if (embed.image.width && embed.image.height) {
        return embed.image.width > 0 && embed.image.height > 0;
    }
    return false;
}

function getLastBounds(str: string, leftChar: string, rightChar: string): [number, number] | null {
    if (!str.includes(leftChar) || !str.includes(rightChar)) return null;
    let count = 0;
    let left = -1, right = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === leftChar) {
            if (count === 0) left = i;
            count++;
        } else if (str[i] === rightChar) {
            count--;
            if (count === 0) right = i;
        }
    }
    return left >= right ? null : [left, right];
}

export function cleanCharacterName(name: string) {
    const parenBounds = getLastBounds(name, '(', ')');
    const emoteBounds = getLastBounds(name, '<', '>');
    let ret = name;
    if (parenBounds) ret = ret.substring(0, parenBounds[0]) + ret.substring(parenBounds[1] + 1);
    if (emoteBounds) ret = ret.substring(0, emoteBounds[0]) + ret.substring(emoteBounds[1] + 1);
    return ret.trim();
}

interface LaifuEmbedOptions {
    delay?: number;
    loaded?: boolean;
    duplicates?: boolean;
    embedSet: Set<string>;
}

function hashEmbed(id: string, embed: MessageEmbed, loaded: boolean) {
    const cleanEmbed = embed.toJSON();
    if (cleanEmbed.image && !loaded) cleanEmbed.image.height = cleanEmbed.image.width = 0;
    return id + JSON.stringify(cleanEmbed, null, 0);
}

const wait = promisify(setTimeout);

export async function hasLaifuEmbed(message: Message, options: LaifuEmbedOptions) {
    if (typeof options.delay === 'number') await wait(options.delay);
    if (!message) return null;

    const targetMessage = await message.channel.messages.fetch(message.id);
    if (targetMessage.author.id !== LaifuProperties.userId) return null;
    if (targetMessage.embeds && targetMessage.embeds.length) {
        const embed = targetMessage.embeds[0];
        if (options.loaded === true && !isLoaded(embed)) return null;
        if (options.duplicates === false) {
            const embedHash = hashEmbed(message.id, embed, !!options.loaded);
            if (options.embedSet.has(embedHash)) return null;
            options.embedSet.add(embedHash);
        }
        return targetMessage;
    }

    return null;
}
