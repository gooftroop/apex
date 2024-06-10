export class Rule {
    id: string;

    name: string;

    hidden: boolean;

    private _description: string = '';

    constructor(id: string, name: string, hidden: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }
}
