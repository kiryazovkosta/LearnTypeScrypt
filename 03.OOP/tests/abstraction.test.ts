import { Dog } from '../src/abstraction';

describe("4. Abstraction", () => {
    it("should make a correct sound", () => {
        const dog = new Dog();
        expect(dog.makeSound()).toBe("Woof");
    });
});