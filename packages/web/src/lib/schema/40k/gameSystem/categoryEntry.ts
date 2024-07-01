import { Node } from '../types';
import { Constraint } from './constraint';
import { Modifier } from './modifier';

export class CategoryEntry implements Node {
    id: string;

    name: string;

    hidden: boolean;

    private _constraints: Constraint[] = [];

    private _modifiers: Modifier[] = [];

    constructor(id: string, name: string, hidden: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
    }

    get constraints(): Constraint[] {
        return this._constraints;
    }

    set constraint(value: Constraint) {
        this._constraints.push(value);
    }

    get modifiers(): Modifier[] {
        return this._modifiers;
    }

    set modifier(value: Modifier) {
        this._modifiers.push(value);
    }
}
