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
export const RarityConstants: RarityContainer = {
    ALPHA: {
        text: 'ᴀʟᴘʜᴀ',
        symbol: 'α',
    } as const,
    BETA: {
        text: 'ʙᴇᴛᴀ',
        symbol: 'β',
    } as const,
    GAMMA: {
        text: 'ɢᴀᴍᴍᴀ',
        symbol: 'γ',
    } as const,
    DELTA: {
        text: 'ᴅᴇʟᴛᴀ',
        symbol: 'δ',
    } as const,
    EPSILON: {
        text: 'ᴇᴘsɪʟᴏɴ',
        symbol: 'ε',
    } as const,
    ZETA: {
        text: 'ᴢᴇᴛᴀ',
        symbol: 'ζ',
    } as const,
    ULTRA: {
        text: 'ᴜʟᴛʀᴀ',
        symbol: 'ζ𝓡',
    } as const,
    SCARLET: {
        text: 'sᴄᴀʀʟᴇᴛ',
        symbol: '†',
    } as const,
    EVENT: {
        text: 'ᴇᴠᴇɴᴛ',
        symbol: 'ξν',
    } as const,
    SPECIAL: {
        text: 'sᴘᴇᴄɪᴀʟ',
        symbol: 'Λ',
    } as const,
};

function createRegex(): RegExp {
    const baseExp = Object.values(RarityConstants)
        .map((rarity: Rarity) => `${rarity.text}|${rarity.symbol}`)
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
