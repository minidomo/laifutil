import type { EmbedFooterData, MessageEmbed } from 'discord.js';
import type {
    Bounds,
    CharacterEmbed,
    ImageInfo,
    RarityStatistics,
    RarityStatisticsCollection,
    Series,
} from '../types';

const GENERAL_INFO_REGEX = /\*\*Global ID:\*\* (\d+)\n\*\*Total Images:\*\* (\d+)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const INFLUENCE_REGEX = /\*\*(\d+)\*\*.+\n.+`#(\d+)`・`#(\d+)`/;
const COLLECTIONS_REGEX = /(\d+)・(\d+)/g;
const FOOTER_REGEX = /Image #(\d) - Uploaded by (.+)\nCredit: (.+)/;

/**
 * Represents an info embed from LaifuBot
 */
export class InfoEmbed implements CharacterEmbed {
    /**
     * The name of the character
     */
    name: string;
    /**
     * The global ID of the character
     */
    globalId: number;
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
     * The total number of images this character has
     */
    totalImages: number;
    /**
     * The influence range of this character
     */
    influenceRankRange: Bounds;
    /**
     * The rarity information of this character
     */
    rarities: RarityStatisticsCollection;

    constructor(embed: MessageEmbed) {
        this.name = embed.title as string;

        // Footer
        const footerMatch = (embed.footer as EmbedFooterData).text.match(FOOTER_REGEX) as RegExpMatchArray;
        this.image = {
            currentNumber: parseInt(footerMatch[1]),
            uploader: footerMatch[2],
            credit: footerMatch[3],
        };

        // General info
        const generalInfoMatch = embed.fields[0].value.match(GENERAL_INFO_REGEX) as RegExpMatchArray;
        this.globalId = parseInt(generalInfoMatch[1]);
        this.totalImages = parseInt(generalInfoMatch[2]);

        // Main series
        const mainSeriesMatch = embed.fields[1].value.match(MAIN_SERIES_REGEX) as RegExpMatchArray;
        this.series = {
            title: {
                english: mainSeriesMatch[1],
                alternate: mainSeriesMatch[2],
            },
            id: parseInt(mainSeriesMatch[3]),
            sequence: mainSeriesMatch[4],
        };

        // Influence
        const influenceMatch = embed.fields[2].value.match(INFLUENCE_REGEX) as RegExpMatchArray;
        this.influence = parseInt(influenceMatch[1]);

        const firstRank = parseInt(influenceMatch[2]);
        const secondRank = parseInt(influenceMatch[3]);
        this.influenceRankRange = {
            lower: Math.min(firstRank, secondRank),
            upper: Math.max(firstRank, secondRank),
        };

        // Collections
        const it = embed.fields[3].value.matchAll(COLLECTIONS_REGEX);
        const stats: RarityStatistics[] = [];

        for (let obj = it.next(); !obj.done; obj = it.next()) {
            stats.push({
                existingAmount: parseInt(obj.value[1]),
                totalClaimed: parseInt(obj.value[2]),
            });
        }

        this.rarities = {
            alpha: stats[0],
            beta: stats[1],
            gamma: stats[2],
            delta: stats[3],
            epsilon: stats[4],
            zeta: stats[5],
            ultra: stats[6],
        };
    }
}
