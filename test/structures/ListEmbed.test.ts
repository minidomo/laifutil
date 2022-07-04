import { MessageEmbed } from 'Discord.js';
import { assert } from 'chai';
import { ListEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('ListEmbed', () => {
    const listEmbedsArr = MEOArr(embeds.identifier.list);

    describe('#constructor', () => {
        it('should correctly parse a simple list Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(listEmbedsArr[0]);
            const parsedEmbed = new ListEmbed(embed);

            assert.strictEqual(parsedEmbed.nickname, 'JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 374);
            assert.strictEqual(parsedEmbed.entities, 7477);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });

        it('should correctly parse a complex list Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(listEmbedsArr[1]);
            const parsedEmbed = new ListEmbed(embed);

            assert.strictEqual(parsedEmbed.nickname, '! JB');
            assert.strictEqual(parsedEmbed.currentPage, 35);
            assert.strictEqual(parsedEmbed.pages, 374);
            assert.strictEqual(parsedEmbed.entities, 7479);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });
    });
});
