import { Condition } from './condition';
import { Node } from '../types';

export class ConditionGroup implements Node {
    type: string;

    id: string | undefined;

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
