import { assert } from 'chai';
import { WishlistCharacter } from '../../dist';

describe('WishlistCharacter', () => {
    describe('#constructor', () => {
        it('should correctly parse a character from a wishlist embed', () => {
            const text = '13540 | Anju Emma (アンジュ・エマ)・**280**<:inf:755213119055200336>';
            const character = new WishlistCharacter(text);

            assert.strictEqual(character.globalId, 13540);
            assert.strictEqual(character.name, 'Anju Emma (アンジュ・エマ)');
            assert.strictEqual(character.influence, 280);
        });
    });
});
