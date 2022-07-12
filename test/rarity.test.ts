import { assert } from 'chai';
import { compareRarity, hasRarityValue, Rarity, RarityConstants, RARITY_REGEX, resolveRarity } from '../dist';

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

    describe('#hasRarityValue', () => {
        it('should return true', () => {
            assert.isTrue(hasRarityValue(RarityConstants.ALPHA));
            assert.isTrue(hasRarityValue(RarityConstants.BETA));
            assert.isTrue(hasRarityValue(RarityConstants.GAMMA));
            assert.isTrue(hasRarityValue(RarityConstants.DELTA));
            assert.isTrue(hasRarityValue(RarityConstants.EPSILON));
            assert.isTrue(hasRarityValue(RarityConstants.ZETA));
            assert.isTrue(hasRarityValue(RarityConstants.ULTRA));
            assert.isTrue(hasRarityValue(RarityConstants.SCARLET));
            assert.isTrue(hasRarityValue(RarityConstants.EVENT));
            assert.isTrue(hasRarityValue(RarityConstants.SPECIAL));
        });

        it('should return false', () => {
            const rarity: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };

            assert.isFalse(hasRarityValue(rarity));
        });
    });

    describe('#compareRarity', () => {
        it('should return negative with two arguments with VALUE property', () => {
            const res = compareRarity(RarityConstants.ALPHA, RarityConstants.ULTRA);

            assert.strictEqual(res, -6);
        });

        it('should return positive with two arguments with VALUE property', () => {
            const res = compareRarity(RarityConstants.ULTRA, RarityConstants.ALPHA);

            assert.strictEqual(res, 6);
        });

        it('should return zero with two arguments with VALUE property', () => {
            const res = compareRarity(RarityConstants.ALPHA, RarityConstants.ALPHA);

            assert.strictEqual(res, 0);
        });

        it('should return negative with only first argument containing VALUE property', () => {
            const rarity: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };
            const res = compareRarity(RarityConstants.ULTRA, rarity);

            assert.strictEqual(res, -1);
        });

        it('should return positive with only second argument containing VALUE property', () => {
            const rarity: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };
            const res = compareRarity(rarity, RarityConstants.ULTRA);

            assert.strictEqual(res, 1);
        });

        it('should return 0 with no argument containing VALUE property', () => {
            const rarity1: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };
            const rarity2: Rarity = {
                TEXT: 'asd',
                SYMBOL: 'asd',
            };
            const res = compareRarity(rarity1, rarity2);

            assert.strictEqual(res, 0);
        });

        it('should sort the rarity array in ascending order', () => {
            const rarity: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };

            const arr = [
                RarityConstants.EPSILON,
                RarityConstants.ALPHA,
                RarityConstants.ULTRA,
                RarityConstants.SPECIAL,
                RarityConstants.ZETA,
                RarityConstants.ALPHA,
                rarity,
                RarityConstants.BETA,
                RarityConstants.ULTRA,
            ];

            const correct = [
                RarityConstants.ALPHA,
                RarityConstants.ALPHA,
                RarityConstants.BETA,
                RarityConstants.EPSILON,
                RarityConstants.ZETA,
                RarityConstants.ULTRA,
                RarityConstants.ULTRA,
                RarityConstants.SPECIAL,
                rarity,
            ];

            arr.sort(compareRarity);

            assert.deepStrictEqual(arr, correct);
        });

        it('should sort the rarity array in descending order', () => {
            const rarity: Rarity = {
                TEXT: '',
                SYMBOL: '',
            };

            const arr = [
                RarityConstants.EPSILON,
                RarityConstants.ALPHA,
                RarityConstants.ULTRA,
                RarityConstants.SPECIAL,
                RarityConstants.ZETA,
                RarityConstants.ALPHA,
                rarity,
                RarityConstants.BETA,
                RarityConstants.ULTRA,
            ];

            const correct = [
                rarity,
                RarityConstants.SPECIAL,
                RarityConstants.ULTRA,
                RarityConstants.ULTRA,
                RarityConstants.ZETA,
                RarityConstants.EPSILON,
                RarityConstants.BETA,
                RarityConstants.ALPHA,
                RarityConstants.ALPHA,
            ];

            arr.sort((a, b) => -compareRarity(a, b));

            assert.deepStrictEqual(arr, correct);
        });
    });
});
