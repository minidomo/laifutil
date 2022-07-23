import { assert } from 'chai';
import { CluSearchEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('CluSearchEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.clu.search);

    describe('#constructor', () => {
        it('should correctly parse a clu series search Discord embed from LaifuBot', () => {
            const parsedEmbed = new CluSearchEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.nickname, '! JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 2);
            assert.strictEqual(parsedEmbed.entities, 21);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });

        it('should correctly parse a clu name search Discord embed from LaifuBot', () => {
            const parsedEmbed = new CluSearchEmbed(embedArr[1]);

            assert.strictEqual(parsedEmbed.nickname, '! JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 2);
            assert.strictEqual(parsedEmbed.entities, 26);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });
    });
});
