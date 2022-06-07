import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.favorite', () => {
    describe('#isAddEmbed', () => {
        it('should identify an embed as a favorite add Discord embed from LaifuBot', () => {
            test(embeds.identifier.favorite.add, identifiers.favorite.isAddEmbed);
        });
    });

    describe('#isRemoveEmbed', () => {
        it('should identify an embed as a favorite remove Discord embed from LaifuBot', () => {
            test(embeds.identifier.favorite.remove, identifiers.favorite.isRemoveEmbed);
        });
    });
});
