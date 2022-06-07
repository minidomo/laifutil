import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.drop', () => {
    describe('#isCodeEmbed', () => {
        it('should identify an embed as a drop code Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.code, identifiers.drop.isCodeEmbed);
        });
    });

    describe('#isOpenedEmbed', () => {
        it('should identify an embed as a drop opened Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.opened, identifiers.drop.isOpenedEmbed);
        });
    });

    describe('#isCooldownEmbed', () => {
        it('should identify an embed as a drop cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.cooldown, identifiers.drop.isCooldownEmbed);
        });
    });
});
