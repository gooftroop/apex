import { Entity, PlainObject } from '@/schema/40k';
import { CategoryEntry } from '@/schema/40k/codex/categoryEntry';
import { EntryLink } from '@/schema/40k/codex/entryLink';
import { Publication } from '@/schema/40k/codex/publication';
import { Rule } from '@/schema/40k/codex/rule';
import { SelectionEntry } from '@/schema/40k/codex/selectionEntry';
import { CatalogueLink } from '@/schema/40k/codex/catalogueLink';

export class Catalogue extends Entity {
    name: string = '';

    revision: number = 0;

    categoryEntries: CategoryEntry[] = [];

    catalogueLinks: CatalogueLink[] = [];

    entryLinks: EntryLink[] = [];

    publications: Publication[] = [];

    rules: Rule[] = [];

    sharedRules: Rule[] = [];

    sharedSelectionEntries: SelectionEntry[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        switch (type) {
            case 'categoryEnties':
            case 'catalogueLinks':
            case 'publications':
            case 'rules':
            case 'sharedRules':
            case 'sharedSelectionEntries':
            default:
                throw new Error(`Unknown child: ${type}`);
        }
    }

    public toObject(): PlainObject {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Catalogue {}
}
