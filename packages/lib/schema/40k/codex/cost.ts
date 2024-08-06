import { Entity } from '@/schema/40k';

export class Cost extends Entity {
    name: string = '';

    typeId: string = '';

    value: number = -1;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Cost {}
}
