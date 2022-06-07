import type { EmbedField, MessageEmbed } from 'discord.js';

const GENERAL_INFO_REGEX = /\*\*Global ID:\*\* (\d+)\n\*\*Total Images:\*\* (\d+)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const INFLUENCE_REGEX = /\*\*(\d+)\*\*.+\n.+`#(\d+)`・`#(\d+)`/;
const COLLECTIONS_REGEX = /(\d+)・(\d+)/g;
const FOOTER_REGEX = /Image #(\d) - Uploaded by (.+)\nCredit: (.+)/;

export interface Bounds {
    lower: number;
    upper: number;
}

export interface RarityStats {
    existing: number;
    totalExisted: number;
}

export class InfoEmbed {
    characterName: string | null = null;

    gid: number | null = null;
    images: number | null = null;

    engSeries: string | null = null;
    altSeries: string | null = null;
    sid: number | null = null;
    sequence: string | null = null;

    influence: number | null = null;
    influenceRankRange: Bounds | null = null;

    alphaStats: RarityStats | null = null;
    betaStats: RarityStats | null = null;
    gammaStats: RarityStats | null = null;
    deltaStats: RarityStats | null = null;
    epsilonStats: RarityStats | null = null;
    zetaStats: RarityStats | null = null;
    ultraStats: RarityStats | null = null;

    imageNumber: number | null = null;
    imageUploader: string | null = null;
    imageCredit: string | null = null;

    constructor(embed: MessageEmbed) {
        this.characterName = embed.title;

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
            this.gid = parseInt(generalInfoMatch[1]);
            this.images = parseInt(generalInfoMatch[2]);
        }
    }

    protected parseMainSeriesField(field: EmbedField) {
        const mainSeriesMatch = field.value.match(MAIN_SERIES_REGEX);
        if (mainSeriesMatch) {
            this.engSeries = mainSeriesMatch[1];
            this.altSeries = mainSeriesMatch[2];
            this.sid = parseInt(mainSeriesMatch[3]);
            this.sequence = mainSeriesMatch[4];
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
        const stats: RarityStats[] = [];

        for (let obj = it.next(); !obj.done; obj = it.next()) {
            stats.push({
                existing: parseInt(obj.value[1]),
                totalExisted: parseInt(obj.value[2]),
            });
        }

        this.alphaStats = stats[0];
        this.betaStats = stats[1];
        this.gammaStats = stats[2];
        this.deltaStats = stats[3];
        this.epsilonStats = stats[4];
        this.zetaStats = stats[5];
        this.ultraStats = stats[6];
    }

    protected parseFooter(text: string) {
        const footerMatch = text.match(FOOTER_REGEX);
        if (footerMatch) {
            this.imageNumber = parseInt(footerMatch[1]);
            this.imageUploader = footerMatch[2];
            this.imageCredit = footerMatch[3];
        }
    }
}
