import { assert } from 'chai';
import { rarity } from '../dist';

describe('rarity', () => {
    describe('#resolve', () => {
        it('should return the ZETA constant', () => {
            const ret = rarity.resolve('ζ');
            assert.strictEqual(ret, rarity.constants.ZETA);
        });

        it('should return null', () => {
            const ret = rarity.resolve('ultra');
            assert.isNull(ret);
        });
    });
});
