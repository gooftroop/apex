import { Entity } from '@/schema/40k';
import { Modifier } from '@/schema/40k/codex/modifier';

export class InfoLink extends Entity {
    name: string = '';

    hidden: boolean = true;

    targetId: string = '';

    type: string = '';

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

    public static create(attributes: Record<string, string | number | boolean>): InfoLink {}
}
