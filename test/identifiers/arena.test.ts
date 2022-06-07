import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('arena', () => {
    describe('#isInitialEmbed', () => {
        it('should identify an embed as an arena initial Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.initial, identifiers.arena.isInitialEmbed);
        });
    });

    describe('#isResultEmbed', () => {
        it('should identify an embed as an arena result Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.result, identifiers.arena.isResultEmbed);
        });
    });

    describe('#isLoadingEmbed', () => {
        it('should identify an embed as an arena loading Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.loading, identifiers.arena.isLoadingEmbed);
        });
    });
});
