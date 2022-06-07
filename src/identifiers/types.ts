import type { MessageEmbed } from 'discord.js';

export interface Selection {
    isMenuEmbed: (embed: MessageEmbed) => boolean;
    isConfirmationEmbed: (embed: MessageEmbed) => boolean;
}

export interface Event {
    isActiveEmbed: (embed: MessageEmbed) => boolean;
    isClosedEmbed: (embed: MessageEmbed) => boolean;
}
