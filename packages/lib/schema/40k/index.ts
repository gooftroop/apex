export type PlainObject = Record<string, unknown> | Array<PlainObject>;

export abstract class Entity {
    id: string = '';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- by default we assume the entry does not have children
    createChild(_type: string, _attributes: Record<string, string | number | boolean>): Entity | null {
        return null;
    }

    abstract toObject(): PlainObject;

    abstract toJSON(): string;
}
