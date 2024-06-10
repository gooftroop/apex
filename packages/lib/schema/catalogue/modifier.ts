import { Condition } from './condition';
import { Node } from '../types';

export class Modifier implements Node {
    type: string;

    value: string;

    field: string;

    id: string | undefined;

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
