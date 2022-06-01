import type { MessageEmbed } from 'discord.js';
import { findRarity, Rarity } from '../rarities';

const titleRegex = /^#(\d) (.+)/;
const footerRegex = /(\d+) \/ 15\nUploaded by (.+)\nCredit: (.+)/;
const generalInfoRegex = new RegExp([
    /\*\*UID:\*\* (\d+) \| \*\*GID:\*\* (\d+)\n/,
    /\*\*Claimed By:\*\* (.+)\n/,
    /\*\*Age:\*\* ([\d-]+) \| `(\d+)`/,
].map(r => r.source).join(''));
const rarityRegex = new RegExp([
    /\| `(?:ɢʟɪᴛᴄʜᴇᴅ )?([^`]+)`»(?:`❦#(\d+)`»)?(?:`[𝐈𝐕]+`»)?`([☆★]+)`\n/,
    /Influence `#(\d+)`・\*\*(\d+)\*\*/,
].map(r => r.source).join(''));

const mainSeriesRegex = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const guideRegex = /(\d+)% of players/;

function countStars(stars: string): number {
    const count = 0;
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] === '☆') {
            return count;
        }
    }
    return count;
}

function hasBadge(embed: MessageEmbed): boolean {
    return embed.thumbnail !== null;
}

function isGlitched(embed: MessageEmbed): boolean {
    return embed.fields[1].value.includes('ɢʟɪᴛᴄʜᴇᴅ');
}

interface BurnEmbedOptions {
    embed: MessageEmbed;
}

export class BurnEmbed {
    cardNumber: number | null = null;
    characterName: string | null = null;

    uid: number | null = null;
    gid: number | null = null;
    claimedBy: string | null = null;
    age: number | null = null;
    dateClaimed: string | null = null;

    rarity: Rarity | null = null;
    stars: number | null = null;
    influenceRank: number | null = null;
    influence: number | null = null;
    badgeId: number | null = null;
    glitched = false;

    engSeries: string | null = null;
    altSeries: string | null = null;
    sid: number | null = null;
    sequence: string | null = null;

    owner: string | null = null;

    imageUploader: string | null = null;
    imageCredit: string | null = null;
    burnRewardCounter: number | null = null;

    burnPercentage: number | null = null;

    constructor(data: BurnEmbedOptions) {
        if (data.embed.title) {
            const titleParts = data.embed.title.match(titleRegex);
            if (titleParts) {
                this.cardNumber = parseInt(titleParts[1]);
                this.characterName = titleParts[2];
            }
        }

        if (data.embed.author) {
            this.owner = data.embed.author.name;
        }

        if (data.embed.footer) {
            const footerParts = data.embed.footer.text.match(footerRegex);
            if (footerParts) {
                this.burnRewardCounter = parseInt(footerParts[1]);
                this.imageUploader = footerParts[2];
                this.imageCredit = footerParts[3];
            }
        }

        if (data.embed.fields.length > 0) {
            const fields = data.embed.fields;

            const generalInfoParts = fields[0].value.match(generalInfoRegex);
            if (generalInfoParts) {
                this.uid = parseInt(generalInfoParts[1]);
                this.gid = parseInt(generalInfoParts[2]);
                this.claimedBy = generalInfoParts[3];
                this.dateClaimed = generalInfoParts[4];
                this.age = parseInt(generalInfoParts[5]);
            }

            const rarityParts = fields[1].value.match(rarityRegex);
            if (rarityParts) {
                this.glitched = isGlitched(data.embed);
                this.rarity = findRarity({ text: rarityParts[1] });
                if (hasBadge(data.embed)) {
                    this.badgeId = parseInt(rarityParts[2]);
                }
                this.stars = countStars(rarityParts[3]);
                this.influenceRank = parseInt(rarityParts[4]);
                this.influence = parseInt(rarityParts[5]);
            }

            const mainSeriesParts = fields[2].value.match(mainSeriesRegex);
            if (mainSeriesParts) {
                this.engSeries = mainSeriesParts[1];
                this.altSeries = mainSeriesParts[2];
                this.sid = parseInt(mainSeriesParts[3]);
                this.sequence = mainSeriesParts[4];
            }

            const guideParts = fields[3].value.match(guideRegex);
            if (guideParts) {
                this.burnPercentage = parseInt(guideParts[1]);
            }
        }
    }
}
