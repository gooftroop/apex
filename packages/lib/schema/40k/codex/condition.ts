import { Entity } from '@/schema/40k';

export class Condition extends Entity {
    type: string = '';

    value: string = '';

    field: string = '';

    scope: string = '';

    childId: string = '';

    shared: boolean = false;

    includeChildForces: boolean = false;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Condition {}
}
