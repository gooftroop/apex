import { Entity } from '@/schema/40k';

export class CostType extends Entity {
    name: string = '';

    defaultCostLimit: number = -1;

    hidden: boolean = true;

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CostType {}
}
