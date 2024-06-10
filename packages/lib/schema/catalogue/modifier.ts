import { Condition } from './condition';

export class Modifier {
    type: string;

    value: string;

    field: string;

    private _conditions: Condition[] = [];

    constructor(type: string, value: string, field: string) {
        this.type = type;
        this.value = value;
        this.field = field;
    }

    get conditions(): Condition[] {
        return this._conditions;
    }

    set condition(condition: Condition) {
        this._conditions.push(condition);
    }
}
