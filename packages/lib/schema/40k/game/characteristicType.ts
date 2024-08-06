import { Entity } from '@/schema/40k';

export class CharacteristicType extends Entity {
    name: string = '';

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- required by abstract class
    public createChild(_type: string, _attributes: Record<string, string | number | boolean>): Entity | null {
        return null;
    }

    public toObject(): Record<string, unknown> {
        return {};
    }

    public toJSON(): string {
        return JSON.stringify(this.toObject());
    }

    public static create(attributes: Record<string, string | number | boolean>): CharacteristicType {}
}
