import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('blu', () => {
    describe('#isMenuEmbed', () => {
        it('should identify an embed as a blu menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.blu.menu, identifiers.blu.isMenuEmbed);
        });
    });

    describe('#isInfoEmbed', () => {
        it('should identify an embed as a blu info Discord embed from LaifuBot', () => {
            test(embeds.identifier.blu.info, identifiers.blu.isInfoEmbed);
        });
    });
});
