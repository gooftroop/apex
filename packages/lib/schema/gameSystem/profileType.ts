import { CharacteristicType } from './characteristicType';
import { Node } from '../types';

export class ProfileType implements Node {
    id: string;

    name: string;

    private _characteristicTypes: CharacteristicType[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    get characteristicTypes(): CharacteristicType[] {
        return this._characteristicTypes;
    }

    set characteristicType(value: CharacteristicType) {
        this._characteristicTypes.push(value);
    }
}
