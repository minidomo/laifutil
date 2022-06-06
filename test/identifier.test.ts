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

            assert.strictEqual(identities.length, 1, `index: ${i}`);
            assert.isTrue(f(embed), `index: ${i}`);
        });
}

describe('Identifier', () => {
    describe('#isWishlistEmbed', () => {
        it('should identify an embed as a wishlist Discord embed from LaifuBot', () => {
            test(embeds.wishlist, Identifier.isWishlistEmbed);
        });
    });

    describe('#isBurnEmbed', () => {
        it('should identify an embed as a burn Discord embed from LaifuBot', () => {
            test(embeds.burn, Identifier.isBurnEmbed);
        });
    });

    describe('#isViewEmbed', () => {
        it('should identify an embed as a view Discord embed from LaifuBot', () => {
            test(embeds.view, Identifier.isViewEmbed);
        });
    });

    describe('#isGachaCharacterEmbed', () => {
        it('should identify an embed as a gacha character Discord embed from LaifuBot', () => {
            test(embeds.gachaCharacter, Identifier.isGachaCharacterEmbed);
        });
    });

    describe('#isGachaLoadEmbed', () => {
        it('should identify an embed as a gacha load Discord embed from LaifuBot', () => {
            test(embeds.gachaLoad, Identifier.isGachaLoadEmbed);
        });
    });

    describe('#isDropCodeEmbed', () => {
        it('should identify an embed as a drop code Discord embed from LaifuBot', () => {
            test(embeds.dropCode, Identifier.isDropCodeEmbed);
        });
    });

    describe('#isDropCompletionEmbed', () => {
        it('should identify an embed as a completed drop Discord embed from LaifuBot', () => {
            test(embeds.dropComplete, Identifier.isDropCompletionEmbed);
        });
    });

    describe('#isInfoEmbed', () => {
        it('should identify an embed as an info Discord embed from LaifuBot', () => {
            test(embeds.info, Identifier.isInfoEmbed);
        });
    });

    describe('#isAuctionEmbed', () => {
        it('should identify an embed as an auction Discord embed from LaifuBot', () => {
            test(embeds.auction, Identifier.isAuctionEmbed);
        });
    });

    describe('#isUpgradeEmbed', () => {
        it('should identify an embed as an upgrade Discord embed from LaifuBot', () => {
            test(embeds.upgrade, Identifier.isUpgradeEmbed);
        });
    });

    describe('#isMedalsCharacterPromptEmbed', () => {
        it('should identify an embed as a medals character prompt Discord embed from LaifuBot', () => {
            test(embeds.medalsCharacterPrompt, Identifier.isMedalsCharacterPromptEmbed);
        });
    });

    describe('#isMedalsCostPromptEmbed', () => {
        it('should identify an embed as a medals cost prompt Discord embed from LaifuBot', () => {
            test(embeds.medalsCostPrompt, Identifier.isMedalsCostPromptEmbed);
        });
    });

    describe('#isInfluenceSkinsCharacterPromptEmbed', () => {
        it('should identify an embed as an influence skins character prompt Discord embed from LaifuBot', () => {
            test(embeds.influenceSkinsCharacterPrompt, Identifier.isInfluenceSkinsCharacterPromptEmbed);
        });
    });

    describe('#isInfluenceSkinsCostPromptEmbed', () => {
        it('should identify an embed as an influence skins cost prompt Discord embed from LaifuBot', () => {
            test(embeds.influenceSkinsCostPrompt, Identifier.isInfluenceSkinsCostPromptEmbed);
        });
    });

    describe('#isCardGlitchingCharacterPromptEmbed', () => {
        it('should identify an embed as a card glitching character prompt Discord embed from LaifuBot', () => {
            test(embeds.cardGlitchingCharacterPrompt, Identifier.isCardGlitchingCharacterPromptEmbed);
        });
    });

    describe('#isCardGlitchingCostPromptEmbed', () => {
        it('should identify an embed as a card glitching cost prompt Discord embed from LaifuBot', () => {
            test(embeds.cardGlitchingCostPrompt, Identifier.isCardGlitchingCostPromptEmbed);
        });
    });

    describe('#isStarEnhancingCharacterPromptEmbed', () => {
        it('should identify an embed as a star enhancing character prompt Discord embed from LaifuBot', () => {
            test(embeds.starEnhancingCharacterPrompt, Identifier.isStarEnhancingCharacterPromptEmbed);
        });
    });

    describe('#isStarEnhancingCostPromptEmbed', () => {
        it('should identify an embed as a star enhancing cost prompt Discord embed from LaifuBot', () => {
            test(embeds.starEnhancingCostPrompt, Identifier.isStarEnhancingCostPromptEmbed);
        });
    });
});
