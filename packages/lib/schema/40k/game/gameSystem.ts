import { Entity } from '@/schema/40k';
import { CategoryEntry } from '@/schema/40k/game/categoryEntry';
import { CostType } from '@/schema/40k/game/costType';
import { EntryLink } from '@/schema/40k/game/entryLink';
import { ForceEntry } from '@/schema/40k/game/forceEntry';
import { Profile } from '@/schema/40k/game/profile';
import { ProfileType } from '@/schema/40k/game/profileType';
import { Publication } from '@/schema/40k/game/publication';
import { Rule } from '@/schema/40k/game/rule';
import { SelectionEntry } from '@/schema/40k/game/selectionEntry';

export class GameSystem extends Entity {
    name: string = '';

    revision: number = 0;

    publications: Publication[] = [];

    costTypes: CostType[] = [];

    profileTypes: ProfileType[] = [];

    categoryEntries: CategoryEntry[] = [];

    forceEntries: ForceEntry[] = [];

    entryLinks: EntryLink[] = [];

    sharedSelectionEntries: SelectionEntry[] = [];

    sharedRules: Rule[] = [];

    sharedProfiles: Profile[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): GameSystem {}
}
