import { Node } from '../types';

export class Condition implements Node {
    type: string;

    value: number;

    field: string;

    scope: string;

    childId: string;

    shared: boolean;

    includeChildSelections: boolean;

    id: string | undefined;

    constructor(
        type: string,
        value: number,
        field: string,
        scope: string,
        childId: string,
        shared: boolean,
        includeChildSelections: boolean,
    ) {
        this.type = type;
        this.value = value;
        this.field = field;
        this.scope = scope;
        this.childId = childId;
        this.shared = shared;
        this.includeChildSelections = includeChildSelections;
    }
}
