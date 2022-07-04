import type { EmbedAuthorData, EmbedFooterData, MessageEmbed } from 'discord.js';
import { Rarity, RarityConstants, RARITY_REGEX, resolveRarity } from '../rarity';
import type { Character, ImageInfo, Series } from '../types';

const TITLE_REGEX = /#(\d) (.+)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const GENERAL_INFO_REGEX = /\*\*UID:\*\* (\d+) \| \*\*GID:\*\* (\d+)/;
const STAR_REGEX = /([★☆]+)/;
const INFLUENCE_REGEX = /Influence `#(\d+)`・\*\*(\d+)\*\*/;
const FOOTER_REGEX = /Uploaded by (.+)\nCredit: (.+)/;

const starCount: Map<string, number> = new Map();
starCount
    .set('☆☆☆☆', 0)
    .set('★☆☆☆', 1)
    .set('★★☆☆', 2)
    .set('★★★☆', 3)
    .set('★★★★', 4);

/**
 * A basic implementation for character embeds from gacha, view, and burn commands
 */
export class BasePersonalSimpleCharacterEmbed implements Character {
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
    /**
     * Information of the character's image
     */
    image: ImageInfo;
    /**
     * The unique ID of the character
     */
    uniqueId: number;
    /**
     * The rarity of the character
     */
    rarity: Rarity;
    /**
     * The number of stars the character has
     */
    stars: number;
    /**
     * The influence rank of this character
     */
    influenceRank: number;
    /**
     * The owner of this character
     */
    owner: string;

    /**
     *
     * @param embed The embed
     * @param ownerRegex The regular expression to obtain the owner of the character
     */
    constructor(embed: MessageEmbed, ownerRegex: RegExp) {
        // Title
        const titleMatch = (embed.title as string).match(TITLE_REGEX) as RegExpMatchArray;
        this.name = titleMatch[2];

        // Author
        const nameMatch = (embed.author as EmbedAuthorData).name.match(ownerRegex) as RegExpMatchArray;
        this.owner = nameMatch[1];

        // Footer
        const footerMatch = (embed.footer as EmbedFooterData).text.match(FOOTER_REGEX) as RegExpMatchArray;
        this.image = {
            currentNumber: parseInt(titleMatch[1]),
            uploader: footerMatch[1],
            credit: footerMatch[2],
        };

        // General info
        const generalInfoMatch = embed.fields[0].value.match(GENERAL_INFO_REGEX) as RegExpMatchArray;
        this.uniqueId = parseInt(generalInfoMatch[1]);
        this.id = parseInt(generalInfoMatch[2]);

        // Rarity
        const rarityField = embed.fields[1];

        const rarityMatch = rarityField.value.match(RARITY_REGEX) as RegExpMatchArray;
        this.rarity = resolveRarity(rarityMatch[1]) ?? RarityConstants.ALPHA;

        const starMatch = rarityField.value.match(STAR_REGEX) as RegExpMatchArray;
        this.stars = starCount.get(starMatch[1]) ?? 0;

        const influenceMatch = rarityField.value.match(INFLUENCE_REGEX) as RegExpMatchArray;
        this.influenceRank = parseInt(influenceMatch[1]);
        this.influence = parseInt(influenceMatch[2]);

        // Series
        const mainSeriesMatch = embed.fields[2].value.match(MAIN_SERIES_REGEX) as RegExpMatchArray;
        this.series = {
            title: {
                english: mainSeriesMatch[1],
                alternate: mainSeriesMatch[2],
            },
            id: parseInt(mainSeriesMatch[3]),
            sequence: mainSeriesMatch[4],
        };
    }
}