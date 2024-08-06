import { Entity } from '@/schema/40k';

export class Publication extends Entity {
    name: string = '';

    shortName: string = '';

    publisherUrl: string | undefined;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Publication {}
}
