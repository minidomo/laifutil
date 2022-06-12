import { MessageEmbedOptions } from 'discord.js';

export function MEO(obj: object): MessageEmbedOptions {
    return obj as unknown as MessageEmbedOptions;
}

export function MEOArr(arr: object[]): MessageEmbedOptions[] {
    return arr as unknown as MessageEmbedOptions[];
}
