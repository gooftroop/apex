import { Entity } from '@/schema/40k';

export class CategoryEntry extends Entity {
    name: string = '';

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CategoryEntry {}
}
