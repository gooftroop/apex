export class CostType {
    id: string;

    name: string;

    defaultCostLimit: number;

    hidden: boolean;

    constructor(id: string, name: string, defaultCostLimit: number, hidden: boolean) {
        this.id = id;
        this.name = name;
        this.defaultCostLimit = defaultCostLimit;
        this.hidden = hidden;
    }
}
