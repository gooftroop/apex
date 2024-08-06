import { Entity } from '@/schema/40k';

export class CatalogueLink extends Entity {
    name: string = '';

    target: string = '';

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CatalogueLink {}
}
