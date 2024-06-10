import { Condition } from './condition';
import { ConditionGroup } from './conditionGroup';

export class Modifier {
    type: string;

    value: number;

    field: string;

    id: string | undefined;

    private _conditionGroups: ConditionGroup[] = [];

    private _conditions: Condition[] = [];

    constructor(type: string, value: number, field: string, id?: string) {
        this.type = type;
        this.value = value;
        this.field = field;
        this.id = id;
    }

    get conditionGroups(): ConditionGroup[] {
        return this._conditionGroups;
    }

    set conditionGroup(value: ConditionGroup) {
        this._conditionGroups.push(value);
    }

    get conditions(): Condition[] {
        return this._conditions;
    }

    set condition(value: Condition) {
        this._conditions.push(value);
    }
}
