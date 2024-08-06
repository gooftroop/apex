import { Entity } from '@/schema/40k';
import { Constraint } from '@/schema/40k/codex/constraint';
import { EntryLink } from '@/schema/40k/codex/entryLink';
import { Profile } from '@/schema/40k/codex/profile';

export class SelectionEntryGroup extends Entity {
    name: string = '';

    hidden: boolean = true;

    collective: boolean = false;

    import: boolean = false;

    defaultSelectionEntryId: string = '';

    constraints: Constraint[] = [];

    entryLinks: EntryLink[] = [];

    profiles: Profile[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): SelectionEntryGroup {}
}
