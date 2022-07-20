import type { SequenceKey } from '../types';

/**
 * Regular expression for matching rarity text and symbols.
 *
 * ```js
 * SEQUENCE_REGEX.test('MAIN'); // true
 * SEQUENCE_REGEX.test('K-POP'); // true
 *
 * const match = SEQUENCE_REGEX.exec('SID:** 89 | `MAIN`');
 * console.log(match[1]); // prints 'MAIN'
 * ```
 */
export const SEQUENCE_REGEX = (() => {
    const str = ['MAIN', 'K-POP'].join('|');

    return new RegExp(`(${str})`, 'u');
})();

const mappings: Map<string, SequenceKey> = new Map();
mappings.set('MAIN', 'MAIN').set('K-POP', 'KPOP');

/**
 * Resolves the query with the corresponding sequence.
 *
 * @param query The query to resolve
 * @returns The corresponding sequence, `'UNKNOWN'` otherwise
 */
export function resolveSequence(query: string): SequenceKey {
    return mappings.get(query) ?? 'UNKNOWN';
}
