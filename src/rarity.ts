/** Contains the text and symbol for a rarity. */
export interface Rarity {
    /** The name of the rarity in latin letter small capitals. */
    TEXT: string;
    /** The symbols used to represent the rarity. */
    SYMBOL: string;
    /** A numerical value to represent the rarity */
    VALUE?: number;
}

/** Container for all rarities. */
export interface RarityContainer {
    ALPHA: Rarity & { VALUE: number };
    BETA: Rarity & { VALUE: number };
    GAMMA: Rarity & { VALUE: number };
    DELTA: Rarity & { VALUE: number };
    EPSILON: Rarity & { VALUE: number };
    ZETA: Rarity & { VALUE: number };
    ULTRA: Rarity & { VALUE: number };
    SCARLET: Rarity & { VALUE: number };
    EVENT: Rarity & { VALUE: number };
    SPECIAL: Rarity & { VALUE: number };
}

/** Constants for all rarities in LaifuBot. */
export const RarityConstants: RarityContainer = {
    ALPHA: {
        TEXT: 'ᴀʟᴘʜᴀ',
        SYMBOL: 'α',
        VALUE: 0,
    } as const,
    BETA: {
        TEXT: 'ʙᴇᴛᴀ',
        SYMBOL: 'β',
        VALUE: 1,
    } as const,
    GAMMA: {
        TEXT: 'ɢᴀᴍᴍᴀ',
        SYMBOL: 'γ',
        VALUE: 2,
    } as const,
    DELTA: {
        TEXT: 'ᴅᴇʟᴛᴀ',
        SYMBOL: 'δ',
        VALUE: 3,
    } as const,
    EPSILON: {
        TEXT: 'ᴇᴘsɪʟᴏɴ',
        SYMBOL: 'ε',
        VALUE: 4,
    } as const,
    ZETA: {
        TEXT: 'ᴢᴇᴛᴀ',
        SYMBOL: 'ζ',
        VALUE: 5,
    } as const,
    ULTRA: {
        TEXT: 'ᴜʟᴛʀᴀ',
        SYMBOL: 'ζ𝓡',
        VALUE: 6,
    } as const,
    SCARLET: {
        TEXT: 'sᴄᴀʀʟᴇᴛ',
        SYMBOL: '†',
        VALUE: 7,
    } as const,
    EVENT: {
        TEXT: 'ᴇᴠᴇɴᴛ',
        SYMBOL: 'ξν',
        VALUE: 8,
    } as const,
    SPECIAL: {
        TEXT: 'sᴘᴇᴄɪᴀʟ',
        SYMBOL: 'Λ',
        VALUE: 9,
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

/**
 * Checks whether the given rarity contains the VALUE property.
 *
 * @param rarity The rarity to inspect
 * @returns True if the given rarity contains the VALUE property, false otherwise
 */
export function hasRarityValue(rarity: Rarity): rarity is Rarity & { VALUE: number } {
    return rarity.VALUE !== undefined;
}

/**
 * Compares its two rarities for order. Returns a negative integer, zero, or a positive integer as the first argument is
 * less than, equal to, or greater than the second.
 *
 * If both rarities contain the VALUE property, it will be used for comparison. If the first argument only contains the
 * VALUE property, -1 is returned. If the second argument only contains the VALUE property, 1 is returned. If no VALUE
 * property is found on either arguments, 0 is returned.
 *
 * @param a The first rarity to compare
 * @param b The second rarity to compare
 * @returns A negative integer, zero, or a positive integer as the first argument is less than, equal to, or greater
 *   than the second
 */
export function compareRarity(a: Rarity, b: Rarity): number {
    if (hasRarityValue(a) && hasRarityValue(b)) {
        return a.VALUE - b.VALUE;
    } else if (hasRarityValue(a)) {
        return -1;
    } else if (hasRarityValue(b)) {
        return 1;
    } else {
        return 0;
    }
}
