import { Entity } from '@/schema/40k';
import { Constraint } from './constraint';
import { Modifier } from './modifier';

export class CategoryLink extends Entity {
    name: string = '';

    hidden: boolean = true;

    targetId: string = '';

    primary: boolean | undefined;

    constraints: Constraint[] = [];

    modifiers: Modifier[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CategoryLink {}
}
