import { BaseOutputBuilder, Tag } from 'fast-xml-parser/src/v5/OutputBuilders/BaseOutputBuilder';
import { ValueParser } from 'fast-xml-parser/src/v5/valueParsers';
import { buildOptions, registerCommonValueParsers } from 'fast-xml-parser/src/v5/OutputBuilders/ParserOptionsBuilder';
import { Entity } from '@/schema/40k';

type BuilderOptions = Record<string, unknown> & { Schema: Entity };

export class OutputBuilder {
    options: BuilderOptions;

    registeredParsers: Record<string, ValueParser>;

    constructor(builderOptions: BuilderOptions) {
        this.options = buildOptions(builderOptions) as BuilderOptions;
        this.registeredParsers = registerCommonValueParsers();
    }

    public registerValueParser(name: string, parserInstance: ValueParser) {
        this.registeredParsers[name] = parserInstance;
    }

    public getInstance(parserOptions = {}) {
        return new SchemaBuilder(parserOptions, this.options, this.registeredParsers);
    }
}

class SchemaBuilder implements BaseOutputBuilder<Entity> {
    parent: Entity;

    root: Entity;

    parserOptions: Record<string, unknown>;

    builderOptions: BuilderOptions;

    registeredParsers: Record<string, ValueParser>;

    constructor(
        parserOptions: Record<string, unknown>,
        builderOptions: BuilderOptions,
        registeredParsers: Record<string, ValueParser>,
    ) {
        this.parserOptions = parserOptions;
        this.builderOptions = builderOptions;
        this.registeredParsers = registeredParsers;
        this.root = builderOptions.Schema;
        this.parent = this.root;
    }

    addAttribute(name: string, value: unknown): void {
        console.log('addAttribute', name, value);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addPi(pi: string): void {
        console.log('addPi', pi);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addTag(tag: Tag): void {
        console.log('addTag', tag);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    closeTag(): void {
        console.log('closeTag');
        // eslint-disable-next-line no-debugger
        debugger;
    }

    parseValue<V extends string | number | boolean>(val: V, valParsers: ValueParser[]): V {
        console.log('parseValue', val, valParsers);
        // eslint-disable-next-line no-debugger
        debugger;

        return val;
    }

    _addChild<V extends string | number | boolean>(key: string, val: V): void {
        console.log('_addChild', key, val);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addValue<V extends string | number | boolean>(val: V): void {
        console.log('addValue', val);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addComment(text: string): void {
        console.log('addComment', text);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addCdata(text: string): void {
        console.log('addCdata', text);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addRawValue(text: string): void {
        console.log('addRawValue', text);
        // eslint-disable-next-line no-debugger
        debugger;
    }

    addDeclaration(): void {
        console.log('addDeclaration');
        // eslint-disable-next-line no-debugger
        debugger;
    }

    getOutput(): Entity {
        // eslint-disable-next-line no-debugger
        debugger;
        return this.root;
    }
}
