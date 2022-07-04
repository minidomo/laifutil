import { assert } from 'chai';
import { RarityConstants, RARITY_REGEX, resolveRarity } from '../dist';

describe('rarity.ts', () => {
    describe('#resolve', () => {
        it('should return the ZETA constant', () => {
            const ret = resolveRarity('ζ');
            assert.strictEqual(ret, RarityConstants.ZETA);
        });

        it('should return null', () => {
            const ret = resolveRarity('ultra');
            assert.isNull(ret);
        });
    });

    describe('.RARITY_REGEX', () => {
        it('should match to ultra characters', () => {
            const text = 'ζ𝓡';
            const match = text.match(RARITY_REGEX) as RegExpMatchArray;

            assert.isArray(match);
            assert.strictEqual(match[1], text);
        });
    });
});
