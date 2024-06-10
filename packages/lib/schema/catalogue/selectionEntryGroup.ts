import { Constraint } from './constraint';
import { EntryLink } from './entryLink';
import { Profile } from './profile';

export class SelectionEntryGroup {
    id: string;

    name: string;

    hidden: boolean;

    collective: boolean;

    import: boolean;

    defaultSelectionEntryId: string;

    private _constraints: Constraint[] = [];

    private _entryLinks: EntryLink[] = [];

    private _profiles: Profile[] = [];

    constructor(
        id: string,
        name: string,
        hidden: boolean,
        collective: boolean,
        shouldImport: boolean,
        defaultSelectionEntryId: string,
    ) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.collective = collective;
        this.import = shouldImport;
        this.defaultSelectionEntryId = defaultSelectionEntryId;
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

    get profiles(): Profile[] {
        return this._profiles;
    }

    set profile(profile: Profile) {
        this._profiles.push(profile);
    }
}
