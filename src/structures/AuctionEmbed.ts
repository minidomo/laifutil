import type { MessageEmbed } from 'discord.js';
import { Rarity, RARITY_REGEX, resolveRarity } from '../rarity';
import type { Bid, CharacterEmbed, Series } from '../types';

const DESCRIPTION_REGEX = /Name:\*\* (.+)\n.+ID:\*\* (\d+)\n.+#(\d)/;
const MAIN_SERIES_REGEX = /\*\*ENG:\*\* (.+)\n\*\*ALT:\*\* (.+)\n\*\*SID:\*\* (\d+) \| `(.+)`/;
const STAR_REGEX = /([★☆]+)/u;
const INFLUENCE_REGEX = /Influence `#(\d+)`・\*\*(\d+)\*\*/;
const BID_REGEX = /(.+) bid :dollar: \*\*\$\*\*([\d,]+)/gu;
const TIME_REGEX = /Ends In:\*\* (.+) Hours$/;

const starCount: Map<string, number> = new Map();
starCount.set('☆☆☆☆', 0).set('★☆☆☆', 1).set('★★☆☆', 2).set('★★★☆', 3).set('★★★★', 4);

/** Represents an auction embed from LaifuBot */
export class AuctionEmbed implements CharacterEmbed {
    /** The name of the character */
    name: string;
    /** The global ID of the character */
    globalId: number;
    /** The influence of the character */
    influence: number;
    /** The series of the character */
    series: Series;
    /** The image number of this character */
    imageNumber: number;
    /** The rarity of the character */
    rarity: Rarity;
    /** The number of stars the character has */
    stars: number;
    /** The influence rank of this character */
    influenceRank: number;
    /** The highest bid */
    highestBid?: Bid;
    /** The most recent bids (at most five bids) */
    auctionFeed: Bid[];
    /**
     * The amount of hours left for the auction. Is 0 if and only if auction ends in '< 1 Hours', otherwise it is set to
     * the number hours stated.
     */
    hoursLeft: number;

    constructor(embed: MessageEmbed) {
        const descriptionMatch = (embed.description as string).match(DESCRIPTION_REGEX) as RegExpMatchArray;
        this.name = descriptionMatch[1];
        this.globalId = parseInt(descriptionMatch[2]);
        this.imageNumber = parseInt(descriptionMatch[3]);

        const timeMatch = embed.fields[2].value.match(TIME_REGEX) as RegExpMatchArray;
        this.hoursLeft = /^\d+$/.test(timeMatch[1]) ? parseInt(timeMatch[1]) : 0;

        // Rarity
        const rarityField = embed.fields[1];

        const rarityMatch = rarityField.value.match(RARITY_REGEX) as RegExpMatchArray;
        this.rarity = resolveRarity(rarityMatch[1]) as Rarity;

        const starMatch = rarityField.value.match(STAR_REGEX) as RegExpMatchArray;
        this.stars = starCount.get(starMatch[1]) ?? 0;

        const influenceMatch = rarityField.value.match(INFLUENCE_REGEX) as RegExpMatchArray;
        this.influenceRank = parseInt(influenceMatch[1]);
        this.influence = parseInt(influenceMatch[2]);

        // Series
        const mainSeriesMatch = embed.fields[0].value.match(MAIN_SERIES_REGEX) as RegExpMatchArray;
        this.series = {
            title: {
                english: mainSeriesMatch[1],
                alternate: mainSeriesMatch[2],
            },
            id: parseInt(mainSeriesMatch[3]),
            sequence: mainSeriesMatch[4],
        };

        // Auction feed
        const it = embed.fields[3].value.matchAll(BID_REGEX);
        this.auctionFeed = [];

        for (let obj = it.next(); !obj.done; obj = it.next()) {
            this.auctionFeed.push({
                username: obj.value[1],
                amount: parseInt(obj.value[2].replaceAll(',', '')),
            });
        }

        if (this.auctionFeed.length) {
            this.highestBid = this.auctionFeed[0];
        }
    }
}
