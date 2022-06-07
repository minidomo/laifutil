import { assert } from 'chai';
import { MessageEmbed, MessageEmbedOptions } from 'discord.js';
import * as embeds from './embeds.json';
import { Identifier } from '../dist';

function identifyEmbed(embed: MessageEmbed): string[] {
    const identities: string[] = [];
    Object.values(Identifier)
        .forEach(f => {
            const res = f.call(Identifier, embed);
            if (res) {
                identities.push(f.name);
            }
        });
    return identities;
}

function test(exampleEmbeds: MessageEmbedOptions[], f: (arg: MessageEmbed) => boolean) {
    exampleEmbeds.map(e => new MessageEmbed(e))
        .forEach((embed, i) => {
            const identities = identifyEmbed(embed);

            assert.strictEqual(identities.length, 1, `index: ${i} | ${identities}`);
            assert.isTrue(f(embed), `index: ${i}`);
        });
}

describe('Identifier', () => {
    describe('#isWishlistEmbed', () => {
        it('should identify an embed as a wishlist Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlist, Identifier.isWishlistEmbed);
        });
    });

    describe('#isBurnEmbed', () => {
        it('should identify an embed as a burn Discord embed from LaifuBot', () => {
            test(embeds.identifier.burn, Identifier.isBurnEmbed);
        });
    });

    describe('#isViewEmbed', () => {
        it('should identify an embed as a view Discord embed from LaifuBot', () => {
            test(embeds.identifier.view, Identifier.isViewEmbed);
        });
    });

    describe('#isGachaCharacterEmbed', () => {
        it('should identify an embed as a gacha character Discord embed from LaifuBot', () => {
            test(embeds.identifier.gachaCharacter, Identifier.isGachaCharacterEmbed);
        });
    });

    describe('#isGachaLoadEmbed', () => {
        it('should identify an embed as a gacha load Discord embed from LaifuBot', () => {
            test(embeds.identifier.gachaLoad, Identifier.isGachaLoadEmbed);
        });
    });

    describe('#isDropCodeEmbed', () => {
        it('should identify an embed as a drop code Discord embed from LaifuBot', () => {
            test(embeds.identifier.dropCode, Identifier.isDropCodeEmbed);
        });
    });

    describe('#isDropCompletionEmbed', () => {
        it('should identify an embed as a completed drop Discord embed from LaifuBot', () => {
            test(embeds.identifier.dropComplete, Identifier.isDropCompletionEmbed);
        });
    });

    describe('#isInfoEmbed', () => {
        it('should identify an embed as an info Discord embed from LaifuBot', () => {
            test(embeds.identifier.info, Identifier.isInfoEmbed);
        });
    });

    describe('#isAuctionEmbed', () => {
        it('should identify an embed as an auction Discord embed from LaifuBot', () => {
            test(embeds.identifier.auction, Identifier.isAuctionEmbed);
        });
    });

    describe('#isUpgradeEmbed', () => {
        it('should identify an embed as an upgrade Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade, Identifier.isUpgradeEmbed);
        });
    });

    describe('#isMedalsCharacterPromptEmbed', () => {
        it('should identify an embed as a medals character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.medalsCharacterPrompt, Identifier.isMedalsCharacterPromptEmbed);
        });
    });

    describe('#isMedalsCostPromptEmbed', () => {
        it('should identify an embed as a medals cost prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.medalsCostPrompt, Identifier.isMedalsCostPromptEmbed);
        });
    });

    describe('#isInfluenceSkinsCharacterPromptEmbed', () => {
        it('should identify an embed as an influence skins character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.influenceSkinsCharacterPrompt, Identifier.isInfluenceSkinsCharacterPromptEmbed);
        });
    });

    describe('#isInfluenceSkinsCostPromptEmbed', () => {
        it('should identify an embed as an influence skins cost prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.influenceSkinsCostPrompt, Identifier.isInfluenceSkinsCostPromptEmbed);
        });
    });

    describe('#isCardGlitchingCharacterPromptEmbed', () => {
        it('should identify an embed as a card glitching character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.cardGlitchingCharacterPrompt, Identifier.isCardGlitchingCharacterPromptEmbed);
        });
    });

    describe('#isCardGlitchingCostPromptEmbed', () => {
        it('should identify an embed as a card glitching cost prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.cardGlitchingCostPrompt, Identifier.isCardGlitchingCostPromptEmbed);
        });
    });

    describe('#isStarEnhancingCharacterPromptEmbed', () => {
        it('should identify an embed as a star enhancing character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.starEnhancingCharacterPrompt, Identifier.isStarEnhancingCharacterPromptEmbed);
        });
    });

    describe('#isStarEnhancingCostPromptEmbed', () => {
        it('should identify an embed as a star enhancing cost prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.starEnhancingCostPrompt, Identifier.isStarEnhancingCostPromptEmbed);
        });
    });

    describe('#isProfileEmbed', () => {
        it('should identify an embed as a profile Discord embed from LaifuBot', () => {
            test(embeds.identifier.profile, Identifier.isProfileEmbed);
        });
    });

    describe('#isLookUpErrorEmbed', () => {
        it('should identify an embed as a look up error Discord embed from LaifuBot', () => {
            test(embeds.identifier.lookUpError, Identifier.isLookUpErrorEmbed);
        });
    });

    describe('#isWishlistRemoveEmbed', () => {
        it('should identify an embed as a wishlist remove Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlistRemove, Identifier.isWishlistRemoveEmbed);
        });
    });

    describe('#isWishlistAddEmbed', () => {
        it('should identify an embed as a wishlist add Discord embed from LaifuBot', () => {
            test(embeds.identifier.wishlistAdd, Identifier.isWishlistAddEmbed);
        });
    });

    describe('#isCluSearchEmbed', () => {
        it('should identify an embed as a clu search Discord embed from LaifuBot', () => {
            test(embeds.identifier.cluSearch, Identifier.isCluSearchEmbed);
        });
    });

    describe('#isVoteCooldownEmbed', () => {
        it('should identify an embed as a vote cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.voteCooldown, Identifier.isVoteCooldownEmbed);
        });
    });

    describe('#isTopEmbed', () => {
        it('should identify an embed as a top Discord embed from LaifuBot', () => {
            test(embeds.identifier.top, Identifier.isTopEmbed);
        });
    });

    describe('#isFavoriteRemovedEmbed', () => {
        it('should identify an embed as a favorite removed Discord embed from LaifuBot', () => {
            test(embeds.identifier.favoriteRemoved, Identifier.isFavoriteRemovedEmbed);
        });
    });

    describe('#isFavoriteEmbed', () => {
        it('should identify an embed as a favorite Discord embed from LaifuBot', () => {
            test(embeds.identifier.favorite, Identifier.isFavoriteEmbed);
        });
    });

    describe('#isDailyCooldownEmbed', () => {
        it('should identify an embed as a daily cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.dailyCooldown, Identifier.isDailyCooldownEmbed);
        });
    });

    describe('#isDropCooldownEmbed', () => {
        it('should identify an embed as a drop cooldown Discord embed from LaifuBot', () => {
            test(embeds.identifier.dropCooldown, Identifier.isDropCooldownEmbed);
        });
    });

    describe('#isListEmbed', () => {
        it('should identify an embed as a list Discord embed from LaifuBot', () => {
            test(embeds.identifier.list, Identifier.isListEmbed);
        });
    });

    describe('#isCdEmbed', () => {
        it('should identify an embed as a cd Discord embed from LaifuBot', () => {
            test(embeds.identifier.cd, Identifier.isCdEmbed);
        });
    });

    describe('#isBluEmbed', () => {
        it('should identify an embed as a blu Discord embed from LaifuBot', () => {
            test(embeds.identifier.blu, Identifier.isBluEmbed);
        });
    });

    describe('#isBadgePreviewEmbed', () => {
        it('should identify an embed as a badge preview Discord embed from LaifuBot', () => {
            test(embeds.identifier.badgePreview, Identifier.isBadgePreviewEmbed);
        });
    });

    describe('#isRewardBoxEmbed', () => {
        it('should identify an embed as a reward box Discord embed from LaifuBot', () => {
            test(embeds.identifier.rewardBox, Identifier.isRewardBoxEmbed);
        });
    });

    describe('#isCardWorkshopEmbed', () => {
        it('should identify an embed as a card workshop Discord embed from LaifuBot', () => {
            test(embeds.identifier.cardWorkshop, Identifier.isCardWorkshopEmbed);
        });
    });

    describe('#isBadgeTransferCharacterPromptEmbed', () => {
        it('should identify an embed as a badge transfer character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.badgeTransferCharacterPrompt, Identifier.isBadgeTransferCharacterPromptEmbed);
        });
    });

    describe('#isSkinTransferCharacterPromptEmbed', () => {
        it('should identify an embed as a skin transfer character prompt Discord embed from LaifuBot', () => {
            test(embeds.identifier.skinTransferCharacterPrompt, Identifier.isSkinTransferCharacterPromptEmbed);
        });
    });

    describe('#isBurnRewardEmbed', () => {
        it('should identify an embed as a burn reward Discord embed from LaifuBot', () => {
            test(embeds.identifier.burnReward, Identifier.isBurnRewardEmbed);
        });
    });

    describe('#isMedalDropClosedEmbed', () => {
        it('should identify an embed as a medal drop closed Discord embed from LaifuBot', () => {
            test(embeds.identifier.medalDropClosed, Identifier.isMedalDropClosedEmbed);
        });
    });

    describe('#isMedalDropActiveEmbed', () => {
        it('should identify an embed as a medal drop active Discord embed from LaifuBot', () => {
            test(embeds.identifier.medalDropActive, Identifier.isMedalDropActiveEmbed);
        });
    });

    describe('#isArenaGifEmbed', () => {
        it('should identify an embed as an arena gif Discord embed from LaifuBot', () => {
            test(embeds.identifier.arenaGif, Identifier.isArenaGifEmbed);
        });
    });

    describe('#isArenaResultEmbed', () => {
        it('should identify an embed as an arena result Discord embed from LaifuBot', () => {
            test(embeds.identifier.arenaResult, Identifier.isArenaResultEmbed);
        });
    });

    describe('#isArenaInitialEmbed', () => {
        it('should identify an embed as an arena initial Discord embed from LaifuBot', () => {
            test(embeds.identifier.arenaInitial, Identifier.isArenaInitialEmbed);
        });
    });

    describe('#isDailyClaimEmbed', () => {
        it('should identify an embed as a daily claim Discord embed from LaifuBot', () => {
            test(embeds.identifier.dailyClaim, Identifier.isDailyClaimEmbed);
        });
    });

    describe('#isGachaBadgeEmbed', () => {
        it('should identify an embed as a gacha badge Discord embed from LaifuBot', () => {
            test(embeds.identifier.gachaBadge, Identifier.isGachaBadgeEmbed);
        });
    });

    // Describe('#isBadgeTransferCostPromptEmbed', () => {
    //     it('should identify an embed as a badge transfer cost prompt Discord embed from LaifuBot', () => {
    //         test(embeds.identifier.badgeTransferCostPrompt, Identifier.isBadgeTransferCostPromptEmbed);
    //     });
    // });

    // describe('#isSkinTransferCostPromptEmbed', () => {
    //     it('should identify an embed as a skin transfer cost prompt Discord embed from LaifuBot', () => {
    //         test(embeds.identifier.skinTransferCostPrompt, Identifier.isSkinTransferCostPromptEmbed);
    //     });
    // });
});
