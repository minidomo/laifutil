import { assert } from 'chai';
import { GachaCharacterEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('GachaCharacterEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.gacha.character);

    describe('#constructor', () => {
        it('should correctly parse a gacha character Discord embed from LaifuBot', () => {
            const parsedEmbed = new GachaCharacterEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uniqueId, 5070);
            assert.strictEqual(parsedEmbed.globalId, 11169);

            assert.strictEqual(parsedEmbed.rarity, 'GAMMA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 14558);
            assert.strictEqual(parsedEmbed.influence, 15);

            assert.strictEqual(parsedEmbed.series.title.english, 'Please Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Onegai Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.id, 1158);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'MyAnimeList');

            assert.strictEqual(parsedEmbed.stonesUsed, 5);
            assert.strictEqual(parsedEmbed.balance, 245);
        });

        it('should correctly parse a gacha character Discord embed from LaifuBot with default avatar', () => {
            const parsedEmbed = new GachaCharacterEmbed(embedArr[1]);

            assert.strictEqual(parsedEmbed.image.currentNumber, 1);
            assert.strictEqual(parsedEmbed.name, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uniqueId, 5070);
            assert.strictEqual(parsedEmbed.globalId, 11169);

            assert.strictEqual(parsedEmbed.rarity, 'GAMMA');
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.rank, 14558);
            assert.strictEqual(parsedEmbed.influence, 15);

            assert.strictEqual(parsedEmbed.series.title.english, 'Please Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.title.alternate, 'Onegai Twins/Teacher');
            assert.strictEqual(parsedEmbed.series.id, 1158);
            assert.strictEqual(parsedEmbed.series.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');
            assert.isUndefined(parsedEmbed.userId);

            assert.strictEqual(parsedEmbed.image.uploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.image.credit, 'MyAnimeList');

            assert.strictEqual(parsedEmbed.stonesUsed, 5);
            assert.strictEqual(parsedEmbed.balance, 245);
        });
    });
});
