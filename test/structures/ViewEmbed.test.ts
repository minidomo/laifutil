/* eslint-disable max-len */

import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { ViewEmbed, RarityConstants } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('ViewEmbed', () => {
    const viewEmbedsArr = MEOArr(embeds.identifier.view);

    describe('#constructor', () => {
        it('should correctly parse a normal view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[0]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isUndefined(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uniqueId, 8591);
            assert.strictEqual(parsedEmbed.globalId, 15013);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 166);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.ZETA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 11709);
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
            assert.strictEqual(parsedEmbed.existingAmount, 7);
        });

        it('should correctly parse a badged view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[1]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isUndefined(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Ririka Momobami (桃喰 リリカ)');

            assert.strictEqual(parsedEmbed.uniqueId, 8364);
            assert.strictEqual(parsedEmbed.globalId, 1996);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 177);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-07');

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 210);
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
            assert.strictEqual(parsedEmbed.existingAmount, 1177);
        });

        it('should correctly parse a badged, star enhanced view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[2]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isUndefined(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.image.currentNumber, 2);
            assert.strictEqual(parsedEmbed.name, 'Alice Zuberg (アリス・ツーベルク)');

            assert.strictEqual(parsedEmbed.uniqueId, 298);
            assert.strictEqual(parsedEmbed.globalId, 2230);
            assert.strictEqual(parsedEmbed.claimedBy, 'O2Linn');
            assert.strictEqual(parsedEmbed.age, 323);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-14');

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 1);
            assert.strictEqual(parsedEmbed.influenceRank, 143);
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
            assert.strictEqual(parsedEmbed.existingAmount, 1187);
        });

        it('should correctly parse a badged, star enhanced, glitched, favorited view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[3]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.strictEqual(parsedEmbed.emoji, '🏮');
            assert.strictEqual(parsedEmbed.image.currentNumber, 4);
            assert.strictEqual(parsedEmbed.name, 'Satoru Gojou (五条 悟)');

            assert.strictEqual(parsedEmbed.uniqueId, 264);
            assert.strictEqual(parsedEmbed.globalId, 4652);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 321);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-16');

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.ULTRA);
            assert.strictEqual(parsedEmbed.stars, 4);
            assert.strictEqual(parsedEmbed.influenceRank, 4);
            assert.strictEqual(parsedEmbed.influence, 1897);
            assert.strictEqual(parsedEmbed.badgeId, 85);
            assert.isTrue(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, 'Jujutsu Kaisen');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Jujutsu Kaisen');
            assert.strictEqual(parsedEmbed.series.id, 351);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'JB');
            assert.strictEqual(parsedEmbed.image.credit, 'Anime');
            assert.strictEqual(parsedEmbed.existingAmount, 2);
        });

        it('should correctly parse a star enhanced, glitched, favorited, special view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[4]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.strictEqual(parsedEmbed.emoji, '💖');
            assert.strictEqual(parsedEmbed.image.currentNumber, 3);
            assert.strictEqual(parsedEmbed.name, 'Yukino Yukinoshita (雪ノ下 雪乃)');

            assert.strictEqual(parsedEmbed.uniqueId, 1);
            assert.strictEqual(parsedEmbed.globalId, 630);
            assert.strictEqual(parsedEmbed.claimedBy, '🚀 Onwards to 2022!');
            assert.strictEqual(parsedEmbed.age, 190);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-31');

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.SPECIAL);
            assert.strictEqual(parsedEmbed.stars, 4);
            assert.strictEqual(parsedEmbed.influenceRank, 68);
            assert.strictEqual(parsedEmbed.influence, 1154);
            assert.isUndefined(parsedEmbed.badgeId);
            assert.isTrue(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.series.title.english, 'My Teen Romantic Comedy SNAFU');
            assert.strictEqual(
                parsedEmbed.series.title.alternate,
                'Yahari Ore no Seishun Love Comedy wa Machigatteiru.',
            );
            assert.strictEqual(parsedEmbed.series.id, 56);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, '! JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'matsu△');
            assert.strictEqual(parsedEmbed.image.credit, 'Oregairu Official Art');
            assert.isUndefined(parsedEmbed.existingAmount);
        });
    });
});
