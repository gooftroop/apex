import { Entity } from '@/schema/40k';

export class Characteristic extends Entity {
    description: string = '';

    name: string = '';

    typeId: string = '';

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        if (type === 'description') {
            this.description = attributes.description as string;
        }

        return null;
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Characteristic {}
}
