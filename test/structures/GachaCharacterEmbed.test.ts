import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { GachaCharacterEmbed, Rarity } from '../../dist';
import * as embeds from '../embeds.json';

describe('GachaCharacterEmbed', () => {
    const gachaCharacterEmbedsArr = embeds.identifier.gachaCharacter;

    describe('#constructor', () => {
        it('should correctly parse a gacha character Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(gachaCharacterEmbedsArr[0]);
            const parsedEmbed = new GachaCharacterEmbed(embed);

            assert.strictEqual(parsedEmbed.imageNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uid, 5070);
            assert.strictEqual(parsedEmbed.gid, 11169);

            assert.strictEqual(parsedEmbed.rarity, Rarity.CONSTANTS.GAMMA);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 14558);
            assert.strictEqual(parsedEmbed.influence, 15);

            assert.strictEqual(parsedEmbed.engSeries, 'Please Twins/Teacher');
            assert.strictEqual(parsedEmbed.altSeries, 'Onegai Twins/Teacher');
            assert.strictEqual(parsedEmbed.sid, 1158);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'MyAnimeList');

            assert.strictEqual(parsedEmbed.numStonesUsed, 5);
            assert.strictEqual(parsedEmbed.balance, 245);
        });
    });
});
