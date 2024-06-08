export class Publication {
    id: string;

    name: string;

    shortName: string;

    publisherUrl: string | undefined;

    constructor(id: string, name: string, shortName: string, publisherUrl?: string) {
        this.id = id;
        this.name = name;
        this.shortName = shortName;
        this.publisherUrl = publisherUrl;
    }
}
