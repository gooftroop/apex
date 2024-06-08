export class Publication {
    id: string;

    name: string;

    publisher: string;

    date: Date;

    url: string;

    constructor(id: string, name: string, publisher: string, date: Date, url: string) {
        this.id = id;
        this.name = name;
        this.publisher = publisher;
        this.date = date;
        this.url = url;
    }
}
