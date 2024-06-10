import { Modifier } from './modifier';

export class InfoLink {
    id: string;

    name: string;

    hidden: boolean;

    targetId: string;

    type: string;

    private _modifiers: Modifier[] = [];

    constructor(id: string, name: string, hidden: boolean, targetId: string, type: string) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.targetId = targetId;
        this.type = type;
    }

    get modifiers(): Modifier[] {
        return this._modifiers;
    }

    set modifier(modifier: Modifier) {
        this._modifiers.push(modifier);
    }
}
