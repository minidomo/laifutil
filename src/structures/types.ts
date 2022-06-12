/**
 * Represents a lower and upper bound
 */
export interface Bounds {
    /**
     * The lower bound of this object
     */
    lower: number;
    /**
     * The upper bound of this object
     */
    upper: number;
}

export interface CharacterRarityInfoCollection {
    /**
     * The current stats of this character with rarity alpha
     */
    alpha: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity beta
     */
    beta: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity gamma
     */
    gamma: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity delta
     */
    delta: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity epsilon
     */
    epsilon: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity zeta
     */
    zeta: CharacterRarityInfo;
    /**
     * The current stats of this character with rarity ultra
     */
    ultra: CharacterRarityInfo;
}

/**
 * Contains information about a character with the corresponding rarity which includes the current number of existing
 * characters and the total number of claimed characters
 */
export interface CharacterRarityInfo {
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
export interface CharacterImageInfo {
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
 * Contains information about a character's series
 */
export interface CharacterSeriesInfo {
    /**
     * The series of the character in English
     */
    englishTitle: string;
    /**
     * The series of the character in an alternate language
     */
    alternateTitle: string;
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
     * The global ID of this character
     */
    gid: number;
    /**
     * The name of this character
     */
    name: string;
    /**
     * The influence of this character
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
     * The amount of deference gained
     */
    defense: number;
}
