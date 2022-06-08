import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { GachaCharacterEmbed, rarity } from '../../dist';
import * as embeds from '../embeds.json';

describe('GachaCharacterEmbed', () => {
    const gachaCharacterEmbedsArr = embeds.identifier.gacha.character;

    describe('#constructor', () => {
        it('should correctly parse a gacha character Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(gachaCharacterEmbedsArr[0]);
            const parsedEmbed = new GachaCharacterEmbed(embed);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uniqueId, 5070);
            assert.strictEqual(parsedEmbed.globalId, 11169);

            assert.strictEqual(parsedEmbed.rarity, rarity.constants.GAMMA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 14558);
            assert.strictEqual(parsedEmbed.influence, 15);

            assert.strictEqual(parsedEmbed.series.englishTitle, 'Please Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.alternateTitle, 'Onegai Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.id, 1158);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'MyAnimeList');

            assert.strictEqual(parsedEmbed.numStonesUsed, 5);
            assert.strictEqual(parsedEmbed.balance, 245);
        });
    });
});
