export class Characteristic {
    name: string;
    typeId: string;

    private _value: string = '';

    constructor(name: string, typeId: string) {
        this.name = name;
        this.typeId = typeId;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }
}
