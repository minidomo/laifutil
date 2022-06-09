import type { EmbedField, MessageEmbed } from 'discord.js';
import type { CharacterImageInfo, CharacterSeriesInfo } from './types';
import { Rarity, RARITY_REGEX, resolveRarity } from '../rarity';

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
 * A basic implementation for character embeds with basic details
 */
export abstract class BaseSimpleCharacter {
    /**
     * The regular expression to obtain the owner of the character
     */
    protected abstract OWNER_REGEX: RegExp;

    /**
     * Information of the character's image
     */
    image: CharacterImageInfo = {};

    /**
     * The name of the character
     */
    characterName?: string;

    /**
     * The unique ID of the character
     */
    uniqueId?: number;
    /**
     * The global ID of the character
     */
    globalId?: number;

    /**
     * The rarity of the character
     */
    rarity?: Rarity;
    /**
     * The number of stars the character has
     */
    stars?: number;

    /**
     * The influence rank of this character
     */
    influenceRank?: number;
    /**
     * The influence of this character
     */
    influence?: number;

    /**
     * Information of the character's series
     */
    series: CharacterSeriesInfo = {};

    /**
     * The owner of this character
     */
    owner?: string;

    protected init(embed: MessageEmbed) {
        if (embed.title) {
            this.parseTitle(embed.title);
        }

        if (embed.author?.name) {
            this.parseOwner(embed.author.name);
        }

        if (embed.footer?.text) {
            this.parseFooter(embed.footer.text);
        }

        if (embed.fields[0]) {
            this.parseGeneralInfoField(embed.fields[0]);
        }

        if (embed.fields[1]) {
            this.parseRarityField(embed.fields[1]);
        }

        if (embed.fields[2]) {
            this.parseMainSeriesField(embed.fields[2]);
        }
    }

    protected parseTitle(title: string) {
        const titleMatch = title.match(TITLE_REGEX);
        if (titleMatch) {
            this.image.currentNumber = parseInt(titleMatch[1]);
            this.characterName = titleMatch[2];
        }
    }

    protected parseOwner(name: string) {
        const nameMatch = name.match(this.OWNER_REGEX);
        if (nameMatch) {
            this.owner = nameMatch[1];
        }
    }

    protected parseGeneralInfoField(field: EmbedField) {
        const generalInfoMatch = field.value.match(GENERAL_INFO_REGEX);
        if (generalInfoMatch) {
            this.uniqueId = parseInt(generalInfoMatch[1]);
            this.globalId = parseInt(generalInfoMatch[2]);
        }
    }

    protected parseRarityField(field: EmbedField) {
        const rarityMatch = field.value.match(RARITY_REGEX);
        if (rarityMatch) {
            this.rarity = resolveRarity(rarityMatch[1]) ?? undefined;
        }

        const starMatch = field.value.match(STAR_REGEX);
        if (starMatch) {
            this.stars = starCount.get(starMatch[1]);
        }

        const influenceMatch = field.value.match(INFLUENCE_REGEX);
        if (influenceMatch) {
            this.influenceRank = parseInt(influenceMatch[1]);
            this.influence = parseInt(influenceMatch[2]);
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

    protected parseFooter(text: string) {
        const footerMatch = text.match(FOOTER_REGEX);
        if (footerMatch) {
            this.image.uploader = footerMatch[1];
            this.image.credit = footerMatch[2];
        }
    }
}
