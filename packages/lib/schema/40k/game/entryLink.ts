import { Entity } from '@/schema/40k';

export class EntryLink extends Entity {
    name: string = '';

    hidden: boolean = true;

    collective: boolean = false;

    import: boolean = false;

    targetId: string = '';

    type: string = '';

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): EntryLink {}
}
