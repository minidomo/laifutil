import { Rarity, RARITY_REGEX, resolveRarity } from '../rarity';

const UNIQUE_ID_REGEX = /^(\d+)/;
const GENERAL_REGEX = /#(\d) (.+) `#(\d+)`・\*\*(\d+)\*\*/;
const STAR_REGEX = /(𝐈{1,3}𝐕?)/u;
const EMOJI_REGEX = /\| ([^\s]+) \[/;
const GLITCHED_REGEX = /a:ui:856752760599085076/;
const BADGE_ID_REGEX = /\*\*<[^>]+>・<a:(\d+)/;

const starCount: Map<string, number> = new Map();
starCount.set('𝐈', 1).set('𝐈𝐈', 2).set('𝐈𝐈𝐈', 3).set('𝐈𝐕', 4);

/**
 * Represents a character found in a list embed
 */
export class ListCharacter {
    /**
     * The unique ID of the character
     */
    uniqueId: number;
    /**
     * The emoji of the character
     */
    emoji?: string;
    /**
     * The rarity of the character
     */
    rarity: Rarity;
    /**
     * The number of starts the character has
     */
    stars: number;
    /**
     * The image number of the character
     */
    imageNumber: number;
    /**
     * The name of the character
     */
    name: string;
    /**
     * The influence rank of the character
     */
    influenceRank: number;
    /**
     * The influence of the character
     */
    influence: number;
    /**
     * Whether the character is glitched
     */
    glitched: boolean;
    /**
     * The badge ID of the character's badge
     */
    badgeId?: number;

    constructor(text: string) {
        const uniqueIdMatch = text.match(UNIQUE_ID_REGEX) as RegExpMatchArray;
        this.uniqueId = parseInt(uniqueIdMatch[1]);

        const generalMatch = text.match(GENERAL_REGEX) as RegExpMatchArray;
        this.imageNumber = parseInt(generalMatch[1]);
        this.name = generalMatch[2];
        this.influenceRank = parseInt(generalMatch[3]);
        this.influence = parseInt(generalMatch[4]);

        const rarityMatch = text.match(RARITY_REGEX) as RegExpMatchArray;
        this.rarity = resolveRarity(rarityMatch[1]) as Rarity;

        const starMatch = text.match(STAR_REGEX);
        this.stars = starMatch ? (starCount.get(starMatch[1]) as number) : 0;

        this.glitched = GLITCHED_REGEX.test(text);

        const emojiMatch = text.match(EMOJI_REGEX);
        if (emojiMatch) {
            this.emoji = emojiMatch[1];
        }

        const badgeIdMatch = text.match(BADGE_ID_REGEX);
        if (badgeIdMatch) {
            this.badgeId = parseInt(badgeIdMatch[1]);
        }
    }
}
