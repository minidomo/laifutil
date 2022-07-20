/** Various rarities a badge could be */
export enum BadgeRarity {
    UNKNOWN,
    TIER_1,
    TIER_2,
    TIER_3,
    EVENT,
}

/** Various rarities a character could be */
export enum CharacterRarity {
    UNKNOWN,
    ALPHA,
    BETA,
    GAMMA,
    DELTA,
    EPSILON,
    ZETA,
    ULTRA,
    SCARLET,
    EVENT,
    SPECIAL,
}

/** Various symbols for character rarities */
export enum CharacterRaritySymbol {
    UNKNOWN = '?',
    ALPHA = 'α',
    BETA = 'β',
    GAMMA = 'γ',
    DELTA = 'δ',
    EPSILON = 'ε',
    ZETA = 'ζ',
    ULTRA = 'ζ𝓡',
    SCARLET = '†',
    EVENT = 'ξν',
    SPECIAL = 'Λ',
}

/** Various text for character rarities */
export enum CharacterRarityText {
    UNKNOWN = '?',
    ALPHA = 'ᴀʟᴘʜᴀ',
    BETA = 'ʙᴇᴛᴀ',
    GAMMA = 'ɢᴀᴍᴍᴀ',
    DELTA = 'ᴅᴇʟᴛᴀ',
    EPSILON = 'ᴇᴘsɪʟᴏɴ',
    ZETA = 'ᴢᴇᴛᴀ',
    ULTRA = 'ᴜʟᴛʀᴀ',
    SCARLET = 'sᴄᴀʀʟᴇᴛ',
    EVENT = 'ᴇᴠᴇɴᴛ',
    SPECIAL = 'sᴘᴇᴄɪᴀʟ',
}

/** Various sequences for a character embed */
export enum Sequence {
    UNKNOWN,
    MAIN,
    KPOP,
}

/** Various types of medals */
export enum Medal {
    UNKNOWN,
    BRONZE,
    SILVER,
    GOLD,
    PRISTINE,
}
