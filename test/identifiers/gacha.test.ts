import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.gacha', () => {
    describe('#isCharacterEmbed', () => {
        it('should identify an embed as a gacha character Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.character, identifiers.gacha.isCharacterEmbed);
        });
    });

    describe('#isBadgeEmbed', () => {
        it('should identify an embed as a gacha badge Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.badge, identifiers.gacha.isBadgeEmbed);
        });
    });

    describe('#isLoadingEmbed', () => {
        it('should identify an embed as a gacha loading Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.loading, identifiers.gacha.isLoadingEmbed);
        });
    });

    describe('.medalDrop', () => {
        describe('#isActiveEmbed', () => {
            it('should identify an embed as an active medal drop Discord embed from LaifuBot', () => {
                test(embeds.identifier.gacha.medalDrop.active, identifiers.gacha.medalDrop.isActiveEmbed);
            });
        });

        describe('#isClosedEmbed', () => {
            it('should identify an embed as a closed medal drop Discord embed from LaifuBot', () => {
                test(embeds.identifier.gacha.medalDrop.closed, identifiers.gacha.medalDrop.isClosedEmbed);
            });
        });
    });
});
