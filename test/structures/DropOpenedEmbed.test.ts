/* eslint-disable max-len */

import { MessageEmbed } from 'Discord.js';
import { assert } from 'chai';
import { Consumption, DropOpenedEmbed } from '../../dist';
import * as embeds from '../embeds.json';
import { MEOArr } from '../util';

describe('DropOpenedEmbed', () => {
    const dropEmbedsArr = MEOArr(embeds.identifier.drop.opened);

    describe('#constructor', () => {
        it('should correctly parse a drop opened without consumption Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(dropEmbedsArr[0]);
            const parsedEmbed = new DropOpenedEmbed(embed);

            assert.strictEqual(parsedEmbed.username, 'JB');
            assert.strictEqual(parsedEmbed.userId, '138419598469890048');
            assert.strictEqual(parsedEmbed.stonesReceived, 1);
            assert.strictEqual(parsedEmbed.balance, 457);
            assert.isUndefined(parsedEmbed.consumption);
        });

        it('should correctly parse a drop opened with consumption Discord embed from LaifuBot', () => {
            const embed = new MessageEmbed(dropEmbedsArr[1]);
            const parsedEmbed = new DropOpenedEmbed(embed);

            assert.strictEqual(parsedEmbed.username, 'CptDomo');
            assert.strictEqual(parsedEmbed.userId, '275002545867325440');
            assert.strictEqual(parsedEmbed.stonesReceived, 2);
            assert.strictEqual(parsedEmbed.balance, 2);

            const expConsumption: Consumption = {
                experience: 38,
                health: 0,
                attack: 0,
                defense: 0,
            };

            assert.deepEqual(parsedEmbed.consumption, expConsumption);
        });

        it('should correctly parse a drop opened without consumption Discord embed from LaifuBot with default avatar', () => {
            const embed = new MessageEmbed(dropEmbedsArr[2]);
            const parsedEmbed = new DropOpenedEmbed(embed);

            assert.strictEqual(parsedEmbed.username, 'JB');
            assert.isUndefined(parsedEmbed.userId);
            assert.strictEqual(parsedEmbed.stonesReceived, 1);
            assert.strictEqual(parsedEmbed.balance, 457);
            assert.isUndefined(parsedEmbed.consumption);
        });
    });
});
