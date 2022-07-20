import type { BadgeRarity, CharacterRarity, Sequence } from '../enums';

/** Represents a lower and upper bound */
export interface Bounds {
    /** The lower bound of this object (inclusive) */
    lower: number;
    /** The upper bound of this object (inclusive) */
    upper: number;
}

/** Contains statistics on several rarities for a character */
export interface CharacterRarityCollection {
    /** The current stats of this character with rarity alpha */
    alpha: CharacterRarityStatistics;
    /** The current stats of this character with rarity beta */
    beta: CharacterRarityStatistics;
    /** The current stats of this character with rarity gamma */
    gamma: CharacterRarityStatistics;
    /** The current stats of this character with rarity delta */
    delta: CharacterRarityStatistics;
    /** The current stats of this character with rarity epsilon */
    epsilon: CharacterRarityStatistics;
    /** The current stats of this character with rarity zeta */
    zeta: CharacterRarityStatistics;
    /** The current stats of this character with rarity ultra */
    ultra: CharacterRarityStatistics;
}

/**
 * Contains information about a character with the corresponding rarity which includes the current number of existing
 * characters and the total number of claimed characters
 */
export interface CharacterRarityStatistics {
    /** The current number of existing characters with the corresponding rarity */
    existingAmount: number;
    /** The total number of characters claimed with the corresponding rarity */
    totalClaimed: number;
}

/** Contains informations about a character's image */
export interface ImageInfo {
    /** The image number of this character */
    currentNumber: number;
    /** The username of the image uploader for this character image */
    uploader: string;
    /** The credit source of the image of this character */
    credit: string;
}

/** Contains information about a series */
export interface Series {
    /** The title of the series */
    title: SeriesTitle;
    /** The series ID of which this character originates from */
    id: number;
    /** The sequence this character is a part of */
    sequence: SequenceKey;
}

/** Represents the consumption from a drop command */
export interface Consumption {
    /** The experience gained */
    experience: number;
    /** The amount of health gained */
    health: number;
    /** The amount of attack gained */
    attack: number;
    /** The amount of defense gained */
    defense: number;
}

/** Contains basic information about a character */
export interface CharacterEmbed {
    /** The name of the character */
    name: string;
    /** The global ID of the character */
    globalId: number;
    /** The influence of the character */
    influence: number;
    /** The series of the character */
    series: Series;
}

/** Contains the titles of a series */
export interface SeriesTitle {
    /** The alternate title */
    alternate: string;
    /** The English title */
    english: string;
}

/** Represents a bid in an auction */
export interface Bid {
    /** The username of the user that made this bid */
    username: string;
    /** The amount that was bid */
    amount: number;
}

export type CharacterRarityKey = keyof typeof CharacterRarity;
export type BadgeRarityKey = keyof typeof BadgeRarity;
export type SequenceKey = keyof typeof Sequence;
