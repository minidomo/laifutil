import type { MedalKey } from '../../types';

/**
 * Regular expression for matching rarity text and symbols.
 *
 * ```js
 * MEDAL_REGEX.test('gm2'); // true
 *
 * const match = MEDAL_REGEX.exec('<:gm2:506984056>');
 * console.log(match[1]); // prints 'gm2'
 * ```
 */
export const MEDAL_REGEX = (() => {
    const str = [':gm1:', ':gm2:', ':gm3:', ':gm7:'].join('|');

    return new RegExp(`(${str})`, 'u');
})();

const mappings: Map<string, MedalKey> = new Map();
mappings.set(':gm1:', 'BRONZE').set(':gm2:', 'SILVER').set(':gm3:', 'GOLD')
.set(':gm7:', 'PRISTINE');

/**
 * Resolves the query with the corresponding medal.
 *
 * @param query The query to resolve
 * @returns The corresponding medal, `'UNKNOWN'` otherwise
 */
export function resolveMedal(query: string): MedalKey {
    return mappings.get(query) ?? 'UNKNOWN';
}
