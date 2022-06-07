import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { ViewEmbed, Rarity } from '../../dist';
import * as embeds from '../embeds.json';

describe('ViewEmbed', () => {
    const viewEmbedsArr = embeds.identifier.view;

    describe('#constructor', () => {
        it('should correctly parse a normal view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[0]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isNull(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uid, 8591);
            assert.strictEqual(parsedEmbed.gid, 15013);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 166);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, Rarity.CONSTANTS.ZETA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 11709);
            assert.strictEqual(parsedEmbed.influence, 40);
            assert.isNull(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'A Good Librarian Like a Good Shepherd');
            assert.strictEqual(parsedEmbed.altSeries, 'Daitoshokan no Hitsujikai');
            assert.strictEqual(parsedEmbed.sid, 1548);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official');
            assert.strictEqual(parsedEmbed.numExisting, 7);
        });

        it('should correctly parse a badged view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[1]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isNull(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Ririka Momobami (桃喰 リリカ)');

            assert.strictEqual(parsedEmbed.uid, 8364);
            assert.strictEqual(parsedEmbed.gid, 1996);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB');
            assert.strictEqual(parsedEmbed.age, 177);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-07');

            assert.strictEqual(parsedEmbed.rarity, Rarity.CONSTANTS.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 210);
            assert.strictEqual(parsedEmbed.influence, 928);
            assert.strictEqual(parsedEmbed.badgeId, 82);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'Kakegurui: Compulsive Gambler');
            assert.strictEqual(parsedEmbed.altSeries, 'Kakegurui');
            assert.strictEqual(parsedEmbed.sid, 151);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official Art');
            assert.strictEqual(parsedEmbed.numExisting, 1177);
        });

        it('should correctly parse a badged, star enhanced view Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(viewEmbedsArr[2]);
            const parsedEmbed = new ViewEmbed(embed);

            assert.isNull(parsedEmbed.emoji);
            assert.strictEqual(parsedEmbed.imageNumber, 2);
            assert.strictEqual(parsedEmbed.characterName, 'Alice Zuberg (アリス・ツーベルク)');

            assert.strictEqual(parsedEmbed.uid, 298);
            assert.strictEqual(parsedEmbed.gid, 2230);
            assert.strictEqual(parsedEmbed.claimedBy, 'O2Linn');
            assert.strictEqual(parsedEmbed.age, 323);
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-14');

            assert.strictEqual(parsedEmbed.rarity, Rarity.CONSTANTS.ALPHA);
            assert.strictEqual(parsedEmbed.stars, 1);
            assert.strictEqual(parsedEmbed.influenceRank, 143);
            assert.strictEqual(parsedEmbed.influence, 1044);
            assert.strictEqual(parsedEmbed.badgeId, 126);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.altSeries, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.sid, 73);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'chocobutternut');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official Art');
            assert.strictEqual(parsedEmbed.numExisting, 1187);
        });

        it('should correctly parse a badged, star enhanced, glitched, favorited view '
            + 'Discord embed from LaifuBot', () => {
                const embed = new MessageEmbed(viewEmbedsArr[3]);
                const parsedEmbed = new ViewEmbed(embed);

                assert.strictEqual(parsedEmbed.emoji, '🏮');
                assert.strictEqual(parsedEmbed.imageNumber, 4);
                assert.strictEqual(parsedEmbed.characterName, 'Satoru Gojou (五条 悟)');

                assert.strictEqual(parsedEmbed.uid, 264);
                assert.strictEqual(parsedEmbed.gid, 4652);
                assert.strictEqual(parsedEmbed.claimedBy, 'JB');
                assert.strictEqual(parsedEmbed.age, 321);
                assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-16');

                assert.strictEqual(parsedEmbed.rarity, Rarity.CONSTANTS.ULTRA);
                assert.strictEqual(parsedEmbed.stars, 4);
                assert.strictEqual(parsedEmbed.influenceRank, 4);
                assert.strictEqual(parsedEmbed.influence, 1897);
                assert.strictEqual(parsedEmbed.badgeId, 85);
                assert.isTrue(parsedEmbed.glitched);

                assert.strictEqual(parsedEmbed.engSeries, 'Jujutsu Kaisen');
                assert.strictEqual(parsedEmbed.altSeries, 'Jujutsu Kaisen');
                assert.strictEqual(parsedEmbed.sid, 351);
                assert.strictEqual(parsedEmbed.sequence, 'MAIN');

                assert.strictEqual(parsedEmbed.owner, 'JB');

                assert.strictEqual(parsedEmbed.imageUploader, 'JB');
                assert.strictEqual(parsedEmbed.imageCredit, 'Anime');
                assert.strictEqual(parsedEmbed.numExisting, 2);
            });
    });
});
