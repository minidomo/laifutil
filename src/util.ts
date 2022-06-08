import { Message, MessageEmbed, PartialMessage, User } from 'discord.js';
import type { Bounds } from './structures';

/**
 * LaifuBot's user ID.
 */
export const USER_ID = '688202466315206661';

function getLastBounds(str: string, leftChar: string, rightChar: string): Bounds | null {
    if (!str.includes(leftChar) || !str.includes(rightChar)) {
        return null;
    }

    let count = 0;
    let left = -1, right = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === leftChar) {
            if (count === 0) {
                left = i;
            }
            count++;
        } else if (str[i] === rightChar) {
            count--;
            if (count === 0) {
                right = i;
            }
        }
    }

    return left >= right ? null : { lower: left, upper: right };
}

/**
 * Transforms the given name to a new string without ending emojis or alternative names.
 *
 * @param name The name of the character
 * @returns The name without emojis or alternative names
 */
export function cleanCharacterName(name: string): string {
    const parenBounds = getLastBounds(name, '(', ')');
    const emoteBounds = getLastBounds(name, '<', '>');

    let ret = name;
    if (parenBounds) {
        ret = ret.substring(0, parenBounds.lower) + ret.substring(parenBounds.upper + 1);
    }

    if (emoteBounds) {
        ret = ret.substring(0, emoteBounds.lower) + ret.substring(emoteBounds.upper + 1);
    }

    return ret.trim();
}

/**
 * Checks if the given object is LaifuBot or from LaifuBot. The user ID associated with the object will be compared
 * with LaifuBot's known user ID.
 *
 * @param data The object to be checked
 * @returns True if and only if the data given is LaifuBot or from LaifuBot, false otherwise
 */
export function isLaifuBot(data: string | Message | PartialMessage | User): boolean {
    let id: string;

    if (typeof data === 'string') {
        id = data;
    } else if (data instanceof User) {
        id = data.id;
    } else {
        id = data.author?.id ?? '';
    }

    return id === USER_ID;
}

/**
 * Checks if the given embeds contains the same image.
 *
 * @param embed1 The first embed
 * @param embed2 The second embed
 * @returns True if and only if both contain an image and their URLs are the same, false otherwise
 */
export function hasSameImage(embed1: MessageEmbed, embed2: MessageEmbed): boolean {
    if (embed1.image && embed2.image) {
        return embed1.image.url === embed2.image.url;
    }

    return false;
}
