import { Book } from '../src/readonly-modifier';

describe("8. Readonly Modifier", () => {
    it("should print book's properties throught getters", () => {
        const book = new Book("1984", "George Orwell");
        const bookTitle = book.getTitle();
        const bookAuthor = book.getAuthor();
        const bookAsString = `${book.getTitle()} by ${book.getAuthor()}`;
        expect(bookTitle).toBe("1984");
        expect(bookAuthor).toBe("George Orwell");
        expect(bookAsString).toBe("1984 by George Orwell");
    });
});