export class Constraint {
    type: string;

    value: number;

    field: string;

    scope: string;

    shared: boolean;

    id: string;

    includeChildSelections: boolean | undefined;

    includeChildForces: boolean | undefined;

    percentValue: boolean | undefined;

    constructor(
        type: string,
        value: number,
        field: string,
        scope: string,
        shared: boolean,
        id: string,
        includeChildSelections: boolean | undefined,
        includeChildForces: boolean | undefined,
        percentValue: boolean | undefined,
    ) {
        this.type = type;
        this.value = value;
        this.field = field;
        this.scope = scope;
        this.shared = shared;
        this.id = id;
        this.includeChildSelections = includeChildSelections;
        this.includeChildForces = includeChildForces;
        this.percentValue = percentValue;
    }
}
