import type { MessageEmbed } from 'discord.js';

const CARD_TITLE_REGEX = /(?:([^\s]+) )?#([1-9]) (.+)/;

export function isGachaCharacterEmbed(embed: MessageEmbed) {
    if (!embed.title) return false;
    const validTitle = CARD_TITLE_REGEX.test(embed.title);
    const validField = embed.fields.some(val => val.name === 'Account');
    return validTitle && validField;
}

export function isBurnEmbed(embed: MessageEmbed) {
    if (!embed.title) return false;
    const validTitle = CARD_TITLE_REGEX.test(embed.title);
    const field = embed.fields.find(val => val.name === 'Guide');
    if (!field) return false;
    const validField = field.value.includes('burn');
    return validTitle && validField;
}

export function isViewEmbed(embed: MessageEmbed) {
    if (!embed.title) return false;
    const validTitle = CARD_TITLE_REGEX.test(embed.title);
    const validAuthor = embed.author?.name.endsWith('is Viewing...');
    const validField = embed.fields.some(val => val.name === 'Guide');
    return validTitle && validAuthor && !validField;
}

export function isAuctionEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Auction Card';
    return validTitle === true;
}

export function isInfoEmbed(embed: MessageEmbed) {
    const validAuthor = embed.author?.name === 'Information Card';
    const validField = embed.fields.some(val => val.name === 'Collections');
    return validAuthor && validField;
}

export function isBadgePreviewEmbed(embed: MessageEmbed) {
    if (!embed.title) return false;
    const validTitle = CARD_TITLE_REGEX.test(embed.title);
    const validAuthor = embed.author?.name.endsWith('is Viewing...');
    const field = embed.fields.find(val => val.name === 'Guide');
    if (!field) return false;
    const validField = field.value.includes('apply');
    return validTitle && validAuthor && validField;
}

export function isBluEmbed(embed: MessageEmbed) {
    const validAuthor = embed.author?.name === 'Detailed Badge View';
    return validAuthor === true;
}

export function isRewardBoxEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.endsWith('- Reward Box');
    return validTitle === true;
}

export function isGachaBadgeEmbed(embed: MessageEmbed) {
    const validDescription = embed.description?.includes('You unboxed a rare badge!');
    return validDescription === true;
}

export function isCdEmbed(embed: MessageEmbed) {
    const validField = embed.fields.some(val => val.name === 'Cooldowns');
    return validField === true;
}

export function isListEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.endsWith('- Collection');
    return validTitle === true;
}

export function isDropCodeEmbed(embed: MessageEmbed) {
    const validDescription = embed.description?.includes('Dropped a Case File');
    return validDescription === true;
}

export function isDropCompletionEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Case File Opened';
    return validTitle === true;
}

export function isDropCooldownEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Drop: Cooldown';
    return validTitle === true;
}

export function isGachaLoadEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Feeling Lucky?';
    return validTitle === true;
}

export function isDailyClaimEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Daily: Claimed';
    return validTitle === true;
}

export function isDailyCooldownEmbed(embed: MessageEmbed) {
    const validTitle = embed.title === 'Daily: Cooldown';
    return validTitle === true;
}

export function isArenaInitialEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('ARENA: ');
    const validImage = embed.image !== null;
    const field = embed.fields.find(val => val.name === 'Attacker');
    if (!field) return false;
    const validField = field.value.includes('+');
    return validTitle && !validField && !validImage;
}

export function isArenaResultEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('ARENA: ');
    const field = embed.fields.find(val => val.name === 'Attacker');
    if (!field) return false;
    const validField = field.value.includes('+');
    return validTitle && validField;
}

export function isArenaGifEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('ARENA: ');
    const validImage = embed.image !== null;
    return validTitle && validImage;
}

export function isFavoriteEmbed(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Success');
    if (!field) return false;
    const validField = field.value.includes('favorite');
    return validField === true;
}

export function isTopEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('TOP 500');
    return validTitle === true;
}

export function isVoteCooldownEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('Vote: Cooldown');
    return validTitle === true;
}

export function isCluSearchEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('- Searching');
    return validTitle === true;
}

export function isCardWorkshopEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('Card Workshop');
    return validTitle === true;
}

export function isWishlistEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('- Wishlist');
    return validTitle === true;
}

export function isWishlistAddEmbed(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Success');
    if (!field) return false;
    return field.value.includes('wishlist') && field.value.includes('set');
}

export function isWishlistRemoveEmbed(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Success');
    if (!field) return false;
    return field.value.includes('wishlist') && field.value.includes('removed');
}

export function isLookUpErrorEmbed(embed: MessageEmbed) {
    const field = embed.fields.find(val => val.name === 'Error');
    if (!field) return false;
    const validField = field.value.includes('Lookup');
    return validField;
}

export function isMedalDropActiveEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('Medal Drop : Active!');
    return validTitle === true;
}

export function isMedalDropClosedEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('Medal Drop : Closed!');
    return validTitle === true;
}

export function isBurnRewardEmbed(embed: MessageEmbed) {
    const validTitle = embed.title?.includes('Burn: Rewards');
    return validTitle === true;
}
