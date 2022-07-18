import { assert } from 'chai';
import { WishlistListEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('WishlistListEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.wishlist.list);

    describe('#constructor', () => {
        it('should correctly parse a wishlist Discord embed from LaifuBot', () => {
            const parsedEmbed = new WishlistListEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.username, 'JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 1);
            assert.strictEqual(parsedEmbed.entities, 10);
            assert.strictEqual(parsedEmbed.characters.length, 10);
        });
    });
});
