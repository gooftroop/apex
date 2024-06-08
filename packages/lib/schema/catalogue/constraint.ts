export class Constraint {
    field: string;

    scope: string;

    value: number;

    perccentValue: boolean;

    shared: boolean;

    includeChildSelections: boolean;

    includeChildForces: boolean;

    id: string;

    type: string;

    constructor(
        field: string,
        scope: string,
        value: number,
        percentValue: boolean,
        shared: boolean,
        includeChildSelections: boolean,
        includeChildForces: boolean,
        id: string,
        type: string,
    ) {
        this.field = field;
        this.scope = scope;
        this.value = value;
        this.perccentValue = percentValue;
        this.shared = shared;
        this.includeChildSelections = includeChildSelections;
        this.includeChildForces = includeChildForces;
        this.id = id;
        this.type = type;
    }
}
