export class EntryLink implements Node {
    id: string;

    name: string;

    hidden: boolean;

    collective: boolean;

    import: boolean;

    targetId: string;

    type: string;

    constructor(
        id: string,
        name: string,
        hidden: boolean,
        collective: boolean,
        shouldImport: boolean,
        targetId: string,
        type: string,
    ) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.collective = collective;
        this.import = shouldImport;
        this.targetId = targetId;
        this.type = type;
    }
}
