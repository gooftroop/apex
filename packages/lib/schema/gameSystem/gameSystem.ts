import { CategoryEntry } from './categoryEntry';
import { CostType } from './costType';
import { EntryLink } from './entryLink';
import { ForceEntry } from './forceEntry';
import { Profile } from './profile';
import { ProfileType } from './profileType';
import { Publication } from './publication';
import { Rule } from './rule';
import { SelectionEntry } from './selectionEntry';

export class GameSystem {
    id: string;

    name: string;

    revision: number;

    private _publications: Publication[] = [];

    private _costTypes: CostType[] = [];

    private _profileTypes: ProfileType[] = [];

    private _categoryEntries: CategoryEntry[] = [];

    private _forceEntries: ForceEntry[] = [];

    private _entryLinks: EntryLink[] = [];

    private _sharedSelectionEntries: SelectionEntry[] = [];

    private _sharedRules: Rule[] = [];

    private _sharedProfiles: Profile[] = [];

    constructor(id: string, name: string, revision: number) {
        this.id = id;
        this.name = name;
        this.revision = revision;
    }

    get publications(): Publication[] {
        return this._publications;
    }

    set publication(value: Publication) {
        this._publications.push(value);
    }

    get costTypes(): CostType[] {
        return this._costTypes;
    }

    set costType(value: CostType) {
        this._costTypes.push(value);
    }

    get profileTypes(): ProfileType[] {
        return this._profileTypes;
    }

    set profileType(value: ProfileType) {
        this._profileTypes.push(value);
    }

    get categoryEntries(): CategoryEntry[] {
        return this._categoryEntries;
    }

    set categoryEntry(value: CategoryEntry) {
        this._categoryEntries.push(value);
    }

    get forceEntries(): ForceEntry[] {
        return this._forceEntries;
    }

    set forceEntry(value: ForceEntry) {
        this._forceEntries.push(value);
    }

    get entryLinks(): EntryLink[] {
        return this._entryLinks;
    }

    set entryLink(value: EntryLink) {
        this._entryLinks.push(value);
    }

    get sharedSelectionEntries(): SelectionEntry[] {
        return this._sharedSelectionEntries;
    }

    set sharedSelectionEntry(value: SelectionEntry) {
        this._sharedSelectionEntries.push(value);
    }

    get sharedRules(): Rule[] {
        return this._sharedRules;
    }

    set sharedRule(value: Rule) {
        this._sharedRules.push(value);
    }

    get sharedProfiles(): Profile[] {
        return this._sharedProfiles;
    }

    set sharedProfile(value: Profile) {
        this._sharedProfiles.push(value);
    }
}
