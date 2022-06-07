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

export const constants = createConstants();

function createRegex(): RegExp {
    const baseExp = Object.values(constants)
        .map((rarity: Rarity) => `${rarity.text}|${rarity.symbol}`)
        .join('|');
    return new RegExp(`(${baseExp})`);
}

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

export function resolve(query: string): Rarity | null {
    return mappings.get(query) ?? null;
}
