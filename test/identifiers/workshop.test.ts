import { test } from './util';
import { identifiers } from '../../dist';
import * as embeds from '../embeds.json';

describe('.workshop', () => {
    describe('#isMenuEmbed', () => {
        it('should identify an embed as a workshop menu Discord embed from LaifuBot', () => {
            test(embeds.identifier.workshop.menu, identifiers.workshop.isMenuEmbed);
        });
    });

    describe('.badge', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a workshop badge transfer menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.workshop.badge.menu, identifiers.workshop.badge.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a workshop badge transfer confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.workshop.badge.confirmation, identifiers.workshop.badge.isConfirmationEmbed);
            });
        });
    });

    describe('.skin', () => {
        describe('#isMenuEmbed', () => {
            it('should identify an embed as a workshop skin transfer menu Discord embed from LaifuBot', () => {
                test(embeds.identifier.workshop.skin.menu, identifiers.workshop.skin.isMenuEmbed);
            });
        });

        describe('#isConfirmationEmbed', () => {
            it('should identify an embed as a workshop skin transfer confirmation Discord embed from LaifuBot', () => {
                test(embeds.identifier.workshop.skin.confirmation, identifiers.workshop.skin.isConfirmationEmbed);
            });
        });
    });
});
