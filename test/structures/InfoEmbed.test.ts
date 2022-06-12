import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { InfoEmbed, CharacterRarityInfo } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

function makeRarityStats(existingAmount: number, totalClaimed: number): CharacterRarityInfo {
    return { existingAmount, totalClaimed };
}

describe('InfoEmbed', () => {
    const infoEmbedsArr = MEOArr(embeds.identifier.info);

    describe('#constructor', () => {
        it('should correctly parse an info Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(infoEmbedsArr[0]);
            const parsedEmbed = new InfoEmbed(embed);

            assert.strictEqual(parsedEmbed.characterName, 'Megumin (めぐみん)');

            assert.strictEqual(parsedEmbed.globalId, 1);
            assert.strictEqual(parsedEmbed.totalImages, 9);

            assert.strictEqual(parsedEmbed.series.englishTitle, 'KonoSuba: Gods Blessing on This Wonderful World!');
            assert.strictEqual(parsedEmbed.series.alternateTitle, 'Kono Subarashii Sekai ni Shukufuku wo!');
            assert.strictEqual(parsedEmbed.series.id, 47);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.influence, 1981);
            assert.deepEqual(parsedEmbed.influenceRankRange, { lower: 3, upper: 3 });

            assert.deepEqual(parsedEmbed.rarities.alpha, makeRarityStats(1132, 1188));
            assert.deepEqual(parsedEmbed.rarities.beta, makeRarityStats(130, 136));
            assert.deepEqual(parsedEmbed.rarities.gamma, makeRarityStats(101, 107));
            assert.deepEqual(parsedEmbed.rarities.delta, makeRarityStats(107, 110));
            assert.deepEqual(parsedEmbed.rarities.epsilon, makeRarityStats(13, 14));
            assert.deepEqual(parsedEmbed.rarities.zeta, makeRarityStats(8, 8));
            assert.deepEqual(parsedEmbed.rarities.ultra, makeRarityStats(2, 2));

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.image.uploader, '9𝔱𝔥Law †');
            assert.strictEqual(parsedEmbed.image.credit, 'KonoSuba: Fantastic Days! / Game');
        });
    });
});
