import type { MessageEmbed } from 'discord.js';
import { findRarity, Rarity } from '../rarities';

const titleRegex = /^#(\d) (.+)/;
const footerRegex = /Uploaded by ([^\n]+)\nCredit: (.+)/;
const generalInfoRegex = /\*\*UID:\*\* (\d+) \| \*\*GID:\*\* (\d+)/;
const rarityRegex = /\| `(.+)`»`(....)`\nInfluence `#(\d+)`・\*\*(\d+)\*\*/;
const mainSeriesRegex = /\*\*ENG:\*\* ([^\n]+)\n\*\*ALT:\*\* ([^\n]+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const accountRegex = /\*\*x(\d)\*\*\n.+\*\*x(\d+)\*\*/;

function countStars(stars: string): number {
    const count = 0;
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] === '☆') {
            return count;
        }
    }
    return count;
}

interface GachaCharacterEmbedOptions {
    embed: MessageEmbed;
}

export class GachaCharacterEmbed {
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
    numStonesUsed: number | null = null;
    balance: number | null = null;

    constructor(data: GachaCharacterEmbedOptions) {
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
                this.imageUploader = footerParts[1];
                this.imageCredit = footerParts[2];
            }
        }

        if (data.embed.fields.length > 0) {
            const fields = data.embed.fields;

            const generalInfoParts = fields[0].value.match(generalInfoRegex);
            if (generalInfoParts) {
                this.uid = parseInt(generalInfoParts[1]);
                this.gid = parseInt(generalInfoParts[2]);
            }

            const rarityParts = fields[1].value.match(rarityRegex);
            if (rarityParts) {
                this.rarity = findRarity({ text: rarityParts[1] });
                this.stars = countStars(rarityParts[2]);
                this.influenceRank = parseInt(rarityParts[3]);
                this.influence = parseInt(rarityParts[4]);
            }

            const mainSeriesParts = fields[2].value.match(mainSeriesRegex);
            if (mainSeriesParts) {
                this.engSeries = mainSeriesParts[1];
                this.altSeries = mainSeriesParts[2];
                this.sid = parseInt(mainSeriesParts[3]);
                this.sequence = mainSeriesParts[4];
            }

            const accountParts = fields[3].value.match(accountRegex);
            if (accountParts) {
                this.numStonesUsed = parseInt(accountParts[1]);
                this.balance = parseInt(accountParts[2]);
            }
        }
    }
}
