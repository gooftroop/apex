import { Node } from '../types';

export class CategoryEntry implements Node {
    id: string;

    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
