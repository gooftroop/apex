import { Entity } from '@/schema/40k';
import { CharacteristicType } from './characteristicType';

export class ProfileType extends Entity {
    name: string = '';

    characteristicTypes: CharacteristicType[] = [];

    public createChild(type: string, attributes: Record<string, string | number | boolean>): Entity | null {
        throw new Error(`Method not implemented: ${type}, ${JSON.stringify(attributes)}`);
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): ProfileType {}
}
