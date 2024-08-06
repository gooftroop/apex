import { Entity } from '@/schema/40k';
import { CategoryLink } from '@/schema/40k/codex/categoryLink';
import { Constraint } from '@/schema/40k/codex/constraint';
import { Cost } from '@/schema/40k/codex/cost';
import { EntryLink } from '@/schema/40k/codex/entryLink';
import { InfoLink } from '@/schema/40k/codex/infoLink';
import { Profile } from '@/schema/40k/codex/profile';
import { SelectionEntryGroup } from '@/schema/40k/codex/selectionEntryGroup';

export class SelectionEntry extends Entity {
    name: string = '';

    hidden: boolean = true;

    collective?: boolean;

    import: boolean = false;

    type: string = '';

    categoryLinks: CategoryLink[] = [];

    constraints: Constraint[] = [];

    costs: Cost[] = [];

    entryLinks: EntryLink[] = [];

    infoLinks: InfoLink[] = [];

    profiles: Profile[] = [];

    selectionEntries: SelectionEntry[] = [];

    selectionEntryGroups: SelectionEntryGroup[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): SelectionEntry {}
}
