import { User } from '../src/getters-setters';

describe("10. Getters and Setters (Accessors)", () => {
    it("should create and change username when input is valid", () => {
        const user = new User("Martin");
        user.username = "JohnDoe";
        expect(user.username).toBe("JohnDoe");
    });

    it("should throws an error when try to create with invalid username", () => {
        expect(() => {
            const user = new User("jo");
        }).toThrow("Username must be at least 3 characters long.");
    });

    it("should throws an error when try to update with invalid username", () => {
        expect(() => {
            const user = new User("Jordan");
            user.username = "jo";
        }).toThrow("Username must be at least 3 characters long.");
    });
});