/**
 * Contains the text and symbol for a rarity.
 */
export interface Rarity {
    /**
     * The name of the rarity in latin letter small capitals.
     */
    text: string;
    /**
     * The symbols used to represent the rarity.
     */
    symbol: string;
}

/**
 * Container for all rarities.
 */
export interface RarityContainer {
    ALPHA: Rarity;
    BETA: Rarity;
    GAMMA: Rarity;
    DELTA: Rarity;
    EPSILON: Rarity;
    ZETA: Rarity;
    ULTRA: Rarity;
    SCARLET: Rarity;
    EVENT: Rarity;
    SPECIAL: Rarity;
}

/**
 * Constants for all rarities in LaifuBot.
 */
export const constants: RarityContainer = {
    ALPHA: {
        text: 'ᴀʟᴘʜᴀ',
        symbol: 'α',
    },
    BETA: {
        text: 'ʙᴇᴛᴀ',
        symbol: 'β',
    },
    GAMMA: {
        text: 'ɢᴀᴍᴍᴀ',
        symbol: 'γ',
    },
    DELTA: {
        text: 'ᴅᴇʟᴛᴀ',
        symbol: 'δ',
    },
    EPSILON: {
        text: 'ᴇᴘsɪʟᴏɴ',
        symbol: 'ε',
    },
    ZETA: {
        text: 'ᴢᴇᴛᴀ',
        symbol: 'ζ',
    },
    ULTRA: {
        text: 'ᴜʟᴛʀᴀ',
        symbol: 'ζ𝓡',
    },
    SCARLET: {
        text: 'sᴄᴀʀʟᴇᴛ',
        symbol: '†',
    },
    EVENT: {
        text: 'ᴇᴠᴇɴᴛ',
        symbol: 'ξν',
    },
    SPECIAL: {
        text: 'sᴘᴇᴄɪᴀʟ',
        symbol: 'Λ',
    },
};

function createRegex(): RegExp {
    const baseExp = Object.values(constants)
        .map((rarity: Rarity) => `${rarity.text}|${rarity.symbol}`)
        .join('|');
    return new RegExp(`(${baseExp})`);
}

/**
 * Regular expression for matching rarity text and symbols.
 *
 * ```js
 * Rarity.REGEX.test('sᴘᴇᴄɪᴀʟ'); // true
 * Rarity.REGEX.test('Λ'); // true
 * ```
 */
export const REGEX = createRegex();

const mappings: Map<string, Rarity> = new Map();
mappings
    .set('ᴀʟᴘʜᴀ', constants.ALPHA)
    .set('ʙᴇᴛᴀ', constants.BETA)
    .set('ɢᴀᴍᴍᴀ', constants.GAMMA)
    .set('ᴅᴇʟᴛᴀ', constants.DELTA)
    .set('ᴇᴘsɪʟᴏɴ', constants.EPSILON)
    .set('ᴢᴇᴛᴀ', constants.ZETA)
    .set('ᴜʟᴛʀᴀ', constants.ULTRA)
    .set('sᴄᴀʀʟᴇᴛ', constants.SCARLET)
    .set('ᴇᴠᴇɴᴛ', constants.EVENT)
    .set('sᴘᴇᴄɪᴀʟ', constants.SPECIAL)
    .set('α', constants.ALPHA)
    .set('β', constants.BETA)
    .set('γ', constants.GAMMA)
    .set('δ', constants.DELTA)
    .set('ε', constants.EPSILON)
    .set('ζ', constants.ZETA)
    .set('ζ𝓡', constants.ULTRA)
    .set('†', constants.SCARLET)
    .set('ξν', constants.EVENT)
    .set('Λ', constants.SPECIAL);

/**
 * Resolves the query with the corresponding Rarity object.
 *
 * @param query The query to resolve
 * @returns The corresponding Rarity, null otherwise
 */
export function resolve(query: string): Rarity | null {
    return mappings.get(query) ?? null;
}
