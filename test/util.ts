import { APIEmbed } from 'discord-api-types/v10';

export function asAPIEmbed(obj: object): APIEmbed {
    return obj as unknown as APIEmbed;
}

export function asAPIEmbedArr(arr: object[]): APIEmbed[] {
    return arr as unknown as APIEmbed[];
}
