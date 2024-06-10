import { CategoryLink } from './categoryLink';
import { Constraint } from './constraint';
import { Cost } from './cost';
import { EntryLink } from './entryLink';
import { InfoLink } from './infoLink';
import { Profile } from './profile';
import { SelectionEntryGroup } from './selectionEntryGroup';

export class SelectionEntry {
    id: string;

    name: string;

    hidden: boolean;

    collective?: boolean;

    import: boolean;

    type: string;

    private _categoryLinks: CategoryLink[] = [];

    private _constraints: Constraint[] = [];

    private _costs: Cost[] = [];

    private _entryLinks: EntryLink[] = [];

    private _infoLinks: InfoLink[] = [];

    private _profiles: Profile[] = [];

    private _selectionEntries: SelectionEntry[] = [];

    private _selectionEntryGroups: SelectionEntryGroup[] = [];

    constructor(id: string, name: string, hidden: boolean, shouldImport: boolean, type: string, collective?: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.import = shouldImport;
        this.type = type;
        this.collective = collective;
    }

    get categoryLinks(): CategoryLink[] {
        return this._categoryLinks;
    }

    set categoryLink(link: CategoryLink) {
        this._categoryLinks.push(link);
    }

    get constraints(): Constraint[] {
        return this._constraints;
    }

    set constraint(constraint: Constraint) {
        this._constraints.push(constraint);
    }

    get entryLinks(): EntryLink[] {
        return this._entryLinks;
    }

    set entryLink(link: EntryLink) {
        this._entryLinks.push(link);
    }

    get infoLinks(): InfoLink[] {
        return this._infoLinks;
    }

    set infoLink(link: InfoLink) {
        this._infoLinks.push(link);
    }

    get profiles(): Profile[] {
        return this._profiles;
    }

    set profile(profile: Profile) {
        this._profiles.push(profile);
    }

    get selectionEntries(): SelectionEntry[] {
        return this._selectionEntries;
    }

    set selectionEntry(entry: SelectionEntry) {
        this._selectionEntries.push(entry);
    }

    get selectionEntryGroups(): SelectionEntryGroup[] {
        return this._selectionEntryGroups;
    }

    set selectionEntryGroup(group: SelectionEntryGroup) {
        this._selectionEntryGroups.push(group);
    }
}
