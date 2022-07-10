import { assert } from 'chai';
import { ListCharacter, RarityConstants } from '../../dist';

describe('ListCharacter', () => {
    describe('#constructor', () => {
        it('should correctly parse a basic character from a list embed', () => {
            const text = '3171 |  [α] #6 Power `#8`・**1446**<:inf:755213119055200336>';
            const character = new ListCharacter(text);

            assert.strictEqual(character.uniqueId, 3171);
            assert.isUndefined(character.emoji);
            assert.strictEqual(character.rarity, RarityConstants.ALPHA);
            assert.strictEqual(character.stars, 0);
            assert.strictEqual(character.imageNumber, 6);
            assert.strictEqual(character.name, 'Power');
            assert.strictEqual(character.influenceRank, 8);
            assert.strictEqual(character.influence, 1446);
            assert.isFalse(character.glitched);
            assert.isUndefined(character.badgeId);
        });

        it('should correctly parse a character with all fields from a list embed', () => {
            const text =
                '264 | 🏮 [ζ𝓡 𝐈𝐕] #4 Satoru Gojou `#4`・**1934**<a:ui:856752760599085076>' +
                '・<a:85:849961150686953482>';
            const character = new ListCharacter(text);

            assert.strictEqual(character.uniqueId, 264);
            assert.strictEqual(character.emoji, '🏮');
            assert.strictEqual(character.rarity, RarityConstants.ULTRA);
            assert.strictEqual(character.stars, 4);
            assert.strictEqual(character.imageNumber, 4);
            assert.strictEqual(character.name, 'Satoru Gojou');
            assert.strictEqual(character.influenceRank, 4);
            assert.strictEqual(character.influence, 1934);
            assert.isTrue(character.glitched);
            assert.strictEqual(character.badgeId, 85);
        });

        it('should correctly parse a three star character from a list embed', () => {
            const text = '1067 |  [α 𝐈𝐈𝐈] #7 Nino Nakano `#13`・**1619**<:inf:755213119055200336>';
            const character = new ListCharacter(text);

            assert.strictEqual(character.uniqueId, 1067);
            assert.isUndefined(character.emoji);
            assert.strictEqual(character.rarity, RarityConstants.ALPHA);
            assert.strictEqual(character.stars, 3);
            assert.strictEqual(character.imageNumber, 7);
            assert.strictEqual(character.name, 'Nino Nakano');
            assert.strictEqual(character.influenceRank, 13);
            assert.strictEqual(character.influence, 1619);
            assert.isFalse(character.glitched);
            assert.isUndefined(character.badgeId);
        });

        it('should correctly parse a special character from a list embed', () => {
            const text =
                '1 | 💖 [Λ 𝐈𝐕] #3 Yukino Yukinoshita `#67`・**1151**<a:spi:856659240228093983>' +
                '・<a:218:915038054383767613>';
            const character = new ListCharacter(text);

            assert.strictEqual(character.uniqueId, 1);
            assert.strictEqual(character.emoji, '💖');
            assert.strictEqual(character.rarity, RarityConstants.SPECIAL);
            assert.strictEqual(character.stars, 4);
            assert.strictEqual(character.imageNumber, 3);
            assert.strictEqual(character.name, 'Yukino Yukinoshita');
            assert.strictEqual(character.influenceRank, 67);
            assert.strictEqual(character.influence, 1151);
            assert.isFalse(character.glitched);
            assert.strictEqual(character.badgeId, 218);
        });
    });
});
