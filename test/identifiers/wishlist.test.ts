import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.wishlist', () => {
    describe('#isListEmbed', () => {
        it('should identify an embed as a wishlist list Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.list, identifiers.wishlist.isListEmbed);
        });
    });

    describe('#isAddEmbed', () => {
        it('should identify an embed as a wishlist add Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.add, identifiers.wishlist.isAddEmbed);
        });
    });

    describe('#isRemoveEmbed', () => {
        it('should identify an embed as a wishlist remove Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.remove, identifiers.wishlist.isRemoveEmbed);
        });
    });
});
