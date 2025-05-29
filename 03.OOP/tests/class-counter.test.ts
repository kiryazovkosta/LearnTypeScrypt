import { Counter } from '../src/class-counter';

describe("4. Abstraction", () => {
    it("should make a correct increments", () => {
        Counter.increment();
        Counter.increment();
        expect(Counter.getCount()).toBe(2);
    });
});