import { Circle, Rectangle } from '../src/abstract-class';

describe("9. Abstract Class", () => {
    it("should returns a valid area for cyrcle", () => {
        const circle = new Circle("red", 5);
        expect(circle.getArea()).toBeCloseTo(78.53981633974483, 5);
    });

    it("should returns a valid area for rectangle", () => {
        const rect = new Rectangle("red", 4, 6);
        expect(rect.getArea()).toBe(24);
    });
});