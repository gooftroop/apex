import { Publication } from './publication';

export class GameSystem {
    id: string;

    name: string;

    revision: number;

    _publications: Publication[] = [];

    _costTypes: CostType[] = [];

    _profileTypes: ProfileType[] = [];

    _categoryEntries: CategoryEntry[] = [];

    _forceEntries: ForceEntry[] = [];

    _entryLinks: EntryLink[] = [];

    _sharedSelectionEntries: SharedSelectionEntry[] = [];

    _sharedRules: SharedRule[] = [];

    _sharedProfiles: SharedProfile[] = [];

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

    get sharedSelectionEntries(): SharedSelectionEntry[] {
        return this._sharedSelectionEntries;
    }

    set sharedSelectionEntry(value: SharedSelectionEntry) {
        this._sharedSelectionEntries.push(value);
    }

    get sharedRules(): SharedRule[] {
        return this._sharedRules;
    }

    set sharedRule(value: SharedRule) {
        this._sharedRules.push(value);
    }

    get sharedProfiles(): SharedProfile[] {
        return this._sharedProfiles;
    }

    set sharedProfile(value: SharedProfile) {
        this._sharedProfiles.push(value);
    }
}
