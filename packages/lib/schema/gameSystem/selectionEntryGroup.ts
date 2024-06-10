import { Constraint } from './constraint';
import { SelectionEntry } from './selectionEntry';

export class SelectionEntryGroup {
    id: string;

    name: string;

    hidden: boolean;

    collective: boolean;

    import: boolean;

    private _constraints: Constraint[] = [];

    private _selectionEntryies: SelectionEntry[] = [];

    constructor(id: string, name: string, hidden: boolean, collective: boolean, shouldImport: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.collective = collective;
        this.import = shouldImport;
    }

    get constraints(): Constraint[] {
        return this._constraints;
    }

    set constraint(value: Constraint) {
        this._constraints.push(value);
    }

    get selectionEntries(): SelectionEntry[] {
        return this._selectionEntryies;
    }

    set selectionEntry(value: SelectionEntry) {
        this._selectionEntryies.push(value);
    }
}
