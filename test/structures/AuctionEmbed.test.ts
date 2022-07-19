import { assert } from 'chai';
import { AuctionEmbed, Bid } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

function makeBid(username: string, amount: number): Bid {
    return { username, amount };
}

describe('AuctionEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.auction);

    describe('#constructor', () => {
        it('should correctly parse an auction Discord embed from LaifuBot', () => {
            const parsedEmbed = new AuctionEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.name, 'Jill (ジル)');
            assert.strictEqual(parsedEmbed.globalId, 5207);
            assert.strictEqual(parsedEmbed.influence, 58);
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Deca-Dence');
            assert.strictEqual(parsedEmbed.series.title.english, 'Deca-Dence');
            assert.strictEqual(parsedEmbed.series.id, 408);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');
            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.rarity, 'ZETA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 10890);
            assert.strictEqual(parsedEmbed.hoursLeft, 15);

            assert.deepEqual(parsedEmbed.highestBid, makeBid('Preguntín', 2_855_000));
            assert.strictEqual(parsedEmbed.auctionFeed.length, 5);
            assert.deepEqual(parsedEmbed.auctionFeed[0], makeBid('Preguntín', 2_855_000));
            assert.deepEqual(parsedEmbed.auctionFeed[1], makeBid('✰898รoรⱥᴍⱥfiⱥ✰', 2_854_000));
            assert.deepEqual(parsedEmbed.auctionFeed[2], makeBid('Preguntín', 2_853_000));
            assert.deepEqual(parsedEmbed.auctionFeed[3], makeBid('gastom ♡', 2_852_000));
            assert.deepEqual(parsedEmbed.auctionFeed[4], makeBid('Preguntín', 2_851_000));
        });

        it('should correctly parse an auction Discord embed from LaifuBot with less than an hour left', () => {
            const parsedEmbed = new AuctionEmbed(embedArr[1]);

            assert.strictEqual(parsedEmbed.name, 'Big the Cat (ビッグ・ザ・キャット)');
            assert.strictEqual(parsedEmbed.globalId, 11580);
            assert.strictEqual(parsedEmbed.influence, 174);
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Sonic the Hedgehog');
            assert.strictEqual(parsedEmbed.series.title.english, 'Sonic the Hedgehog');
            assert.strictEqual(parsedEmbed.series.id, 748);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');
            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.rarity, 'ZETA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 6803);
            assert.strictEqual(parsedEmbed.hoursLeft, 0);

            assert.deepEqual(parsedEmbed.highestBid, makeBid('ChickpeaKryoz', 25_165_000));
            assert.strictEqual(parsedEmbed.auctionFeed.length, 5);
            assert.deepEqual(parsedEmbed.auctionFeed[0], makeBid('ChickpeaKryoz', 25_165_000));
            assert.deepEqual(parsedEmbed.auctionFeed[1], makeBid('ChickpeaKryoz', 25_164_000));
            assert.deepEqual(parsedEmbed.auctionFeed[2], makeBid('Yellow Cedar', 25_163_000));
            assert.deepEqual(parsedEmbed.auctionFeed[3], makeBid('100k…here I come', 25_138_000));
            assert.deepEqual(parsedEmbed.auctionFeed[4], makeBid('mads', 25_137_000));
        });

        it('should correctly parse an auction Discord embed from LaifuBot with zero bids', () => {
            const parsedEmbed = new AuctionEmbed(embedArr[2]);

            assert.strictEqual(parsedEmbed.name, 'Big the Cat (ビッグ・ザ・キャット)');
            assert.strictEqual(parsedEmbed.globalId, 11580);
            assert.strictEqual(parsedEmbed.influence, 174);
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Sonic the Hedgehog');
            assert.strictEqual(parsedEmbed.series.title.english, 'Sonic the Hedgehog');
            assert.strictEqual(parsedEmbed.series.id, 748);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');
            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.rarity, 'ZETA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 6803);
            assert.strictEqual(parsedEmbed.hoursLeft, 15);

            assert.isUndefined(parsedEmbed.highestBid);
            assert.strictEqual(parsedEmbed.auctionFeed.length, 0);
        });
    });
});
