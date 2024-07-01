import { Characteristic } from '../catalogue/characteristic';
import { Node } from '../types';

export class Profile implements Node {
    id: string;

    name: string;

    hidden: boolean;

    typeId: string;

    typeName: string;

    private _characteristics: Characteristic[] = [];

    private _description: string | undefined;

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

    set characteristic(value: Characteristic) {
        this._characteristics.push(value);
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
