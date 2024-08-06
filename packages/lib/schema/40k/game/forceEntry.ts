import { Entity } from '@/schema/40k';
import { CategoryLink } from '@/schema/40k/game/categoryLink';

export class ForceEntry extends Entity {
    name: string = '';

    hidden: boolean = true;

    categoryLinks: CategoryLink[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): ForceEntry {}
}
