export interface Rarity {
    text: string;
    symbol: string;
}

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

function createConstants(): RarityContainer {
    const constants: RarityContainer = {
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

    Object.freeze(constants);
    Object.values(constants).forEach((rarity: Rarity) => Object.freeze(rarity));

    return constants;
}

export const CONSTANTS = createConstants();

function createRegex(): RegExp {
    const baseExp = Object.values(CONSTANTS)
        .map((rarity: Rarity) => `${rarity.text}|${rarity.symbol}`)
        .join('|');
    return new RegExp(`(${baseExp})`);
}

export const REGEX = createRegex();

const mappings: Map<string, Rarity> = new Map();
mappings
    .set('ᴀʟᴘʜᴀ', CONSTANTS.ALPHA)
    .set('ʙᴇᴛᴀ', CONSTANTS.BETA)
    .set('ɢᴀᴍᴍᴀ', CONSTANTS.GAMMA)
    .set('ᴅᴇʟᴛᴀ', CONSTANTS.DELTA)
    .set('ᴇᴘsɪʟᴏɴ', CONSTANTS.EPSILON)
    .set('ᴢᴇᴛᴀ', CONSTANTS.ZETA)
    .set('ᴜʟᴛʀᴀ', CONSTANTS.ULTRA)
    .set('sᴄᴀʀʟᴇᴛ', CONSTANTS.SCARLET)
    .set('ᴇᴠᴇɴᴛ', CONSTANTS.EVENT)
    .set('sᴘᴇᴄɪᴀʟ', CONSTANTS.SPECIAL)
    .set('α', CONSTANTS.ALPHA)
    .set('β', CONSTANTS.BETA)
    .set('γ', CONSTANTS.GAMMA)
    .set('δ', CONSTANTS.DELTA)
    .set('ε', CONSTANTS.EPSILON)
    .set('ζ', CONSTANTS.ZETA)
    .set('ζ𝓡', CONSTANTS.ULTRA)
    .set('†', CONSTANTS.SCARLET)
    .set('ξν', CONSTANTS.EVENT)
    .set('Λ', CONSTANTS.SPECIAL);

export function resolve(query: string): Rarity | null {
    return mappings.get(query) ?? null;
}
