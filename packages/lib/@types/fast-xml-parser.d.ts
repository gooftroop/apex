declare module 'fast-xml-parser/src/v5/valueParsers' {
    interface ValueParser<R extends string | number | boolean = unknown> {
        parse(val: V): R;
    }
}

declare module 'fast-xml-parser/src/v5/OutputBuilders/ParserOptionsBuilder' {
    import { ValueParser } from 'fast-xml-parser/src/v5/valueParsers';

    export const buildOptions: (builderOptions: Record<string, unknown>) => Record<string, unknown>;

    export const registerCommonValueParsers: () => Record<string, ValueParser>;
}

declare module 'fast-xml-parser/src/v5/OutputBuilders/BaseOutputBuilder' {
    export interface Tag {
        name: string;
    }

    export interface BaseOutputBuilder<T> {
        addAttribute(name: string, value: unknown): void;

        addTag(tag: Tag): void;

        closeTag(): void;

        /**
         * parse value by chain of parsers
         * @param {string} val
         * @returns {any} parsed value if matching parser found
         */
        parseValue<V extends string | number | boolean>(
            val: V,
            valParsers: import('fast-xml-parser/src/v5/valueParsers').ValueParser[],
        ): V;

        /**
         * To add a nested empty tag.
         * @param {string} key
         * @param {any} val
         */
        _addChild<V extends string | number | boolean>(key: string, val: V): void;

        /**
         * skip the comment if property is not set
         */
        addComment(text: string): void;

        //store CDATA separately if property is set
        //otherwise add to tag's value
        addCdata(text: string): void;

        addRawValue(text: string): void;

        addDeclaration(): void;

        getOutput(): T;
    }
}
