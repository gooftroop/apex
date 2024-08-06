import { Entity } from '@/schema/40k';
import { CategoryLink } from '@/schema/40k/game/categoryLink';
import { Constraint } from '@/schema/40k/game/constraint';
import { Cost } from '@/schema/40k/game/cost';
import { Modifier } from '@/schema/40k/game/modifier';
import { SelectionEntryGroup } from '@/schema/40k/game/selectionEntryGroup';

export class SelectionEntry extends Entity {
    name: string = '';

    hidden: boolean = true;

    collective: boolean = false;

    import: boolean = false;

    type: string = '';

    costs: Cost[] = [];

    constraints: Constraint[] = [];

    categoryLinks: CategoryLink[] = [];

    selectionEntryGroups: SelectionEntryGroup[] = [];

    modifiers: Modifier[] = [];

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
