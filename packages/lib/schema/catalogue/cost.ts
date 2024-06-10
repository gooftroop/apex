import { Node } from '../types';

export class Cost implements Node {
    name: string;

    typeId: string;

    value: number;

    id: string | undefined;

    constructor(name: string, typeId: string, value: number) {
        this.name = name;
        this.typeId = typeId;
        this.value = value;
    }
}
