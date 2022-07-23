import { assert } from 'chai';
import { CluCharacter } from '../../dist';

describe('CluCharacter', () => {
    describe('#constructor', () => {
        it('should correctly parse a basic character from a clu search embed', () => {
            const text = '15999 | [#1] Neon - Technoroid ・**1**<:inf:755213119055200336>';
            const character = new CluCharacter(text);

            assert.strictEqual(character.globalId, 15999);
            assert.strictEqual(character.totalImages, 1);
            assert.strictEqual(character.name, 'Neon');
            assert.strictEqual(character.title, 'Technoroid');
            assert.strictEqual(character.influence, 1);
        });

        it('should correctly parse a character with a hyphen in title from a clu search embed', () => {
            const text = '1809 | [#9] Nagisa Hazuki - Free! - Iwatobi Swim Club ・**645**<:inf:755213119055200336>';
            const character = new CluCharacter(text);

            assert.strictEqual(character.globalId, 1809);
            assert.strictEqual(character.totalImages, 9);
            assert.strictEqual(character.name, 'Nagisa Hazuki');
            assert.strictEqual(character.title, 'Free! - Iwatobi Swim Club');
            assert.strictEqual(character.influence, 645);
        });

        it('should correctly parse a basic character from a clu search embed (-name)', () => {
            const text = '675 | [#1] Yoshie Tanaka - Oreshura・**69**<:inf:755213119055200336>';
            const character = new CluCharacter(text);

            assert.strictEqual(character.globalId, 675);
            assert.strictEqual(character.totalImages, 1);
            assert.strictEqual(character.name, 'Yoshie Tanaka');
            assert.strictEqual(character.title, 'Oreshura');
            assert.strictEqual(character.influence, 69);
        });
    });
});
