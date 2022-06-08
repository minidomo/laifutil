import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { BurnEmbed, rarity } from '../../dist';
import * as embeds from '../embeds.json';

describe('BurnEmbed', () => {
    const burnEmbedsArr = embeds.identifier.burn.character;

    describe('#constructor', () => {
        it('should correctly parse a burn Discord embed of a normal card from LaifuBot', () => {
            const embed = new MessageEmbed(burnEmbedsArr[0]);
            const parsedEmbed = new BurnEmbed(embed);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uniqueId, 8591);
            assert.strictEqual(parsedEmbed.globalId, 15013);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 166);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, rarity.constants.ZETA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 11709);
            assert.strictEqual(parsedEmbed.influence, 40);
            assert.isUndefined(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.englishTitle, 'A Good Librarian Like a Good Shepherd');
            assert.strictEqual(parsedEmbed.series.alternateTitle, 'Daitoshokan no Hitsujikai');
            assert.strictEqual(parsedEmbed.series.id, 1548);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'Official');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 72);
        });

        it('should correctly parse a burn Discord embed of a badged card from LaifuBot', () => {
            const embed = new MessageEmbed(burnEmbedsArr[1]);
            const parsedEmbed = new BurnEmbed(embed);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Ririka Momobami (桃喰 リリカ)');

            assert.strictEqual(parsedEmbed.uniqueId, 8364);
            assert.strictEqual(parsedEmbed.globalId, 1996);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 177);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-07');

            assert.strictEqual(parsedEmbed.rarity, rarity.constants.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 210);
            assert.strictEqual(parsedEmbed.influence, 928);
            assert.strictEqual(parsedEmbed.badgeId, 82);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.englishTitle, 'Kakegurui: Compulsive Gambler');
            assert.strictEqual(parsedEmbed.series.alternateTitle, 'Kakegurui');
            assert.strictEqual(parsedEmbed.series.id, 151);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });

        it('should correctly parse a burn Discord embed of a badged, star enhanced card from LaifuBot', () => {
            const embed = new MessageEmbed(burnEmbedsArr[2]);
            const parsedEmbed = new BurnEmbed(embed);

            assert.strictEqual(parsedEmbed.image.currentNumber, 2);
            assert.strictEqual(parsedEmbed.characterName, 'Alice Zuberg (アリス・ツーベルク)');

            assert.strictEqual(parsedEmbed.uniqueId, 298);
            assert.strictEqual(parsedEmbed.globalId, 2230);
            assert.strictEqual(parsedEmbed.claimedBy, 'O2Linn');
            assert.strictEqual(parsedEmbed.age, 323);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-14');

            assert.strictEqual(parsedEmbed.rarity, rarity.constants.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 1);
            assert.strictEqual(parsedEmbed.influenceRank, 143);
            assert.strictEqual(parsedEmbed.influence, 1044);
            assert.strictEqual(parsedEmbed.badgeId, 126);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.englishTitle, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.series.alternateTitle, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.series.id, 73);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.image.uploader, 'chocobutternut');
            assert.strictEqual(parsedEmbed.image.credit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });
    });
});
