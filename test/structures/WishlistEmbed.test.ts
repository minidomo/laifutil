import { MessageEmbed } from 'Discord.js';
import { assert } from 'chai';
import { WishlistListEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('WishlistListEmbed', () => {
    const wishlistEmbedsArr = MEOArr(embeds.identifier.wishlist.list);

    describe('#constructor', () => {
        it('should correctly parse a wishlist Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(wishlistEmbedsArr[0]);
            const parsedEmbed = new WishlistListEmbed(embed);

            assert.strictEqual(parsedEmbed.username, 'JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 1);
            assert.strictEqual(parsedEmbed.entities, 10);
            assert.strictEqual(parsedEmbed.characters.length, 10);
        });
    });
});
