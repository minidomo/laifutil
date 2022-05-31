export interface Rarity {
    text: string;
    symbol: string;
}

export const Alpha: Rarity = {
    text: 'ᴀʟᴘʜᴀ',
    symbol: 'α',
};

export const Beta: Rarity = {
    text: 'ʙᴇᴛᴀ',
    symbol: 'β',
};

export const Gamma: Rarity = {
    text: 'ɢᴀᴍᴍᴀ',
    symbol: 'γ',
};

export const Delta: Rarity = {
    text: 'ᴅᴇʟᴛᴀ',
    symbol: 'δ',
};

export const Epsilon: Rarity = {
    text: 'ᴇᴘsɪʟᴏɴ',
    symbol: 'ε',
};

export const Zeta: Rarity = {
    text: 'ᴢᴇᴛᴀ',
    symbol: 'ζ',
};

export const Ultra: Rarity = {
    text: 'ᴜʟᴛʀᴀ',
    symbol: 'ζ𝓡',
};

export const Scarlet: Rarity = {
    text: 'sᴄᴀʀʟᴇᴛ',
    symbol: '†',
};

export const Event: Rarity = {
    text: 'ᴇᴠᴇɴᴛ',
    symbol: 'ξν',
};

export const Special: Rarity = {
    text: 'sᴘᴇᴄɪᴀʟ',
    symbol: 'Λ',
};


const textMap: Map<string, Rarity> = new Map();
textMap
    .set('ᴀʟᴘʜᴀ', Alpha)
    .set('ʙᴇᴛᴀ', Beta)
    .set('ɢᴀᴍᴍᴀ', Gamma)
    .set('ᴅᴇʟᴛᴀ', Delta)
    .set('ᴇᴘsɪʟᴏɴ', Epsilon)
    .set('ᴢᴇᴛᴀ', Zeta)
    .set('ᴜʟᴛʀᴀ', Ultra)
    .set('sᴄᴀʀʟᴇᴛ', Scarlet)
    .set('ᴇᴠᴇɴᴛ', Event)
    .set('sᴘᴇᴄɪᴀʟ', Special);

const symbolMap: Map<string, Rarity> = new Map();
symbolMap
    .set('α', Alpha)
    .set('β', Beta)
    .set('γ', Gamma)
    .set('δ', Delta)
    .set('ε', Epsilon)
    .set('ζ', Zeta)
    .set('ζ𝓡', Ultra)
    .set('†', Scarlet)
    .set('ξν', Event)
    .set('Λ', Special);

interface RarityQuery {
    text?: string;
    symbol?: string;
}

export function findRarity(query: RarityQuery): Rarity | null {
    if (query.text) {
        const rarity = textMap.get(query.text);
        if (rarity) {
            return rarity;
        }
    }

    if (query.symbol) {
        const rarity = textMap.get(query.symbol);
        if (rarity) {
            return rarity;
        }
    }

    return null;
}
