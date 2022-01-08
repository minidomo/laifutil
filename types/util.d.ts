/**
 * Options for the hasLaifuEmbed funcction
 */
export type LaifuEmbedOptions = {
    /**
     * the time in milliseconds to wait before performing the function
     */
    delay?: number | undefined;
    /**
     * ensure the embed is loaded entirely
     */
    loaded?: boolean | undefined;
    /**
     * allow duplicate embed previously seen to be returned
     */
    duplicates?: boolean | undefined;
};
/**
 * Checks if the given embed's images/gifs, if any, are loaded
 * @param {import('discord.js').MessageEmbed} embed a Discord embed
 * @returns {boolean}
 */
declare function isLoaded(embed: import("discord.js").MessageEmbed): boolean;
/**
 * Checks if the given embed's images/gifs, if any, are loaded
 * @param {import('discord.js').MessageEmbed} embed a Discord embed
 * @returns {boolean}
 */
declare function isLoaded(embed: import("discord.js").MessageEmbed): boolean;
/**
 * Checks if the given message has a Laifu embed and meets the criteria given in `options`
 * @param {import('discord.js').Message} message a Discord message
 * @param {LaifuEmbedOptions} [options={}] options for this function
 * @returns {Promise<?import('discord.js').Message>}
 */
declare function hasLaifuEmbed(message: import("discord.js").Message<boolean>, options?: LaifuEmbedOptions): Promise<import("discord.js").Message<boolean>>;
/**
 * Checks if the given message has a Laifu embed and meets the criteria given in `options`
 * @param {import('discord.js').Message} message a Discord message
 * @param {LaifuEmbedOptions} [options={}] options for this function
 * @returns {Promise<?import('discord.js').Message>}
 */
declare function hasLaifuEmbed(message: import("discord.js").Message<boolean>, options?: LaifuEmbedOptions): Promise<import("discord.js").Message<boolean>>;
export {};
//# sourceMappingURL=util.d.ts.map