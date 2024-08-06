import { Entity } from '@/schema/40k';

export class Rule extends Entity {
    name: string = '';

    publicationId: string = '';

    page: number = -1;

    hidden: boolean = true;

    description: string | undefined;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Rule {}
}
