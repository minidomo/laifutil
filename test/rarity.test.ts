import { assert } from 'chai';
import { RarityConstants, resolveRarity } from '../dist';

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
});
