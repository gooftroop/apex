import { Node } from '../types';

export class CategoryLink implements Node {
    id: string;

    name: string;

    hidden: boolean;

    targetId: string;

    primary: boolean;

    constructor(id: string, name: string, hidden: boolean, targetId: string, primary: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.targetId = targetId;
        this.primary = primary;
    }
}
