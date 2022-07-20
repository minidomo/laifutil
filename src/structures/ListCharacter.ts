import { MEDAL_REGEX, resolveMedal } from '../private';
import type { CharacterRarityKey, MedalKey } from '../types';
import { CHARACTER_RARITY_REGEX, resolveCharacterRarity } from '../utils';

const UNIQUE_ID_REGEX = /^(\d+)/;
const GENERAL_REGEX = /#(\d) (.+) `#(\d+)`・\*\*(\d+)\*\*/;
const STAR_REGEX = /(𝐈{1,3}𝐕?)/u;
const EMOJI_REGEX = /\| ([^\s]+) \[/;
const GLITCHED_REGEX = /:(?:\w{1,2}i|ig\d+):/;
const BADGE_ID_REGEX = /\*\*<[^>]+>・<a:(\d+)/;
const INFLUENCE_SKIN_ID_REGEX = /:ig?(\d+):/;

const starCount: Map<string, number> = new Map();
starCount.set('𝐈', 1).set('𝐈𝐈', 2).set('𝐈𝐈𝐈', 3)
.set('𝐈𝐕', 4);

/** Represents a character found in a list embed */
export class ListCharacter {
    /** The unique ID of the character */
    uniqueId: number;
    /** The emoji of the character */
    emoji?: string;
    /** The rarity of the character */
    rarity: CharacterRarityKey;
    /** The number of starts the character has */
    stars: number;
    /** The image number of the character */
    imageNumber: number;
    /** The name of the character */
    name: string;
    /** The rank of this character */
    rank: number;
    /** The influence of the character */
    influence: number;
    /** Whether the character is glitched */
    glitched: boolean;
    /** The badge ID of the character's badge */
    badgeId?: number;
    /** The influence skin ID of the character's influence skin */
    influenceSkinId?: number;
    /** The medal of this character */
    medal?: MedalKey;

    constructor(text: string) {
        const uniqueIdMatch = text.match(UNIQUE_ID_REGEX) as RegExpMatchArray;
        this.uniqueId = parseInt(uniqueIdMatch[1]);

        const generalMatch = text.match(GENERAL_REGEX) as RegExpMatchArray;
        this.imageNumber = parseInt(generalMatch[1]);
        this.name = generalMatch[2];
        this.rank = parseInt(generalMatch[3]);
        this.influence = parseInt(generalMatch[4]);

        const rarityMatch = text.match(CHARACTER_RARITY_REGEX);
        this.rarity = rarityMatch ? resolveCharacterRarity(rarityMatch[1]) : 'UNKNOWN';

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

        const influenceSkinIdMatch = text.match(INFLUENCE_SKIN_ID_REGEX);
        if (influenceSkinIdMatch) {
            this.influenceSkinId = parseInt(influenceSkinIdMatch[1]);
        }

        const medalMatch = text.match(MEDAL_REGEX);
        if (medalMatch) {
            this.medal = resolveMedal(medalMatch[1]);
        }
    }
}
