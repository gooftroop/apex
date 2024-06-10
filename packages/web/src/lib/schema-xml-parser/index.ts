import { OutputBuilder } from '@/lib/schema-xml-parser/schemaBuilder';
import { XMLParser } from 'fast-xml-parser';
import type { Node } from 'apex-lib/schema';

export const parse = <N extends Node>(xml: string): N => {
    const parser = new XMLParser({
        // @ts-expect-error - this is a valid option; just not typed in the library
        OutputBuilder: new OutputBuilder(),
    });
    const schema = parser.parse(xml) as N;

    return schema;
};
