export interface Rarity {
    text: string;
    symbol: string;
}

export interface RarityConstants {
    Alpha: Rarity;
    Beta: Rarity;
    Gamma: Rarity;
    Delta: Rarity;
    Epsilon: Rarity;
    Zeta: Rarity;
    Ultra: Rarity;
    Scarlet: Rarity;
    Event: Rarity;
    Special: Rarity;
}

export const Constants: RarityConstants = {
    Alpha: {
        text: 'ᴀʟᴘʜᴀ',
        symbol: 'α',
    },
    Beta: {
        text: 'ʙᴇᴛᴀ',
        symbol: 'β',
    },
    Gamma: {
        text: 'ɢᴀᴍᴍᴀ',
        symbol: 'γ',
    },
    Delta: {
        text: 'ᴅᴇʟᴛᴀ',
        symbol: 'δ',
    },
    Epsilon: {
        text: 'ᴇᴘsɪʟᴏɴ',
        symbol: 'ε',
    },
    Zeta: {
        text: 'ᴢᴇᴛᴀ',
        symbol: 'ζ',
    },
    Ultra: {
        text: 'ᴜʟᴛʀᴀ',
        symbol: 'ζ𝓡',
    },
    Scarlet: {
        text: 'sᴄᴀʀʟᴇᴛ',
        symbol: '†',
    },
    Event: {
        text: 'ᴇᴠᴇɴᴛ',
        symbol: 'ξν',
    },
    Special: {
        text: 'sᴘᴇᴄɪᴀʟ',
        symbol: 'Λ',
    },
};

function createRegex(): RegExp {
    const baseExp = Object.values(Constants)
        .map((rarity: Rarity) => `${rarity.text}|${rarity.symbol}`)
        .join('|');
    return new RegExp(`(${baseExp})`);
}

export const REGEX = createRegex();

const mappings: Map<string, Rarity> = new Map();
mappings
    .set('ᴀʟᴘʜᴀ', Constants.Alpha)
    .set('ʙᴇᴛᴀ', Constants.Beta)
    .set('ɢᴀᴍᴍᴀ', Constants.Gamma)
    .set('ᴅᴇʟᴛᴀ', Constants.Delta)
    .set('ᴇᴘsɪʟᴏɴ', Constants.Epsilon)
    .set('ᴢᴇᴛᴀ', Constants.Zeta)
    .set('ᴜʟᴛʀᴀ', Constants.Ultra)
    .set('sᴄᴀʀʟᴇᴛ', Constants.Scarlet)
    .set('ᴇᴠᴇɴᴛ', Constants.Event)
    .set('sᴘᴇᴄɪᴀʟ', Constants.Special)
    .set('α', Constants.Alpha)
    .set('β', Constants.Beta)
    .set('γ', Constants.Gamma)
    .set('δ', Constants.Delta)
    .set('ε', Constants.Epsilon)
    .set('ζ', Constants.Zeta)
    .set('ζ𝓡', Constants.Ultra)
    .set('†', Constants.Scarlet)
    .set('ξν', Constants.Event)
    .set('Λ', Constants.Special);

export function resolve(query: string): Rarity | null {
    return mappings.get(query) ?? null;
}
