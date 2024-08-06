import { Entity } from '@/schema/40k';
import { Characteristic } from '@/schema/40k/codex/characteristic';

export class Profile extends Entity {
    name: string = '';

    hidden: boolean = true;

    typeId: string = '';

    typeName: string = '';

    characteristics: Characteristic[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): Profile {}
}
