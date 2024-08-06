import { Entity, PlainObject } from '@/schema/40k';
import { CategoryEntry } from '@/schema/40k/codex/categoryEntry';

export class CategoryEnties extends Entity {
    children: CategoryEntry[] = [];

    public createChild(_type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        return CategoryEntry.create(attributes);
    }

    public toObject(): PlainObject {
        return this.children.map((child) => child.toObject());
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not needed
    public static create(_attributes: Record<string, string | number | boolean>): CategoryEnties {
        const entity = new CategoryEnties();

        return entity;
    }
}
