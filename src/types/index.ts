/**
 * Represents a lower and upper bound
 */
export interface Bounds {
    /**
     * The lower bound of this object (inclusive)
     */
    lower: number;
    /**
     * The upper bound of this object (inclusive)
     */
    upper: number;
}

/**
 * Contains statistics on several rarities for a character
 */
export interface RarityStatsCollection {
    /**
     * The current stats of this character with rarity alpha
     */
    alpha: RarityStats;
    /**
     * The current stats of this character with rarity beta
     */
    beta: RarityStats;
    /**
     * The current stats of this character with rarity gamma
     */
    gamma: RarityStats;
    /**
     * The current stats of this character with rarity delta
     */
    delta: RarityStats;
    /**
     * The current stats of this character with rarity epsilon
     */
    epsilon: RarityStats;
    /**
     * The current stats of this character with rarity zeta
     */
    zeta: RarityStats;
    /**
     * The current stats of this character with rarity ultra
     */
    ultra: RarityStats;
}

/**
 * Contains information about a character with the corresponding rarity which includes the current number of existing
 * characters and the total number of claimed characters
 */
export interface RarityStats {
    /**
     * The current number of existing characters with the corresponding rarity
     */
    existingAmount: number;
    /**
     * The total number of characters claimed with the corresponding rarity
     */
    totalClaimed: number;
}

/**
 * Contains informations about a character's image
 */
export interface ImageInfo {
    /**
     * The image number of this character
     */
    currentNumber: number;
    /**
     * The username of the image uploader for this character image
     */
    uploader: string;
    /**
     * The credit source of the image of this character
     */
    credit: string;
}

/**
 * Contains information about a series
 */
export interface Series {
    /**
     * The title of the series
     */
    title: SeriesTitle;
    /**
     * The series ID of which this character originates from
     */
    id: number;
    /**
     * The sequence this character is a part of
     */
    sequence: string;
}

/**
 * Represents a character found in a wishlist embed
 */
export interface WishlistCharacter {
    /**
     * The name of the character
     */
    name: string;
    /**
     * The global ID of the character
     */
    id: number;
    /**
     * The influence of the character
     */
    influence: number;
}

/**
 * Represents the consumption from a drop command
 */
export interface Consumption {
    /**
     * The experience gained
     */
    experience: number;
    /**
     * The amount of health gained
     */
    health: number;
    /**
     * The amount of attack gained
     */
    attack: number;
    /**
     * The amount of defense gained
     */
    defense: number;
}

/**
 * Contains basic information about a character
 */
export interface Character {
    /**
     * The name of the character
     */
    name: string;
    /**
     * The global ID of the character
     */
    id: number;
    /**
     * The influence of the character
     */
    influence: number;
    /**
     * The series of the character
     */
    series: Series;
}

/**
 * Contains the titles of a series
 */
export interface SeriesTitle {
    /**
     * The alternate title
     */
    alternate: string;
    /**
     * The English title
     */
    english: string;
}
