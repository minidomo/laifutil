import { assert } from 'chai';
import { GachaBadgeEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { asAPIEmbedArr } from '../util';

describe('GachaBadgeEmbed', () => {
    const embedArr = asAPIEmbedArr(embeds.identifier.gacha.badge);

    describe('#constructor', () => {
        it('should correctly parse a gacha badge Discord embed from LaifuBot', () => {
            const parsedEmbed = new GachaBadgeEmbed(embedArr[0]);

            assert.strictEqual(parsedEmbed.id, 235);
            assert.strictEqual(parsedEmbed.title, '*Is this a Pigeon?*');
            assert.strictEqual(parsedEmbed.rarity, 'TIER_1');
            assert.strictEqual(parsedEmbed.stonesUsed, 4);
            assert.strictEqual(parsedEmbed.balance, 537);
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');
        });
    });
});
