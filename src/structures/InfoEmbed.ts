import type { EmbedField, MessageEmbed } from 'discord.js';
import type {
    Bounds, CharacterImageInfo,
    CharacterRarityInfo, CharacterRarityInfoCollection, CharacterSeriesInfo,
} from './types';

const GENERAL_INFO_REGEX = /\*\*Global ID:\*\* (\d+)\n\*\*Total Images:\*\* (\d+)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const INFLUENCE_REGEX = /\*\*(\d+)\*\*.+\n.+`#(\d+)`・`#(\d+)`/;
const COLLECTIONS_REGEX = /(\d+)・(\d+)/g;
const FOOTER_REGEX = /Image #(\d) - Uploaded by (.+)\nCredit: (.+)/;

/**
 * Represents an info embed from LaifuBot
 */
export class InfoEmbed {
    /**
     * Information of the character's image
     */
    image: CharacterImageInfo = {
        currentNumber: 0,
        uploader: '',
        credit: '',
    };

    /**
     * The name of the character
     */
    characterName = '';
    /**
     * The global ID of the character
     */
    globalId = 0;
    /**
     * The total number of images this character has
     */
    totalImages = 0;

    /**
     * Information of the character's series
     */
    series: CharacterSeriesInfo = {
        englishTitle: '',
        alternateTitle: '',
        id: 0,
        sequence: '',
    };

    /**
     * The influence of the character
     */
    influence = 0;
    /**
     * The influence range of this character
     */
    influenceRankRange: Bounds = { lower: 0, upper: 0 };

    /**
     * The rarity information of this character
     */
    rarities: CharacterRarityInfoCollection = {
        alpha: { existingAmount: 0, totalClaimed: 0 },
        beta: { existingAmount: 0, totalClaimed: 0 },
        gamma: { existingAmount: 0, totalClaimed: 0 },
        delta: { existingAmount: 0, totalClaimed: 0 },
        epsilon: { existingAmount: 0, totalClaimed: 0 },
        zeta: { existingAmount: 0, totalClaimed: 0 },
        ultra: { existingAmount: 0, totalClaimed: 0 },
    };

    constructor(embed: MessageEmbed) {
        if (embed.title) {
            this.characterName = embed.title;
        }

        if (embed.footer?.text) {
            this.parseFooter(embed.footer.text);
        }

        if (embed.fields[0]) {
            this.parseGeneralInfoField(embed.fields[0]);
        }

        if (embed.fields[1]) {
            this.parseMainSeriesField(embed.fields[1]);
        }

        if (embed.fields[2]) {
            this.parseInfluenceField(embed.fields[2]);
        }

        if (embed.fields[3]) {
            this.parseCollectionsField(embed.fields[3]);
        }
    }

    protected parseGeneralInfoField(field: EmbedField) {
        const generalInfoMatch = field.value.match(GENERAL_INFO_REGEX);
        if (generalInfoMatch) {
            this.globalId = parseInt(generalInfoMatch[1]);
            this.totalImages = parseInt(generalInfoMatch[2]);
        }
    }

    protected parseMainSeriesField(field: EmbedField) {
        const mainSeriesMatch = field.value.match(MAIN_SERIES_REGEX);
        if (mainSeriesMatch) {
            this.series.englishTitle = mainSeriesMatch[1];
            this.series.alternateTitle = mainSeriesMatch[2];
            this.series.id = parseInt(mainSeriesMatch[3]);
            this.series.sequence = mainSeriesMatch[4];
        }
    }

    protected parseInfluenceField(field: EmbedField) {
        const influenceMatch = field.value.match(INFLUENCE_REGEX);
        if (influenceMatch) {
            this.influence = parseInt(influenceMatch[1]);
            this.influenceRankRange = {
                lower: parseInt(influenceMatch[2]),
                upper: parseInt(influenceMatch[3]),
            };
        }
    }

    protected parseCollectionsField(field: EmbedField) {
        const it = field.value.matchAll(COLLECTIONS_REGEX);
        const stats: CharacterRarityInfo[] = [];

        for (let obj = it.next(); !obj.done; obj = it.next()) {
            stats.push({
                existingAmount: parseInt(obj.value[1]),
                totalClaimed: parseInt(obj.value[2]),
            });
        }

        this.rarities.alpha = stats[0];
        this.rarities.beta = stats[1];
        this.rarities.gamma = stats[2];
        this.rarities.delta = stats[3];
        this.rarities.epsilon = stats[4];
        this.rarities.zeta = stats[5];
        this.rarities.ultra = stats[6];
    }

    protected parseFooter(text: string) {
        const footerMatch = text.match(FOOTER_REGEX);
        if (footerMatch) {
            this.image.currentNumber = parseInt(footerMatch[1]);
            this.image.uploader = footerMatch[2];
            this.image.credit = footerMatch[3];
        }
    }
}
