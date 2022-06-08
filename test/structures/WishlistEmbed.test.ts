import { MessageEmbed } from 'Discord.js';
import { assert } from 'chai';
import { WishlistEmbed } from '../../dist';
import * as embeds from '../embeds.json';

describe('WishlistEmbed', () => {
    const wishlistEmbedsArr = embeds.identifier.wishlist.list;

    describe('#constructor', () => {
        it('should correctly parse a wishlist Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(wishlistEmbedsArr[0]);
            const parsedEmbed = new WishlistEmbed(embed);

            assert.strictEqual(parsedEmbed.username, 'JB');
            assert.strictEqual(parsedEmbed.currentPage, 1);
            assert.strictEqual(parsedEmbed.pages, 1);
            assert.strictEqual(parsedEmbed.charactersWanted, 10);
            assert.strictEqual(parsedEmbed.characters.length, 10);

            const characters = parsedEmbed.characters;

            assert.strictEqual(characters[0].gid, 13540);
            assert.strictEqual(characters[0].influence, 280);
            assert.strictEqual(characters[0].name, 'Anju Emma (アンジュ・エマ)');

            assert.strictEqual(characters[1].gid, 13541);
            assert.strictEqual(characters[1].influence, 217);
            assert.strictEqual(characters[1].name, 'Kurena Kukumila (クレナ・ククミラ)');

            assert.strictEqual(characters[2].gid, 13795);
            assert.strictEqual(characters[2].influence, 204);
            assert.strictEqual(characters[2].name, 'Eiko Kawasegawa (河瀬川 英子)');

            assert.strictEqual(characters[3].gid, 13796);
            assert.strictEqual(characters[3].influence, 162);
            assert.strictEqual(characters[3].name, 'Nanako Kogure (小暮 奈々子)');

            assert.strictEqual(characters[4].gid, 13798);
            assert.strictEqual(characters[4].influence, 258);
            assert.strictEqual(characters[4].name, 'Aki Shino (志野 亜貴)');

            assert.strictEqual(characters[5].gid, 15047);
            assert.strictEqual(characters[5].influence, 316);
            assert.strictEqual(characters[5].name, 'Miko Yotsuya (四谷 みこ)');

            assert.strictEqual(characters[6].gid, 15048);
            assert.strictEqual(characters[6].influence, 212);
            assert.strictEqual(characters[6].name, 'Hana Yurikawa (百合川ハナ)');

            assert.strictEqual(characters[7].gid, 15049);
            assert.strictEqual(characters[7].influence, 204);
            assert.strictEqual(characters[7].name, 'Yuria Niguredou (二暮堂ユリア)');

            assert.strictEqual(characters[8].gid, 15883);
            assert.strictEqual(characters[8].influence, 56);
            assert.strictEqual(characters[8].name, 'Takane Takamine (鷹峰 高嶺)');

            assert.strictEqual(characters[9].gid, 15926);
            assert.strictEqual(characters[9].influence, 14);
            assert.strictEqual(characters[9].name, 'Ushio Kofune (小舟 潮)');
        });
    });
});
