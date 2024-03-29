import { assert } from 'chai';
import { BurnCharacterEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('BurnCharacterEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.burn.character);

    describe('#constructor', () => {
        it('should correctly parse a burn Discord embed of a normal card from LaifuBot', () => {
            const parsedEmbed = new BurnCharacterEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uniqueId, 8591);
            assert.strictEqual(parsedEmbed.globalId, 15013);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 166);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, 'ZETA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 11709);
            assert.strictEqual(parsedEmbed.influence, 40);
            assert.isUndefined(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, 'A Good Librarian Like a Good Shepherd');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Daitoshokan no Hitsujikai');
            assert.strictEqual(parsedEmbed.series.id, 1548);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'Official');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 72);
        });

        it('should correctly parse a burn Discord embed of a badged card from LaifuBot', () => {
            const parsedEmbed = new BurnCharacterEmbed(embedArr[1]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Ririka Momobami (桃喰 リリカ)');

            assert.strictEqual(parsedEmbed.uniqueId, 8364);
            assert.strictEqual(parsedEmbed.globalId, 1996);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 177);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-07');

            assert.strictEqual(parsedEmbed.rarity, 'ALPHA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 210);
            assert.strictEqual(parsedEmbed.influence, 928);
            assert.strictEqual(parsedEmbed.badgeId, 82);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, 'Kakegurui: Compulsive Gambler');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Kakegurui');
            assert.strictEqual(parsedEmbed.series.id, 151);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });

        it('should correctly parse a burn Discord embed of a badged, star enhanced card from LaifuBot', () => {
            const parsedEmbed = new BurnCharacterEmbed(embedArr[2]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 2);
            assert.strictEqual(parsedEmbed.name, 'Alice Zuberg (アリス・ツーベルク)');

            assert.strictEqual(parsedEmbed.uniqueId, 298);
            assert.strictEqual(parsedEmbed.globalId, 2230);
            assert.strictEqual(parsedEmbed.claimedBy, 'O2Linn');
            assert.strictEqual(parsedEmbed.age, 323);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-14');

            assert.strictEqual(parsedEmbed.rarity, 'ALPHA');
            assert.strictEqual(parsedEmbed.stars, 1);
            assert.strictEqual(parsedEmbed.rank, 143);
            assert.strictEqual(parsedEmbed.influence, 1044);
            assert.strictEqual(parsedEmbed.badgeId, 126);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.series.id, 73);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'chocobutternut');
            assert.strictEqual(parsedEmbed.image.credit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });

        it('should correctly parse a burn Discord embed of a card that does not have burn data from LaifuBot', () => {
            const parsedEmbed = new BurnCharacterEmbed(embedArr[3]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Mei Hiuchidani');

            assert.strictEqual(parsedEmbed.uniqueId, 342);
            assert.strictEqual(parsedEmbed.globalId, 15899);
            assert.strictEqual(parsedEmbed.claimedBy, 'comp');
            assert.strictEqual(parsedEmbed.age, 0);
            assert.strictEqual(parsedEmbed.dateClaimed, '2022-05-31');

            assert.strictEqual(parsedEmbed.rarity, 'ALPHA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 13929);
            assert.strictEqual(parsedEmbed.influence, 6);
            assert.isUndefined(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, "Cafe Stella and the Reapers' Butterflies");
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Cafe Stella to Shinigami no Chou');
            assert.strictEqual(parsedEmbed.series.id, 1723);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, '!zzdovad');
            assert.strictEqual(parsedEmbed.userId, '138414014303567872');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'Official');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 5);

            assert.isUndefined(parsedEmbed.burnPercentage);
        });
    });
});
