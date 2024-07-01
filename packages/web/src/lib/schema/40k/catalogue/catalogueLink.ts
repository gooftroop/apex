import { Node } from '../types';

export class CatalogueLink implements Node {
    id: string;

    name: string;

    target: string;

    constructor(id: string, name: string, target: string) {
        this.id = id;
        this.name = name;
        this.target = target;
    }
}
