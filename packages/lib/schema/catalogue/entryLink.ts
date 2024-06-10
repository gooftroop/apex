import { Constraint } from './constraint';
import { Modifier } from './modifier';

export class EntryLink {
    id: string;

    name: string;

    hidden: boolean;

    collective: boolean;

    import: boolean;

    targetId: string;

    type: string;

    private _constraints: Constraint[] = [];

    private _modifiers: Modifier[] = [];

    constructor(
        id: string,
        name: string,
        hidden: boolean,
        collective: boolean,
        importLink: boolean,
        targetId: string,
        type: string,
    ) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.collective = collective;
        this.import = importLink;
        this.targetId = targetId;
        this.type = type;
    }

    get constraints(): Constraint[] {
        return this._constraints;
    }

    set constraint(constraint: Constraint) {
        this._constraints.push(constraint);
    }

    get modifiers(): Modifier[] {
        return this._modifiers;
    }

    set modifier(modifier: Modifier) {
        this._modifiers.push(modifier);
    }
}
