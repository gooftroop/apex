export class Rule implements Node {
    id: string;

    name: string;

    publicationId: string;

    page: number;

    hidden: boolean;

    private _description: string | undefined;

    constructor(id: string, name: string, publicationId: string, page: number, hidden: boolean) {
        this.id = id;
        this.name = name;
        this.publicationId = publicationId;
        this.page = page;
        this.hidden = hidden;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
