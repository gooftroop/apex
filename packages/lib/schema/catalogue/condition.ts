import { Node } from '../types';

export class Condition implements Node {
    type: string;

    value: string;

    field: string;

    scope: string;

    childId: string;

    shared: boolean;

    includeChildForces: boolean;

    id: string | undefined;

    constructor(
        type: string,
        value: string,
        field: string,
        scope: string,
        childId: string,
        shared: boolean,
        includeChildForces: boolean,
    ) {
        this.type = type;
        this.value = value;
        this.field = field;
        this.scope = scope;
        this.childId = childId;
        this.shared = shared;
        this.includeChildForces = includeChildForces;
    }
}
