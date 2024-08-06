import { Entity } from '@/schema/40k';

export class Constraint extends Entity {
    field: string = '';

    scope: string = '';

    value: number = -1;

    percentValue: boolean = false;

    shared: boolean = false;

    includeChildSelections: boolean = false;

    includeChildForces: boolean = false;

    type: string = '';

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Constraint {}
}
