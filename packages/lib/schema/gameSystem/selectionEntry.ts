import { CategoryLink } from './categoryLink';
import { Constraint } from './constraint';
import { Cost } from './cost';
import { Modifier } from './modifier';
import { SelectionEntryGroup } from './selectionEntryGroup';

export class SelectionEntry {
    id: string;

    name: string;

    hidden: boolean;

    collective: boolean;

    import: boolean;

    type: string;

    private _costs: Cost[] = [];

    private _constraints: Constraint[] = [];

    private _categoryLinks: CategoryLink[] = [];

    private _selectionEntryGroups: SelectionEntryGroup[] = [];

    private _modifiers: Modifier[] = [];

    constructor(id: string, name: string, hidden: boolean, collective: boolean, shouldImport: boolean, type: string) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.collective = collective;
        this.import = shouldImport;
        this.type = type;
    }

    get costs(): Cost[] {
        return this._costs;
    }

    set cost(value: Cost) {
        this._costs.push(value);
    }

    get constraints(): Constraint[] {
        return this._constraints;
    }

    set constraint(value: Constraint) {
        this._constraints.push(value);
    }

    get categoryLinks(): CategoryLink[] {
        return this._categoryLinks;
    }

    set categoryLink(value: CategoryLink) {
        this._categoryLinks.push(value);
    }

    get selectionEntryGroups(): SelectionEntryGroup[] {
        return this._selectionEntryGroups;
    }

    set selectionEntryGroup(value: SelectionEntryGroup) {
        this._selectionEntryGroups.push(value);
    }

    get modifiers(): Modifier[] {
        return this._modifiers;
    }

    set modifier(value: Modifier) {
        this._modifiers.push(value);
    }
}
