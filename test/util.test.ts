import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import * as embeds from './embeds.json';
import { hasSameImage, USER_ID } from '../dist';

describe('Util', () => {
    describe('.USER_ID', () => {
        it('should be equal to 688202466315206661', () => {
            assert.strictEqual(USER_ID, '688202466315206661');
        });
    });

    describe('#hasSameImage', () => {
        it('should have the same image', () => {
            const embed1 = new MessageEmbed(embeds.util.embed1);
            const embed2 = new MessageEmbed(embeds.util.embed2);
            const ret = hasSameImage(embed1, embed2);
            assert.isTrue(ret);
        });
    });
});
