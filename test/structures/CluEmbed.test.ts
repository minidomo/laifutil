import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { CluSearchEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('CluSearchEmbed', () => {
    const cluSearchEmbedsArr = MEOArr(embeds.identifier.clu.search);

    describe('#constructor', () => {
        it('should correctly parse a clu search Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(cluSearchEmbedsArr[0]);
            const parsedEmbed = new CluSearchEmbed(embed);

            assert.strictEqual(parsedEmbed.nickname, '! JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 2);
            assert.strictEqual(parsedEmbed.entities, 21);
            assert.strictEqual(parsedEmbed.characters.length, 20);
        });
    });
});
