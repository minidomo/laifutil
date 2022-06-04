import type { EmbedField, MessageEmbed } from 'discord.js';
import { Rarity, REGEX, resolve } from '../rarity';

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

export abstract class BaseSimpleCharacter {
    protected abstract OWNER_REGEX: RegExp;

    cardNumber: number | null = null;
    characterName: string | null = null;

    uid: number | null = null;
    gid: number | null = null;

    rarity: Rarity | null = null;
    stars: number | null = null;
    influenceRank: number | null = null;
    influence: number | null = null;

    engSeries: string | null = null;
    altSeries: string | null = null;
    sid: number | null = null;
    sequence: string | null = null;

    owner: string | null = null;

    imageUploader: string | null = null;
    imageCredit: string | null = null;

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
            this.cardNumber = parseInt(titleMatch[1]);
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
            this.uid = parseInt(generalInfoMatch[1]);
            this.gid = parseInt(generalInfoMatch[2]);
        }
    }

    protected parseRarityField(field: EmbedField) {
        const rarityMatch = field.value.match(REGEX);
        if (rarityMatch) {
            this.rarity = resolve(rarityMatch[1]);
        }

        const starMatch = field.value.match(STAR_REGEX);
        if (starMatch) {
            this.stars = starCount.get(starMatch[1]) ?? null;
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
            this.engSeries = mainSeriesMatch[1];
            this.altSeries = mainSeriesMatch[2];
            this.sid = parseInt(mainSeriesMatch[3]);
            this.sequence = mainSeriesMatch[4];
        }
    }

    protected parseFooter(text: string) {
        const footerMatch = text.match(FOOTER_REGEX);
        if (footerMatch) {
            this.imageUploader = footerMatch[1];
            this.imageCredit = footerMatch[2];
        }
    }
}
