import { Entity } from '@/schema/40k';

export class Condition extends Entity {
    type: string = '';

    value: number = -1;

    field: string = '';

    scope: string = '';

    childId: string = '';

    shared: boolean = false;

    includeChildSelections: boolean = false;

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Condition {}
}
