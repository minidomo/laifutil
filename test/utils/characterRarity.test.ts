import { assert } from 'chai';
import { CHARACTER_RARITY_REGEX, resolveCharacterRarity } from '../../dist';

describe('characterRarity.ts', () => {
    describe('#resolveCharacterRarity', () => {
        it('should return ZETA', () => {
            const ret = resolveCharacterRarity('ζ');
            assert.strictEqual(ret, 'ZETA');
        });

        it('should return UNKNOWN', () => {
            const ret = resolveCharacterRarity('ultra');
            assert.strictEqual(ret, 'UNKNOWN');
        });
    });

    describe('.CHARACTER_RARITY_REGEX', () => {
        it('should match to ultra characters', () => {
            const text = 'ζ𝓡';
            const match = text.match(CHARACTER_RARITY_REGEX) as RegExpMatchArray;

            assert.isArray(match);
            assert.strictEqual(match[1], text);
        });
    });
});
