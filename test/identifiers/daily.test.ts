import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.daily', () => {
    describe('#isClaimedEmbed', () => {
        it('should identify an embed as a daily claimed Discord embed from LaifuBot', () => {
            test(embeds.identifier.daily.claimed, identifiers.daily.isClaimedEmbed);
        });
    });

    describe('#isCooldownEmbed', () => {
        it('should identify an embed as a daily cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.daily.cooldown, identifiers.daily.isCooldownEmbed);
        });
    });
});
