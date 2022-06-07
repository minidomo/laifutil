import { Message, MessageEmbed, PartialMessage, User } from 'discord.js';
import type { Bounds } from './structures';

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

export function hasSameImage(embed1: MessageEmbed, embed2: MessageEmbed): boolean {
    if (embed1.image && embed2.image) {
        return embed1.image.url === embed2.image.url;
    }

    return false;
}
