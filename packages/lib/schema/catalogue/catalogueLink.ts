export class CatalogueLink {
    id: string;

    name: string;

    target: string;

    constructor(id: string, name: string, target: string) {
        this.id = id;
        this.name = name;
        this.target = target;
    }
}
