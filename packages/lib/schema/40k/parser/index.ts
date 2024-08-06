/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { OutputBuilder } from '@/schema/40k/parser/schemaBuilder';
import { Entity } from '@/schema/40k';
// @ts-expect-error no types are provided yet
import XMLParser from 'fast-xml-parser/src/v5/XMLParser';

export const parse = <E extends Entity>(root: Entity, xml: string): E => {
    const parser = new XMLParser({
        OutputBuilder: new OutputBuilder({
            Schema: root,
        }),
    });

    const schema = parser.parse(xml) as E;

    return schema;
};
