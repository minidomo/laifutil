import { assert } from 'chai';
import { MessageEmbed, MessageEmbedOptions } from 'discord.js';
import * as embeds from './embeds.json';
import * as laifutil from '../dist';

const identifyEmbed = (() => {
    type IsEmbedFunction = (boolean: MessageEmbed) => boolean;

    const functions: IsEmbedFunction[] = [];
    const IS_EMBED_REGEX = /^is.+Embed$/;

    Object.keys(laifutil)
        .forEach(key => {
            const match = key.match(IS_EMBED_REGEX);
            if (match) {
                functions.push(laifutil[key] as IsEmbedFunction);
            }
        });

    function run(embed: MessageEmbed): string[] {
        return functions.filter(f => f(embed)).map(f => f.name);
    }

    return run;
})();

function test(exampleEmbeds: MessageEmbedOptions[], f: (arg: MessageEmbed) => boolean) {
    exampleEmbeds.map(e => new MessageEmbed(e))
        .forEach((embed, i) => {
            const identities = identifyEmbed(embed);

            assert.strictEqual(identities.length, 1, `index: ${i} | ${identities}`);
            assert.isTrue(f(embed), `index: ${i}`);
        });
}


describe('identifier.ts', () => {
    describe('#isArenaInitialEmbed', () => {
        it('should identify an embed as an arena initial Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.initial, laifutil.isArenaInitialEmbed);
        });
    });

    describe('#isArenaResultEmbed', () => {
        it('should identify an embed as an arena result Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.result, laifutil.isArenaResultEmbed);
        });
    });

    describe('#isArenaLoadingEmbed', () => {
        it('should identify an embed as an arena loading Discord embed from LaifuBot', () => {
            test(embeds.identifier.arena.loading, laifutil.isArenaLoadingEmbed);
        });
    });

    describe('#isBluMenuEmbed', () => {
        it('should identify an embed as a blu menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.blu.menu, laifutil.isBluMenuEmbed);
        });
    });

    describe('#isBluInfoEmbed', () => {
        it('should identify an embed as a blu info Discord embed from LaifuBot', () => {
            test(embeds.identifier.blu.info, laifutil.isBluInfoEmbed);
        });
    });

    describe('#isBurnCharacterEmbed', () => {
        it('should identify an embed as a burn character Discord embed from LaifuBot', () => {
            test(embeds.identifier.burn.character, laifutil.isBurnCharacterEmbed);
        });
    });

    describe('#isBurnRewardEmbed', () => {
        it('should identify an embed as a burn reward Discord embed from LaifuBot', () => {
            test(embeds.identifier.burn.reward, laifutil.isBurnRewardEmbed);
        });
    });

    describe('#isCluSearchEmbed', () => {
        it('should identify an embed as a clu search Discord embed from LaifuBot', () => {
            test(embeds.identifier.clu.search, laifutil.isCluSearchEmbed);
        });
    });

    describe('#isCluErrorEmbed', () => {
        it('should identify an embed as a clu error Discord embed from LaifuBot', () => {
            test(embeds.identifier.clu.error, laifutil.isCluErrorEmbed);
        });
    });

    describe('#isDailyClaimedEmbed', () => {
        it('should identify an embed as a daily claimed Discord embed from LaifuBot', () => {
            test(embeds.identifier.daily.claimed, laifutil.isDailyClaimedEmbed);
        });
    });

    describe('#isDailyCooldownEmbed', () => {
        it('should identify an embed as a daily cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.daily.cooldown, laifutil.isDailyCooldownEmbed);
        });
    });

    describe('#isDropCodeEmbed', () => {
        it('should identify an embed as a drop code Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.code, laifutil.isDropCodeEmbed);
        });
    });

    describe('#isDropOpenedEmbed', () => {
        it('should identify an embed as a drop opened Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.opened, laifutil.isDropOpenedEmbed);
        });
    });

    describe('#isDropCooldownEmbed', () => {
        it('should identify an embed as a drop cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.drop.cooldown, laifutil.isDropCooldownEmbed);
        });
    });

    describe('#isFavoriteAddEmbed', () => {
        it('should identify an embed as a favorite add Discord embed from LaifuBot', () => {
            test(embeds.identifier.favorite.add, laifutil.isFavoriteAddEmbed);
        });
    });

    describe('#isFavoriteRemoveEmbed', () => {
        it('should identify an embed as a favorite remove Discord embed from LaifuBot', () => {
            test(embeds.identifier.favorite.remove, laifutil.isFavoriteRemoveEmbed);
        });
    });

    describe('#isGachaCharacterEmbed', () => {
        it('should identify an embed as a gacha character Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.character, laifutil.isGachaCharacterEmbed);
        });
    });

    describe('#isGachaBadgeEmbed', () => {
        it('should identify an embed as a gacha badge Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.badge, laifutil.isGachaBadgeEmbed);
        });
    });

    describe('#isGachaLoadingEmbed', () => {
        it('should identify an embed as a gacha loading Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.loading, laifutil.isGachaLoadingEmbed);
        });
    });

    describe('#isMedalDropActiveEmbed', () => {
        it('should identify an embed as an active medal drop Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.medalDrop.active, laifutil.isMedalDropActiveEmbed);
        });
    });

    describe('#isMedalDropClosedEmbed', () => {
        it('should identify an embed as a closed medal drop Discord embed from LaifuBot', () => {
            test(embeds.identifier.gacha.medalDrop.closed, laifutil.isMedalDropClosedEmbed);
        });
    });

    describe('#isUpgradeMenuEmbed', () => {
        it('should identify an embed as a upgrade menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.menu, laifutil.isUpgradeMenuEmbed);
        });
    });

    describe('#isStarEnhancingMenuEmbed', () => {
        it('should identify an embed as a upgrade star enhancing menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.starEnhancing.menu, laifutil.isStarEnhancingMenuEmbed);
        });
    });

    describe('#isStarEnhancingConfirmationEmbed', () => {
        it('should identify an embed as a upgrade star enhancing confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.starEnhancing.confirmation,
                laifutil.isStarEnhancingConfirmationEmbed);
        });
    });

    describe('#isCardGlitchingMenuEmbed', () => {
        it('should identify an embed as a upgrade card glitching menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.cardGlitching.menu, laifutil.isCardGlitchingMenuEmbed);
        });
    });

    describe('#isCardGlitchingConfirmationEmbed', () => {
        it('should identify an embed as a upgrade card glitching confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.cardGlitching.confirmation,
                laifutil.isCardGlitchingConfirmationEmbed);
        });
    });

    describe('#isInfluenceSkinsMenuEmbed', () => {
        it('should identify an embed as a upgrade influence skins menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.influenceSkins.menu, laifutil.isInfluenceSkinsMenuEmbed);
        });
    });

    describe('#isInfluenceSkinsConfirmationEmbed', () => {
        it('should identify an embed as a upgrade influence skins confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.influenceSkins.confirmation,
                laifutil.isInfluenceSkinsConfirmationEmbed);
        });
    });

    describe('#isMedalsMenuEmbed', () => {
        it('should identify an embed as a upgrade medals menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.medals.menu, laifutil.isMedalsMenuEmbed);
        });
    });

    describe('#isMedalsConfirmationEmbed', () => {
        it('should identify an embed as a upgrade medals confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.medals.confirmation, laifutil.isMedalsConfirmationEmbed);
        });
    });

    describe('#isWishlistListEmbed', () => {
        it('should identify an embed as a wishlist list Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.list, laifutil.isWishlistListEmbed);
        });
    });

    describe('#isWishlistAddEmbed', () => {
        it('should identify an embed as a wishlist add Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.add, laifutil.isWishlistAddEmbed);
        });
    });

    describe('#isWishlistRemoveEmbed', () => {
        it('should identify an embed as a wishlist remove Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist.remove, laifutil.isWishlistRemoveEmbed);
        });
    });

    describe('#isWorkshopMenuEmbed', () => {
        it('should identify an embed as a workshop menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.menu, laifutil.isWorkshopMenuEmbed);
        });
    });

    describe('#isBadgeTransferMenuEmbed', () => {
        it('should identify an embed as a workshop badge transfer menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.badge.menu, laifutil.isBadgeTransferMenuEmbed);
        });
    });

    describe('#isBadgeTransferConfirmationEmbed', () => {
        it('should identify an embed as a workshop badge transfer confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.badge.confirmation, laifutil.isBadgeTransferConfirmationEmbed);
        });
    });

    describe('#isSkinTransferMenuEmbed', () => {
        it('should identify an embed as a workshop skin transfer menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.skin.menu, laifutil.isSkinTransferMenuEmbed);
        });
    });

    describe('#isSkinTransferConfirmationEmbed', () => {
        it('should identify an embed as a workshop skin transfer confirmation Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.skin.confirmation, laifutil.isSkinTransferConfirmationEmbed);
        });
    });

    describe('#isViewEmbed', () => {
        it('should identify an embed as a view Discord embed from LaifuBot', () => {
            test(embeds.identifier.view, laifutil.isViewEmbed);
        });
    });

    describe('#isAuctionEmbed', () => {
        it('should identify an embed as an auction Discord embed from LaifuBot', () => {
            test(embeds.identifier.auction, laifutil.isAuctionEmbed);
        });
    });

    describe('#isInfoEmbed', () => {
        it('should identify an embed as an info Discord embed from LaifuBot', () => {
            test(embeds.identifier.info, laifutil.isInfoEmbed);
        });
    });

    describe('#isBadgePreviewEmbed', () => {
        it('should identify an embed as a badge preview Discord embed from LaifuBot', () => {
            test(embeds.identifier.badgePreview, laifutil.isBadgePreviewEmbed);
        });
    });

    describe('#isRewardBoxEmbed', () => {
        it('should identify an embed as a reward box Discord embed from LaifuBot', () => {
            test(embeds.identifier.rewardBox, laifutil.isRewardBoxEmbed);
        });
    });

    describe('#isCdEmbed', () => {
        it('should identify an embed as a cd Discord embed from LaifuBot', () => {
            test(embeds.identifier.cd, laifutil.isCdEmbed);
        });
    });

    describe('#isListEmbed', () => {
        it('should identify an embed as a list Discord embed from LaifuBot', () => {
            test(embeds.identifier.list, laifutil.isListEmbed);
        });
    });

    describe('#isTopEmbed', () => {
        it('should identify an embed as a top Discord embed from LaifuBot', () => {
            test(embeds.identifier.top, laifutil.isTopEmbed);
        });
    });

    describe('#isVoteCooldownEmbed', () => {
        it('should identify an embed as a vote cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.voteCooldown, laifutil.isVoteCooldownEmbed);
        });
    });

    describe('#isProfileEmbed', () => {
        it('should identify an embed as a profile Discord embed from LaifuBot', () => {
            test(embeds.identifier.profile, laifutil.isProfileEmbed);
        });
    });
});
