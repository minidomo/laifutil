import type { APIEmbed } from 'discord-api-types/v10';
import emojiRegex from 'emoji-regex';
import type { Bounds } from '../types';

export * from './identifier';
export * from './characterRarity';

/** LaifuBot's user ID. */
export const LAIFU_USER_ID = '688202466315206661';

function getLastBounds(str: string, leftChar: string[], rightChar: string[]): Bounds | null {
    const leftCharExists = leftChar.some(e => str.includes(e));
    const rightCharExists = rightChar.some(e => str.includes(e));
    if (!leftCharExists || !rightCharExists) {
        return null;
    }

    let count = 0;
    let left = -1,
        right = -1;

    for (let i = 0; i < str.length; i++) {
        const isLeftChar = leftChar.some(e => str[i] === e);
        const isRightChar = rightChar.some(e => str[i] === e);

        if (isLeftChar) {
            if (count === 0) {
                left = i;
            }
            count++;
        } else if (isRightChar) {
            count--;
            if (count === 0) {
                right = i;
            }
        }
    }

    return left >= right ? null : { lower: left, upper: right };
}

function removeEmojis(name: string): string {
    let ret = name;

    for (let match = emojiRegex().exec(ret); match; match = emojiRegex().exec(ret)) {
        const emoji = match[0];
        ret = ret.substring(0, match.index) + ret.substring(match.index + emoji.length);
    }

    return ret;
}

/**
 * Transforms the given name to a new string without ending emojis or alternative names.
 *
 * @param name The name of the character
 * @returns The name without emojis or alternative names
 */
export function cleanCharacterName(name: string): string {
    const parenBounds = getLastBounds(name, ['(', '（'], [')', '）']);
    const emoteBounds = getLastBounds(name, ['<'], ['>']);

    let ret = name;
    if (parenBounds) {
        ret = ret.substring(0, parenBounds.lower) + ret.substring(parenBounds.upper + 1);
    }

    if (emoteBounds) {
        ret = ret.substring(0, emoteBounds.lower) + ret.substring(emoteBounds.upper + 1);
    }

    ret = removeEmojis(ret);

    return ret.trim();
}

/**
 * Checks if the given ID is equal to LaifuBot's ID or from LaifuBot.
 *
 * @param id The ID to be checked
 * @returns True if and only if the given ID is LaifuBot's ID, false otherwise
 */
export function isLaifuBot(id: string): boolean {
    return id === LAIFU_USER_ID;
}

/**
 * Checks if the given embeds contains the same image.
 *
 * @param a The first embed
 * @param b The second embed
 * @returns True if and only if both contain an image and their URLs are the same, false otherwise
 */
export function hasSameImage(a: APIEmbed, b: APIEmbed): boolean {
    if (a.image && b.image) {
        return a.image.url === b.image.url;
    }

    return false;
}
