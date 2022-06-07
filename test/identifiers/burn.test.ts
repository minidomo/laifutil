import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.burn', () => {
    describe('#isCharacterEmbed', () => {
        it('should identify an embed as a burn character Discord embed from LaifuBot', () => {
            test(embeds.identifier.burn.character, identifiers.burn.isCharacterEmbed);
        });
    });

    describe('#isRewardEmbed', () => {
        it('should identify an embed as a burn reward Discord embed from LaifuBot', () => {
            test(embeds.identifier.burn.reward, identifiers.burn.isRewardEmbed);
        });
    });
});
