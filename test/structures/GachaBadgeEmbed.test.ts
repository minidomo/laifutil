import { assert } from 'chai';
import { MessageEmbed } from 'discord.js';
import { BadgeRarity, GachaBadgeEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('GachaBadgeEmbed', () => {
    const gachaBadgeEmbedsArr = MEOArr(embeds.identifier.gacha.badge);

    describe('#constructor', () => {
        it('should correctly parse a gacha badge Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(gachaBadgeEmbedsArr[0]);
            const parsedEmbed = new GachaBadgeEmbed(embed);

            assert.strictEqual(parsedEmbed.id, 235);
            assert.strictEqual(parsedEmbed.title, '*Is this a Pigeon?*');
            assert.strictEqual(parsedEmbed.rarity, BadgeRarity.TIER_1);
            assert.strictEqual(parsedEmbed.stonesUsed, 4);
            assert.strictEqual(parsedEmbed.balance, 537);
        });
    });
});
