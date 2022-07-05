/**
 * Contains the text and symbol for a rarity.
 */
export interface Rarity {
    /**
     * The name of the rarity in latin letter small capitals.
     */
    TEXT: string;
    /**
     * The symbols used to represent the rarity.
     */
    SYMBOL: string;
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
export const RarityConstants: RarityContainer = {
    ALPHA: {
        TEXT: 'ᴀʟᴘʜᴀ',
        SYMBOL: 'α',
    } as const,
    BETA: {
        TEXT: 'ʙᴇᴛᴀ',
        SYMBOL: 'β',
    } as const,
    GAMMA: {
        TEXT: 'ɢᴀᴍᴍᴀ',
        SYMBOL: 'γ',
    } as const,
    DELTA: {
        TEXT: 'ᴅᴇʟᴛᴀ',
        SYMBOL: 'δ',
    } as const,
    EPSILON: {
        TEXT: 'ᴇᴘsɪʟᴏɴ',
        SYMBOL: 'ε',
    } as const,
    ZETA: {
        TEXT: 'ᴢᴇᴛᴀ',
        SYMBOL: 'ζ',
    } as const,
    ULTRA: {
        TEXT: 'ᴜʟᴛʀᴀ',
        SYMBOL: 'ζ𝓡',
    } as const,
    SCARLET: {
        TEXT: 'sᴄᴀʀʟᴇᴛ',
        SYMBOL: '†',
    } as const,
    EVENT: {
        TEXT: 'ᴇᴠᴇɴᴛ',
        SYMBOL: 'ξν',
    } as const,
    SPECIAL: {
        TEXT: 'sᴘᴇᴄɪᴀʟ',
        SYMBOL: 'Λ',
    } as const,
};

function createRegex(): RegExp {
    // Sort to look at longer symbols first due to similarity with zeta and ultra symbols
    const baseExp = Object.values(RarityConstants)
        .sort((a: Rarity, b: Rarity) => b.SYMBOL.length - a.SYMBOL.length)
        .map((rarity: Rarity) => `${rarity.TEXT}|${rarity.SYMBOL}`)
        .join('|');
    return new RegExp(`(${baseExp})`);
}

/**
 * Regular expression for matching rarity text and symbols.
 *
 * ```js
 * RARITY_REGEX.test('sᴘᴇᴄɪᴀʟ'); // true
 * RARITY_REGEX.test('Λ'); // true
 * ```
 */
export const RARITY_REGEX = createRegex();

const mappings: Map<string, Rarity> = new Map();
mappings
    .set('ᴀʟᴘʜᴀ', RarityConstants.ALPHA)
    .set('ʙᴇᴛᴀ', RarityConstants.BETA)
    .set('ɢᴀᴍᴍᴀ', RarityConstants.GAMMA)
    .set('ᴅᴇʟᴛᴀ', RarityConstants.DELTA)
    .set('ᴇᴘsɪʟᴏɴ', RarityConstants.EPSILON)
    .set('ᴢᴇᴛᴀ', RarityConstants.ZETA)
    .set('ᴜʟᴛʀᴀ', RarityConstants.ULTRA)
    .set('sᴄᴀʀʟᴇᴛ', RarityConstants.SCARLET)
    .set('ᴇᴠᴇɴᴛ', RarityConstants.EVENT)
    .set('sᴘᴇᴄɪᴀʟ', RarityConstants.SPECIAL)
    .set('α', RarityConstants.ALPHA)
    .set('β', RarityConstants.BETA)
    .set('γ', RarityConstants.GAMMA)
    .set('δ', RarityConstants.DELTA)
    .set('ε', RarityConstants.EPSILON)
    .set('ζ', RarityConstants.ZETA)
    .set('ζ𝓡', RarityConstants.ULTRA)
    .set('†', RarityConstants.SCARLET)
    .set('ξν', RarityConstants.EVENT)
    .set('Λ', RarityConstants.SPECIAL);

/**
 * Resolves the query with the corresponding Rarity object.
 *
 * @param query The query to resolve
 * @returns The corresponding Rarity, null otherwise
 */
export function resolveRarity(query: string): Rarity | null {
    return mappings.get(query) ?? null;
}
