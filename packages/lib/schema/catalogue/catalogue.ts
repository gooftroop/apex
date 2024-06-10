import { CatalogueLink } from './catalogueLink';
import { CategoryEntry } from './categoryEntry';
import { EntryLink } from './entryLink';
import { Publication } from './publication';
import { Rule } from './rule';
import { SelectionEntry } from './selectionEntry';
import { Node } from '../types';

export class Catalogue implements Node {
    id: string;

    name: string;

    revision: number;

    private _categoryEntries: CategoryEntry[] = [];

    private _catalogueLinks: CatalogueLink[] = [];

    private _entryLinks: EntryLink[] = [];

    private _publications: Publication[] = [];

    private _rules: Rule[] = [];

    private _sharedRules: Rule[] = [];

    private _sharedSelectionEntries: SelectionEntry[] = [];

    constructor(id: string, name: string, revision: number) {
        this.id = id;
        this.name = name;
        this.revision = revision;
    }

    get catalogueLinks(): CatalogueLink[] {
        return this._catalogueLinks;
    }

    set catalogueLink(link: CatalogueLink) {
        this._catalogueLinks.push(link);
    }

    get categoryEntries(): CategoryEntry[] {
        return this._categoryEntries;
    }

    set categoryEntry(categoryEntry: CategoryEntry) {
        this._categoryEntries.push(categoryEntry);
    }

    get entryLinks(): EntryLink[] {
        return this._entryLinks;
    }

    set entryLink(link: EntryLink) {
        this._entryLinks.push(link);
    }

    get publications(): Publication[] {
        return this._publications;
    }

    set publication(publication: Publication) {
        this._publications.push(publication);
    }

    get rules(): Rule[] {
        return this._rules;
    }

    set rule(rule: Rule) {
        this._rules.push(rule);
    }

    get sharedSelectionEntries(): SelectionEntry[] {
        return this._sharedSelectionEntries;
    }

    set sharedSelectionEntry(sharedSelectionEntry: SelectionEntry) {
        this._sharedSelectionEntries.push(sharedSelectionEntry);
    }
}
