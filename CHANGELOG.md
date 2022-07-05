# Changelog

# 2.0.0 - (2022-07-04)

## Bug Fixes
- Label entries in RarityConstants as constants ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Ensure .influenceRankRange bounds are assigned correctly ([#11](https://github.com/minidomo/laifutil/pull/11)) ([7d0c53d](https://github.com/minidomo/laifutil/commit/7d0c53d42f9427405e6f5715de0a08d0e677505e))
- Fix rarity regular expression matching to zeta when passing an ultra symbol ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))

## Documentation
- Added the word inclusive to Bounds ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Fix typo in WishlistCharacter ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Added class documentation for ListEmbed and AuctionEmbed ([#12](https://github.com/minidomo/laifutil/pull/12)) ([e22d78e](https://github.com/minidomo/laifutil/commit/e22d78e3a087972df1eb7aee4e2fed0123a52763))

## Features
- Added identifier function for Casino embeds ([#6](https://github.com/minidomo/laifutil/pull/6)) ([3be52b3](https://github.com/minidomo/laifutil/commit/3be52b3ad5da94478130c26fa84e3cfb0da9f3ea))
- Added identifier functions for Flu commands ([#7](https://github.com/minidomo/laifutil/pull/7)) ([ebe35d3](https://github.com/minidomo/laifutil/commit/ebe35d38c4298d2836e6fcb9668487de126be0ed))
- Added user id to DropOpenedEmbed ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Added user id to BasePersonalSimpleCharacterEmbed ([#10](https://github.com/minidomo/laifutil/pull/10)) ([5366157](https://github.com/minidomo/laifutil/commit/5366157e37f862a1eb9959f26ea7315f1b98018a))
- Added ListEmbed for list command ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
- Added WishlistCharacter class for WishlistListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
- Added AuctionEmbed for auction command ([#12](https://github.com/minidomo/laifutil/pull/12)) ([a559623](https://github.com/minidomo/laifutil/commit/a559623c0f6d64051afefa7ac5a223718a537436))

## Refractor
- Remove default values in classes ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Renamed classes: BaseFullCharacter, BaseSimpleCharacter ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Renamed interfaces: CharacterRarityInfo, CharacterSeriesInfo, CharacterRarityInfo, CharacterRarityInfoCollection ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Move fields from WishlistListEmbed to BaseListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
- Renamed interface: Character ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
- Rename USER_ID to LAIFU_USER_ID ([#12](https://github.com/minidomo/laifutil/pull/12)) ([b4a981f](https://github.com/minidomo/laifutil/commit/b4a981fc177b1250e1a5ee94f7d4170986e07816))
- Capitalize rarity constants ([#14](https://github.com/minidomo/laifutil/pull/14)) ([7b8178b](https://github.com/minidomo/laifutil/commit/7b8178bc86db1befcfb51b527d9898a5dbe48bf9))

## Testing
- Added Casino identifier tests ([#6](https://github.com/minidomo/laifutil/pull/6)) ([3be52b3](https://github.com/minidomo/laifutil/commit/3be52b3ad5da94478130c26fa84e3cfb0da9f3ea))
- Added Flu identifier tests ([#7](https://github.com/minidomo/laifutil/pull/7)) ([ebe35d3](https://github.com/minidomo/laifutil/commit/ebe35d38c4298d2836e6fcb9668487de126be0ed))
- Updated tests for refractored code ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Update tests for burn, gacha, view embeds ([#10](https://github.com/minidomo/laifutil/pull/10)) ([5366157](https://github.com/minidomo/laifutil/commit/5366157e37f862a1eb9959f26ea7315f1b98018a))
- Added test for rarity regular expression matching ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))
- Added tests for ListEmbed ([#11](https://github.com/minidomo/laifutil/pull/11)) ([07cf688](https://github.com/minidomo/laifutil/commit/07cf688aeaa7f20b781dab4bd14d22b6e1ebaf32))

## Typings
- Created types directory ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))
- Added interfaces: Character, SeriesTitle ([#9](https://github.com/minidomo/laifutil/pull/9)) ([397f4ea](https://github.com/minidomo/laifutil/commit/397f4ea8e30b3987d5dcc29dd5b2b657f61b2e4d))

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
