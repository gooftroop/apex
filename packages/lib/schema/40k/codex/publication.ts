import { Entity } from '@/schema/40k';

export class Publication extends Entity {
    name: string = '';

    publisher: string = '';

    date: Date | undefined;

    url: string = '';

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Publication {}
}
