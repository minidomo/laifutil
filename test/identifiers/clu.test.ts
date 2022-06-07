import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.clu', () => {
    describe('#isSearchEmbed', () => {
        it('should identify an embed as a clu search Discord embed from LaifuBot', () => {
            test(embeds.identifier.clu.search, identifiers.clu.isSearchEmbed);
        });
    });

    describe('#isErrorEmbed', () => {
        it('should identify an embed as a clu error Discord embed from LaifuBot', () => {
            test(embeds.identifier.clu.error, identifiers.clu.isErrorEmbed);
        });
    });
});
