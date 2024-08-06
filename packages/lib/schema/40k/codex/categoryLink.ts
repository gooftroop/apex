import { Entity } from '@/schema/40k';

export class CategoryLink extends Entity {
    name: string = '';

    hidden: boolean = true;

    targetId: string = '';

    primary: boolean = false;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CategoryLink {}
}
