import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.upgrade', () => {
    describe('#isMenuEmbed', () => {
        it('should identify an embed as a upgrade menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.upgrade.menu, identifiers.upgrade.isMenuEmbed);
        });
    });

    describe('.starEnhancing', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a upgrade star enhancing menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.starEnhancing.menu, identifiers.upgrade.starEnhancing.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a upgrade star enhancing confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.starEnhancing.confirmation,
                    identifiers.upgrade.starEnhancing.isConfirmationEmbed);
            });
        });
    });

    describe('.cardGlitching', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a upgrade card glitching menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.cardGlitching.menu, identifiers.upgrade.cardGlitching.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a upgrade card glitching confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.cardGlitching.confirmation,
                    identifiers.upgrade.cardGlitching.isConfirmationEmbed);
            });
        });
    });

    describe('.influenceSkins', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a upgrade influence skins menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.influenceSkins.menu, identifiers.upgrade.influenceSkins.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a upgrade influence skins confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.influenceSkins.confirmation,
                    identifiers.upgrade.influenceSkins.isConfirmationEmbed);
            });
        });
    });

    describe('.medals', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a upgrade medals menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.medals.menu, identifiers.upgrade.medals.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a upgrade medals confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.upgrade.medals.confirmation, identifiers.upgrade.medals.isConfirmationEmbed);
            });
        });
    });
});
