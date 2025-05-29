export class Book {
    private readonly title: string;
    private readonly author: string;

    public constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }
}