import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import * as embeds from './embeds.json';
import { MEO } from './util';
import { cleanCharacterName, hasSameImage, LAIFU_USER_ID } from '../dist';

describe('util.ts', () => {
    describe('.LAIFU_USER_ID', () => {
        it('should be equal to 688202466315206661', () => {
            assert.strictEqual(LAIFU_USER_ID, '688202466315206661');
        });
    });

    describe('#hasSameImage', () => {
        it('should have the same image', () => {
            const embed1 = new MessageEmbed(MEO(embeds.util.embed1));
            const embed2 = new MessageEmbed(MEO(embeds.util.embed2));
            const ret = hasSameImage(embed1, embed2);
            assert.isTrue(ret);
        });
    });

    describe('#cleanCharacterName', () => {
        it('should remove the alternate name', () => {
            const name = 'Drole (ドロール)';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'Drole');
        });

        it('should not fix an incorrect amount of parenthesis', () => {
            const name = 'Sloth (スカー (N/A)';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'Sloth (スカー (N/A)');
        });

        it('should remove the alternate name with different parenthesis unicode', () => {
            const name = 'Juniku Bunjaku (荀彧 文若/桂花(けいふぁ）)';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'Juniku Bunjaku');
        });

        it('should remove the alternate name with different unicode but matching pairs of parenthesis', () => {
            const name = 'Kaijuu Shoujo Anosillus (怪獣少女アノシラス（2代目）)';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'Kaijuu Shoujo Anosillus');
        });

        it('should remove the unicode emojis', () => {
            const name = 'Patrick Star ⭐🐟';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'Patrick Star');
        });

        it('should remove the Discord emojis', () => {
            const name = 'A1ter <a:keklul:854632739453927444>';
            const cleanName = cleanCharacterName(name);
            assert.strictEqual(cleanName, 'A1ter');
        });
    });
});
