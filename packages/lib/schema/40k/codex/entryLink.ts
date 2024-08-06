import { Entity } from '@/schema/40k';
import { Constraint } from '@/schema/40k/codex/constraint';
import { Modifier } from '@/schema/40k/codex/modifier';

export class EntryLink extends Entity {
    name: string = '';

    hidden: boolean = true;

    collective: boolean = false;

    import: boolean = false;

    targetId: string = '';

    type: string = '';

    constraints: Constraint[] = [];

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

    public static create(attributes: Record<string, string | number | boolean>): EntryLink {}
}
