import { Characteristic } from './characteristic';
import { Node } from '../types';

export class Profile implements Node {
    id: string;

    name: string;

    hidden: boolean;

    typeId: string;

    typeName: string;

    private _characteristics: Characteristic[] = [];

    constructor(id: string, name: string, hidden: boolean, typeId: string, typeName: string) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.typeId = typeId;
        this.typeName = typeName;
    }

    get characteristics(): Characteristic[] {
        return this._characteristics;
    }

    set characteristic(characteristic: Characteristic) {
        this._characteristics.push(characteristic);
    }
}
