import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('identifiers', () => {
    describe('#isViewEmbed', () => {
        it('should identify an embed as a view Discord embed from LaifuBot', () => {
            test(embeds.identifier.view, identifiers.isViewEmbed);
        });
    });

    describe('#isAuctionEmbed', () => {
        it('should identify an embed as an auction Discord embed from LaifuBot', () => {
            test(embeds.identifier.auction, identifiers.isAuctionEmbed);
        });
    });

    describe('#isInfoEmbed', () => {
        it('should identify an embed as an info Discord embed from LaifuBot', () => {
            test(embeds.identifier.info, identifiers.isInfoEmbed);
        });
    });

    describe('#isBadgePreviewEmbed', () => {
        it('should identify an embed as a badge preview Discord embed from LaifuBot', () => {
            test(embeds.identifier.badgePreview, identifiers.isBadgePreviewEmbed);
        });
    });

    describe('#isRewardBoxEmbed', () => {
        it('should identify an embed as a reward box Discord embed from LaifuBot', () => {
            test(embeds.identifier.rewardBox, identifiers.isRewardBoxEmbed);
        });
    });

    describe('#isCdEmbed', () => {
        it('should identify an embed as a cd Discord embed from LaifuBot', () => {
            test(embeds.identifier.cd, identifiers.isCdEmbed);
        });
    });

    describe('#isListEmbed', () => {
        it('should identify an embed as a list Discord embed from LaifuBot', () => {
            test(embeds.identifier.list, identifiers.isListEmbed);
        });
    });

    describe('#isTopEmbed', () => {
        it('should identify an embed as a top Discord embed from LaifuBot', () => {
            test(embeds.identifier.top, identifiers.isTopEmbed);
        });
    });

    describe('#isVoteCooldownEmbed', () => {
        it('should identify an embed as a vote cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.voteCooldown, identifiers.isVoteCooldownEmbed);
        });
    });

    describe('#isProfileEmbed', () => {
        it('should identify an embed as a profile Discord embed from LaifuBot', () => {
            test(embeds.identifier.profile, identifiers.isProfileEmbed);
        });
    });
});
