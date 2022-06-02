const { assert } = require("chai");
const { MessageEmbed } = require("discord.js");
const { EmbedParser, Rarities } = require('../dist/index');

const embeds = require('./embeds.json');

describe('EmbedParser', function () {
    describe('#parseWishlistEmbed', function () {
        const wishlistEmbedsArr = embeds.wishlist;

        it('should correctly parse a wishlist embed', function () {
            const embed = new MessageEmbed(wishlistEmbedsArr[0]);
            const parsedEmbed = EmbedParser.parseWishlistEmbed(embed);

            assert.strictEqual(parsedEmbed.name, 'JB');
            assert.strictEqual(parsedEmbed.identifier, 'Wishlist');

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

    describe('#parseGachaCharacterEmbed', function () {
        const gachaCharacterEmbedsArr = embeds.gachaCharacter;

        it('should correctly parse a gacha character embed', function () {
            const embed = new MessageEmbed(gachaCharacterEmbedsArr[0]);
            const parsedEmbed = EmbedParser.parseGachaCharacterEmbed(embed);

            assert.strictEqual(parsedEmbed.cardNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Karen Onodera (小野寺樺恋)');

            assert.strictEqual(parsedEmbed.uid, 5070);
            assert.strictEqual(parsedEmbed.gid, 11169);

            assert.strictEqual(parsedEmbed.rarity, Rarities.Gamma);
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

    describe('#parseBurnEmbed', function () {
        const burnEmbedsArr = embeds.burn;

        it('should correctly parse a burn embed of a normal card', function () {
            const embed = new MessageEmbed(burnEmbedsArr[0]);
            const parsedEmbed = EmbedParser.parseBurnEmbed(embed);

            assert.strictEqual(parsedEmbed.cardNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uid, 8591)
            assert.strictEqual(parsedEmbed.gid, 15013)
            assert.strictEqual(parsedEmbed.claimedBy, 'JB')
            assert.strictEqual(parsedEmbed.age, 166)
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, Rarities.Zeta);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 11709);
            assert.strictEqual(parsedEmbed.influence, 40);
            assert.isNull(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'A Good Librarian Like a Good Shepherd');
            assert.strictEqual(parsedEmbed.altSeries, 'Daitoshokan no Hitsujikai');
            assert.strictEqual(parsedEmbed.sid, 1548);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 72);
        });

        it('should correctly parse a burn embed of a badged card', function () {
            const embed = new MessageEmbed(burnEmbedsArr[1]);
            const parsedEmbed = EmbedParser.parseBurnEmbed(embed);

            assert.strictEqual(parsedEmbed.cardNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Ririka Momobami (桃喰 リリカ)');

            assert.strictEqual(parsedEmbed.uid, 8364)
            assert.strictEqual(parsedEmbed.gid, 1996)
            assert.strictEqual(parsedEmbed.claimedBy, 'JB')
            assert.strictEqual(parsedEmbed.age, 177)
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-07');

            assert.strictEqual(parsedEmbed.rarity, Rarities.Alpha);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 210);
            assert.strictEqual(parsedEmbed.influence, 928);
            assert.strictEqual(parsedEmbed.badgeId, 82);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'Kakegurui: Compulsive Gambler');
            assert.strictEqual(parsedEmbed.altSeries, 'Kakegurui');
            assert.strictEqual(parsedEmbed.sid, 151);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });

        it('should correctly parse a burn embed of a badged, star enhanced card', function () {
            const embed = new MessageEmbed(burnEmbedsArr[2]);
            const parsedEmbed = EmbedParser.parseBurnEmbed(embed);

            assert.strictEqual(parsedEmbed.cardNumber, 2);
            assert.strictEqual(parsedEmbed.characterName, 'Alice Zuberg (アリス・ツーベルク)');

            assert.strictEqual(parsedEmbed.uid, 298)
            assert.strictEqual(parsedEmbed.gid, 2230)
            assert.strictEqual(parsedEmbed.claimedBy, 'O2Linn')
            assert.strictEqual(parsedEmbed.age, 323)
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-07-14');

            assert.strictEqual(parsedEmbed.rarity, Rarities.Alpha);
            assert.strictEqual(parsedEmbed.stars, 1);
            assert.strictEqual(parsedEmbed.influenceRank, 143);
            assert.strictEqual(parsedEmbed.influence, 1044);
            assert.strictEqual(parsedEmbed.badgeId, 126);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.altSeries, 'Sword Art Online');
            assert.strictEqual(parsedEmbed.sid, 73);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'chocobutternut');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official Art');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 4);
        });
    });

    describe('#parseViewEmbed', function () {
        const viewEmbedsArr = embeds.view;

        it('should correctly parse a normal view embed', function () {
            const embed = new MessageEmbed(viewEmbedsArr[0]);
            const parsedEmbed = EmbedParser.parseViewEmbed(embed);

            assert.strictEqual(parsedEmbed.cardNumber, 1);
            assert.strictEqual(parsedEmbed.characterName, 'Nagi Kodachi (小太刀　凪)');

            assert.strictEqual(parsedEmbed.uid, 8591);
            assert.strictEqual(parsedEmbed.gid, 15013);
            assert.strictEqual(parsedEmbed.claimedBy, 'JB')
            assert.strictEqual(parsedEmbed.age, 166)
            assert.strictEqual(parsedEmbed.dateClaimed, '2021-12-18');

            assert.strictEqual(parsedEmbed.rarity, Rarities.Zeta);
            assert.strictEqual(parsedEmbed.stars, 0);
            assert.strictEqual(parsedEmbed.influenceRank, 11709);
            assert.strictEqual(parsedEmbed.influence, 40);
            assert.isNull(parsedEmbed.badgeId);
            assert.isFalse(parsedEmbed.glitched);

            assert.strictEqual(parsedEmbed.engSeries, 'A Good Librarian Like a Good Shepherd');
            assert.strictEqual(parsedEmbed.altSeries, 'Daitoshokan no Hitsujikai');
            assert.strictEqual(parsedEmbed.sid, 1548);
            assert.strictEqual(parsedEmbed.sequence, 'MAIN');

            assert.strictEqual(parsedEmbed.owner, 'JB');

            assert.strictEqual(parsedEmbed.imageUploader, 'LaifuBot †');
            assert.strictEqual(parsedEmbed.imageCredit, 'Official');
            assert.strictEqual(parsedEmbed.burnRewardCounter, 0);

            assert.strictEqual(parsedEmbed.burnPercentage, 72);
        });
    });
});