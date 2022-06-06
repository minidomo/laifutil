import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { InfoEmbed, RarityStats } from '../../dist';
import * as embeds from '../embeds.json';

function makeRarityStats(existing: number, totalExisted: number): RarityStats {
    return { existing, totalExisted };
}

describe('InfoEmbed', () => {
    const infoEmbedsArr = embeds.info;

    describe('#constructor', () => {
        it('should correctly parse an info Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(infoEmbedsArr[0]);
            const parsedEmbed = new InfoEmbed(embed);

            assert.strictEqual(parsedEmbed.characterName, 'Megumin (めぐみん)');

            assert.strictEqual(parsedEmbed.gid, 1);
            assert.strictEqual(parsedEmbed.images, 9);

            assert.strictEqual(parsedEmbed.engSeries, 'KonoSuba: Gods Blessing on This Wonderful World!');
            assert.strictEqual(parsedEmbed.altSeries, 'Kono Subarashii Sekai ni Shukufuku wo!');
            assert.strictEqual(parsedEmbed.sid, 47);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.influence, 1981);
            assert.deepEqual(parsedEmbed.influenceRankRange, { lower: 3, upper: 3 });

            assert.deepEqual(parsedEmbed.alphaStats, makeRarityStats(1132, 1188));
            assert.deepEqual(parsedEmbed.betaStats, makeRarityStats(130, 136));
            assert.deepEqual(parsedEmbed.gammaStats, makeRarityStats(101, 107));
            assert.deepEqual(parsedEmbed.deltaStats, makeRarityStats(107, 110));
            assert.deepEqual(parsedEmbed.epsilonStats, makeRarityStats(13, 14));
            assert.deepEqual(parsedEmbed.zetaStats, makeRarityStats(8, 8));
            assert.deepEqual(parsedEmbed.ultraStats, makeRarityStats(2, 2));

            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.imageUploader, '9𝔱𝔥Law †');
            assert.strictEqual(parsedEmbed.imageCredit, 'KonoSuba: Fantastic Days! / Game');
        });
    });
});
