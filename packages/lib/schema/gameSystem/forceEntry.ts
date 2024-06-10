import { CategoryLink } from './categoryLink';

export class ForceEntry {
    id: string;

    name: string;

    hidden: boolean;

    private _categoryLinks: CategoryLink[] = [];

    constructor(id: string, name: string, hidden: boolean) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
    }

    get categoryLinks(): CategoryLink[] {
        return this._categoryLinks;
    }

    set categoryLink(value: CategoryLink) {
        this._categoryLinks.push(value);
    }
}
