import { Constraint } from './constraint';
import { Modifier } from './modifier';

export class CategoryLink {
    id: string;

    name: string;

    hidden: boolean;

    targetId: string;

    primary: boolean | undefined;

    private _constraints: Constraint[] = [];

    private _modifiers: Modifier[] = [];

    constructor(id: string, name: string, hidden: boolean, targetId: string, primary?: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.targetId = targetId;
        this.primary = primary;
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
