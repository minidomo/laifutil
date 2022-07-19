import type { CharacterRarityKey } from './types';

/**
 * Regular expression for matching rarity text and symbols.
 *
 * ```js
 * CHARACTER_RARITY_REGEX.test('sᴘᴇᴄɪᴀʟ'); // true
 * CHARACTER_RARITY_REGEX.test('Λ'); // true
 * ```
 */
export const CHARACTER_RARITY_REGEX = (() => {
    const str = [
        'α',
        'β',
        'γ',
        'δ',
        'ε',
        // Put ultra before zeta otherwise ultra symbol can match zeta symbol
        'ζ𝓡',
        'ζ',
        '†',
        'ξν',
        'Λ',
        'ᴀʟᴘʜᴀ',
        'ʙᴇᴛᴀ',
        'ɢᴀᴍᴍᴀ',
        'ᴅᴇʟᴛᴀ',
        'ᴇᴘsɪʟᴏɴ',
        'ᴢᴇᴛᴀ',
        'ᴜʟᴛʀᴀ',
        'sᴄᴀʀʟᴇᴛ',
        'ᴇᴠᴇɴᴛ',
        'sᴘᴇᴄɪᴀʟ',
    ].join('|');

    return new RegExp(`(${str})`, 'u');
})();

const mappings: Map<string, CharacterRarityKey> = new Map();
mappings
    .set('ᴀʟᴘʜᴀ', 'ALPHA')
    .set('ʙᴇᴛᴀ', 'BETA')
    .set('ɢᴀᴍᴍᴀ', 'GAMMA')
    .set('ᴅᴇʟᴛᴀ', 'DELTA')
    .set('ᴇᴘsɪʟᴏɴ', 'EPSILON')
    .set('ᴢᴇᴛᴀ', 'ZETA')
    .set('ᴜʟᴛʀᴀ', 'ULTRA')
    .set('sᴄᴀʀʟᴇᴛ', 'SCARLET')
    .set('ᴇᴠᴇɴᴛ', 'EVENT')
    .set('sᴘᴇᴄɪᴀʟ', 'SPECIAL')
    .set('α', 'ALPHA')
    .set('β', 'BETA')
    .set('γ', 'GAMMA')
    .set('δ', 'DELTA')
    .set('ε', 'EPSILON')
    .set('ζ', 'ZETA')
    .set('ζ𝓡', 'ULTRA')
    .set('†', 'SCARLET')
    .set('ξν', 'EVENT')
    .set('Λ', 'SPECIAL');

/**
 * Resolves the query with the corresponding Rarity.
 *
 * @param query The query to resolve
 * @returns The corresponding Rarity, 'UNKNOWN' otherwise
 */
export function resolveCharacterRarity(query: string): CharacterRarityKey {
    return mappings.get(query) ?? 'UNKNOWN';
}
