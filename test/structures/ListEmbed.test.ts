import { assert } from 'chai';
import { ListEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('ListEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.list);

    describe('#constructor', () => {
        it('should correctly parse a simple list Discord embed from LaifuBot', () => {
            const parsedEmbed = new ListEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.nickname, 'JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 374);
            assert.strictEqual(parsedEmbed.entities, 7477);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });

        it('should correctly parse a complex list Discord embed from LaifuBot', () => {
            const parsedEmbed = new ListEmbed(embedArr[1]);

            assert.strictEqual(parsedEmbed.nickname, '! JB');
            assert.strictEqual(parsedEmbed.currentPage, 35);
            assert.strictEqual(parsedEmbed.pages, 374);
            assert.strictEqual(parsedEmbed.entities, 7479);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });
    });
});
