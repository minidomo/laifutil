import { assert } from 'chai';
import { SEQUENCE_REGEX, resolveSequence } from '../../dist';

describe('sequence.ts', () => {
    describe('#resolveSequence', () => {
        it('should return ZETA', () => {
            const ret = resolveSequence('K-POP');
            assert.strictEqual(ret, 'KPOP');
        });

        it('should return UNKNOWN', () => {
            const ret = resolveSequence('random');
            assert.strictEqual(ret, 'UNKNOWN');
        });
    });

    describe('.SEQUENCE_REGEX', () => {
        it('should match to ultra characters', () => {
            const text = 'K-POP';
            const match = text.match(SEQUENCE_REGEX) as RegExpMatchArray;

            assert.isArray(match);
            assert.strictEqual(match[1], 'K-POP');
        });
    });
});
