# Changelog

# 3.0.1 - (2022-07-23)

-   Fix CluCharacter internal regular expression

# 3.0.0 - (2022-07-20)

## Bug Fixes

-   Fix error with view embeds for Scarlet/Event (https://github.com/minidomo/laifutil/pull/38) (https://github.com/minidomo/laifutil/pull/38/commits/41a11cf654527b55ed6776911100046322aa6ad2)
-   Parse negative days correctly (https://github.com/minidomo/laifutil/pull/38) (https://github.com/minidomo/laifutil/pull/38/commits/41a11cf654527b55ed6776911100046322aa6ad2)
-   Fix identifying glitched in ListCharacter (https://github.com/minidomo/laifutil/pull/44) (https://github.com/minidomo/laifutil/pull/44/commits/e9121b40d759ffe296d7c2d8f100d7430386c5e8)

## Features

-   Added `influenceSkinId` property (https://github.com/minidomo/laifutil/pull/45) (https://github.com/minidomo/laifutil/pull/45/commits/2bd14869b0f7ad0133b3e1ac4ff003e11a4269b0)
-   Added `medal` property and enum (https://github.com/minidomo/laifutil/pull/46) (https://github.com/minidomo/laifutil/pull/46/commits/14042ae8027204244267251535da0259b6fd5d7d)
-   Added enum for `sequence` property (https://github.com/minidomo/laifutil/pull/42) (https://github.com/minidomo/laifutil/pull/42/commits/a2c50898098d043eab1b8b11656a3389f6f7506a)
-   Added CharacterRarity related enums (https://github.com/minidomo/laifutil/pull/39) (https://github.com/minidomo/laifutil/pull/39/commits/248fc25586f6cc3df83ed804179601dfaf7a8bf7)

## Breaking Changes

v3 is compatibable with discord.js v13 and v14 and no longer has a dependence on discord.js.

### Type MessageEmbed Parameters

**All** instances of parameters of type `MessageEmbed` are now type `APIEmbed`. For example,

```diff
- new ListEmbed(embed)
+ new ListEmbed(embed.toJSON())
```

### isLaifuBot

Now only accepts a string argument.

```diff
- isLaifuBot(message)
+ isLaifuBot(message.author.id)
```

### Removed

`Rarity`, `RarityConstants`, `RarityContainer`, `hasRarityValue`, and `compareRarity` have been removed in favor of utilizing the enums `CharacterRarity`, `CharacterRaritySymbol`, and `CharacterRarityText`.

### RARITY_REGEX

Renamed to `CHARACTER_RARITY_REGEX`.

### resolveRarity

Renamed to `resolveCharacterRarity` and returns a `CharacterRarityKey`.

### RarityStatisticsCollection

Renamed to `CharacterRarityCollection`.

### RarityStatistics

Renamed to `CharacterRarityStatistics`.

### GachaBadgeEmbed.rarity

Type is now `BadgeRarityKey` rather than `BadgeRarity`.

# 2.1.1 - (2022-07-14)

## Features

-   Added userId to GachaBadgeEmbed (https://github.com/minidomo/laifutil/pull/33) (https://github.com/minidomo/laifutil/pull/33/commits/256acca159e29d70a4ee465de4276b4b03adf275)

# 2.1.0 - (2022-07-13)

## Bug Fixes

-   Fix error with ViewEmbed for special character cards (https://github.com/minidomo/laifutil/pull/16) (https://github.com/minidomo/laifutil/pull/16/commits/bce25fb740cf7094db5e040e967c8521e0ccb65e)

## Features

-   Added frame transfer identifiers (https://github.com/minidomo/laifutil/pull/18) (https://github.com/minidomo/laifutil/pull/18/commits/0da4eedb6bf780f29284046d6bc792e4d42590ad)
-   Added optional number property to Rarity (https://github.com/minidomo/laifutil/pull/21) (https://github.com/minidomo/laifutil/pull/21/commits/727a578443e2d6559c05fae1df46cc44945c04ad)
-   Added CluSearchEmbed (https://github.com/minidomo/laifutil/pull/23) (https://github.com/minidomo/laifutil/pull/23/commits/794e06254ffb728e72c9bbbc52763e6406702ee1)
-   Added bcompletion identifier (https://github.com/minidomo/laifutil/pull/24) (https://github.com/minidomo/laifutil/pull/24/commits/fb313d20daaeb8ec9ececaa449fdf37cf05ab104)
-   Added GachaBadgeEmbed (https://github.com/minidomo/laifutil/pull/25) (https://github.com/minidomo/laifutil/pull/25/commits/7d7c306147dc525b02334a5e1dbcb69eba00e6eb)
-   Added rank and rankRange property (https://github.com/minidomo/laifutil/pull/26) (https://github.com/minidomo/laifutil/pull/26/commits/4acdd69dc648fb29249973a385500ec6f7535478)

## Documentation

-   Deprecate influenceRank and influenceRankRange (https://github.com/minidomo/laifutil/pull/26) (https://github.com/minidomo/laifutil/pull/26/commits/4acdd69dc648fb29249973a385500ec6f7535478)

## Typings

-   userId can be undefined for default Discord avatars (https://github.com/minidomo/laifutil/pull/22) (https://github.com/minidomo/laifutil/pull/22/commits/211ffa5f7e2efc1cfeb17ab9c11ae340a63e7eba)

# 2.0.1 - (2022-07-05)

## Refractor

-   Add Embed to class name ([#15](https://github.com/minidomo/laifutil/pull/15)) ([e2a3746](https://github.com/minidomo/laifutil/commit/e2a37466613195ed460653b951846ce6d234b211))

# 2.0.0 - (2022-07-04)

## Bug Fixes

-   Label entries in RarityConstants as constants ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Ensure .influenceRankRange bounds are assigned correctly ([#11](https://github.com/minidomo/laifutil/pull/11)) ([7d0c53d](https://github.com/minidomo/laifutil/commit/7d0c53d42f9427405e6f5715de0a08d0e677505e))
-   Fix rarity regular expression matching to zeta when passing an ultra symbol ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))

## Documentation

-   Added the word inclusive to Bounds ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Fix typo in WishlistCharacter ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Added class documentation for ListEmbed and AuctionEmbed ([#12](https://github.com/minidomo/laifutil/pull/12)) ([e22d78e](https://github.com/minidomo/laifutil/commit/e22d78e3a087972df1eb7aee4e2fed0123a52763))

## Features

-   Added identifier function for Casino embeds ([#6](https://github.com/minidomo/laifutil/pull/6)) ([3be52b3](https://github.com/minidomo/laifutil/commit/3be52b3ad5da94478130c26fa84e3cfb0da9f3ea))
-   Added identifier functions for Flu commands ([#7](https://github.com/minidomo/laifutil/pull/7)) ([ebe35d3](https://github.com/minidomo/laifutil/commit/ebe35d38c4298d2836e6fcb9668487de126be0ed))
-   Added user id to DropOpenedEmbed ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Added user id to BasePersonalSimpleCharacterEmbed ([#10](https://github.com/minidomo/laifutil/pull/10)) ([5366157](https://github.com/minidomo/laifutil/commit/5366157e37f862a1eb9959f26ea7315f1b98018a))
-   Added ListEmbed for list command ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
-   Added WishlistCharacter class for WishlistListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
-   Added AuctionEmbed for auction command ([#12](https://github.com/minidomo/laifutil/pull/12)) ([a559623](https://github.com/minidomo/laifutil/commit/a559623c0f6d64051afefa7ac5a223718a537436))

## Refractor

-   Remove default values in classes ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Renamed classes: BaseFullCharacter, BaseSimpleCharacter ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Renamed interfaces: CharacterRarityInfo, CharacterSeriesInfo, CharacterRarityInfo, CharacterRarityInfoCollection ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Move fields from WishlistListEmbed to BaseListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
-   Renamed interface: Character ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
-   Rename USER_ID to LAIFU_USER_ID ([#12](https://github.com/minidomo/laifutil/pull/12)) ([b4a981f](https://github.com/minidomo/laifutil/commit/b4a981fc177b1250e1a5ee94f7d4170986e07816))
-   Capitalize rarity constants ([#14](https://github.com/minidomo/laifutil/pull/14)) ([7b8178b](https://github.com/minidomo/laifutil/commit/7b8178bc86db1befcfb51b527d9898a5dbe48bf9))

## Testing

-   Added Casino identifier tests ([#6](https://github.com/minidomo/laifutil/pull/6)) ([3be52b3](https://github.com/minidomo/laifutil/commit/3be52b3ad5da94478130c26fa84e3cfb0da9f3ea))
-   Added Flu identifier tests ([#7](https://github.com/minidomo/laifutil/pull/7)) ([ebe35d3](https://github.com/minidomo/laifutil/commit/ebe35d38c4298d2836e6fcb9668487de126be0ed))
-   Updated tests for refractored code ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Update tests for burn, gacha, view embeds ([#10](https://github.com/minidomo/laifutil/pull/10)) ([5366157](https://github.com/minidomo/laifutil/commit/5366157e37f862a1eb9959f26ea7315f1b98018a))
-   Added test for rarity regular expression matching ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
-   Added tests for ListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))

## Typings

-   Created types directory ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
-   Added interfaces: Character, SeriesTitle ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))

## Breaking Changes

## General

### USER_ID

Renamed to `LAIFU_USER_ID`.

```diff
- laifutil.USER_ID
+ laifutil.LAIFU_USER_ID
```

## Rarity

### Rarity.text

Renamed to `TEXT`.

```diff
- RarityConstants.ALPHA.text
+ RarityConstants.ALPHA.TEXT
```

### Rarity.symbol

Renamed to `SYMBOL`.

```diff
- RarityConstants.ALPHA.symbol
+ RarityConstants.ALPHA.SYMBOL
```

## BaseFullCharacter

Replaced with `BasePersonalFullCharacterEmbed` class.

```diff
- character instanceof BaseFullCharacter
+ character instanceof BasePersonalFullCharacterEmbed
```

## BaseSimpleCharacter

Replaced with `BasePersonalSimpleCharacterEmbed` class.

```diff
- character instanceof BaseSimpleCharacter
+ character instanceof BasePersonalSimpleCharacterEmbed
```

### BaseSimpleCharacter.series.englishTitle

Moved into `SeriesTitle` object, `title`, as `english`.

```diff
- character.series.englishTitle
+ character.series.title.english
```

### BaseSimpleCharacter.series.alternateTitle

Moved into `SeriesTitle` object, `title`, as `alternate`.

```diff
- character.series.alternateTitle
+ character.series.title.alternate
```

## WishlistListEmbed

### WishlistListEmbed.charactersWanted

Moved into super class `BaseListEmbed` as `entities`.

```diff
- embed.charactersWanted
+ embed.entities
```

## CharacterRarityInfoCollection

Renamed to `RarityStatisticsCollection`.

```diff
- const o: CharacterRarityInfoCollection = { ... }
+ const o: RarityStatisticsCollection = { ... }
```

## CharacterRarityInfo

Renamed to `RarityStatistics`.

```diff
- const o: CharacterRarityInfo = { ... }
+ const o: RarityStatistics = { ... }
```

## CharacterImageInfo

Renamed to `ImageInfo`.

```diff
- const o: CharacterImageInfo = { ... }
+ const o: ImageInfo = { ... }
```

## CharacterSeriesInfo

Renamed to `Series`.

```diff
- const o: CharacterSeriesInfo = { ... }
+ const o: Series = { ... }
```

## WishlistCharacter

Now a class rather than an interface.

```diff
- const character: WishlistCharacter = { ... }
+ const character = new WishlistCharacter('15926 | Ushio Kofune [小舟 潮]・27:inf:')
```

### WishlistCharacter.gid

Renamed to `globalId`.

```diff
- character.gid
+ character.globalId
```
