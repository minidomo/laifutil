import { assert } from 'chai';
import { Rarity } from '../dist';

describe('Rarity', () => {
    describe('#resolve', () => {
        it('should return the ZETA constant', () => {
            const ret = Rarity.resolve('ζ');
            assert.strictEqual(ret, Rarity.CONSTANTS.ZETA);
        });

        it('should return null', () => {
            const ret = Rarity.resolve('ultra');
            assert.isNull(ret);
        });
    });
});
