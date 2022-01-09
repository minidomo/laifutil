export const Identifier: {
    isGachaCharacterEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isBurnEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isViewEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isAuctionEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isInfoEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isBadgePreviewEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isBluEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isRewardBoxEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isGachaBadgeEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isCdEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isListEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isDropCodeEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isDropCompletionEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isDropCooldownEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isGachaLoadEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isDailyClaimEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isDailyCooldownEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isArenaInitialEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isArenaResultEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isArenaGifEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isFavoriteEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isTopEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isVoteCooldownEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isCluSearchEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isCardWorkshopEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isWishlistEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isWishlistAddEmbed(embed: import("discord.js").MessageEmbed): boolean;
    isWishlistRemoveEmbed(embed: import("discord.js").MessageEmbed): boolean;
};
export const Character: {
    getName(embed: import("discord.js").MessageEmbed): string;
    getCardNumber(embed: import("discord.js").MessageEmbed): number;
    getFavoriteEmote(embed: import("discord.js").MessageEmbed): string;
    getUid(embed: import("discord.js").MessageEmbed): number;
    getGid(embed: import("discord.js").MessageEmbed): number;
    getEngSeries(embed: import("discord.js").MessageEmbed): string;
    getJpSeries(embed: import("discord.js").MessageEmbed): string;
    getSid(embed: import("discord.js").MessageEmbed): string;
    getRarity(embed: import("discord.js").MessageEmbed): string;
    getStarNumber(embed: import("discord.js").MessageEmbed): number;
    isGlitched(embed: import("discord.js").MessageEmbed): boolean;
    getBadgeId(embed: import("discord.js").MessageEmbed): number;
};
export const Properties: {
    ID: string;
};
export const Rarity: {
    Alpha: {
        text: string;
        symbol: string;
    };
    Beta: {
        text: string;
        symbol: string;
    };
    Gamma: {
        text: string;
        symbol: string;
    };
    Delta: {
        text: string;
        symbol: string;
    };
    Epsilon: {
        text: string;
        symbol: string;
    };
    Zeta: {
        text: string;
        symbol: string;
    };
    Ultra: {
        text: string;
        symbol: string;
    };
    Scarlet: {
        text: string;
        symbol: string;
    };
    Event: {
        text: string;
        symbol: string;
    };
    Special: {
        text: string;
        symbol: string;
    };
};
export const Util: {
    isLoaded(embed: import("discord.js").MessageEmbed): boolean;
    hasLaifuEmbed(message: import("discord.js").Message<boolean>, options?: import("./util").LaifuEmbedOptions): Promise<import("discord.js").Message<boolean>>;
    cleanCharacterName(name: string): string;
};
export const EmbedParser: {
    parseWishlistEmbed(embed: import("discord.js").MessageEmbed): import("./structures/WishlistEmbed");
};
//# sourceMappingURL=index.d.ts.map