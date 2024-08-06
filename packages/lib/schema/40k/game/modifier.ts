import { Entity } from '@/schema/40k';
import { Condition } from '@/schema/40k/game/condition';
import { ConditionGroup } from '@/schema/40k/game/conditionGroup';

export class Modifier extends Entity {
    type: string = '';

    value: number = -1;

    field: string = '';

    name: string | undefined;

    conditionGroups: ConditionGroup[] = [];

    conditions: Condition[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Modifier {}
}
