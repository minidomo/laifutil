import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { GachaCharacterEmbed, RarityConstants } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('GachaCharacterEmbed', () => {
    const gachaCharacterEmbedsArr = MEOArr(embeds.identifier.gacha.character);

    describe('#constructor', () => {
        it('should correctly parse a gacha character Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(gachaCharacterEmbedsArr[0]);
            const parsedEmbed = new GachaCharacterEmbed(embed);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uniqueId, 5070);
            assert.strictEqual(parsedEmbed.id, 11169);

            assert.strictEqual(parsedEmbed.rarity, RarityConstants.GAMMA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 14558);
            assert.strictEqual(parsedEmbed.influence, 15);

            assert.strictEqual(parsedEmbed.series.title.english, 'Please Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Onegai Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.id, 1158);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'MyAnimeList');

            assert.strictEqual(parsedEmbed.stonesUsed, 5);
            assert.strictEqual(parsedEmbed.balance, 245);
        });
    });
});
