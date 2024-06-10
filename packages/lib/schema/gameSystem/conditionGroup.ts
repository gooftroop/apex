import { Condition } from './condition';

export class ConditionGroup {
    type: string;

    private _conditions: Condition[] = [];

    constructor(type: string) {
        this.type = type;
    }

    get conditions(): Condition[] {
        return this._conditions;
    }

    set condition(value: Condition) {
        this._conditions.push(value);
    }
}
