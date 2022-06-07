import { assert } from 'chai';
import { MessageEmbed, MessageEmbedOptions } from 'discord.js';
import { identifiers } from '../../dist';

function identifyEmbed(embed: MessageEmbed): string[] {
    const identities: string[] = [];

    type IsEmbedFunction = (boolean: MessageEmbed) => boolean;
    type IdentifierObject = { [key: string]: IdentifierObject | IsEmbedFunction };

    function recursiveIdentifyEmbed(obj: IdentifierObject, path: string) {
        Object.keys(obj)
            .forEach(key => {
                if (typeof obj[key] === 'object') {
                    recursiveIdentifyEmbed(obj[key] as IdentifierObject, `${path}.${key}`);
                } else {
                    const f = obj[key] as IsEmbedFunction;
                    if (f(embed)) {
                        identities.push(`${path}.#{key}`);
                    }
                }
            });
    }

    recursiveIdentifyEmbed(identifiers as unknown as IdentifierObject, '');

    return identities;
}

export function test(exampleEmbeds: MessageEmbedOptions[], f: (arg: MessageEmbed) => boolean) {
    exampleEmbeds.map(e => new MessageEmbed(e))
        .forEach((embed, i) => {
            const identities = identifyEmbed(embed);

            assert.strictEqual(identities.length, 1, `index: ${i} | ${identities}`);
            assert.isTrue(f(embed), `index: ${i}`);
        });
}
