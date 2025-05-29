import { Car } from '../src/simple-inheritance';

describe("3. Simple Inheritance", () => {
    it("should balance is valid after deposit and withdraw", () => {
        const car = new Car("Toyota", "Corolla");
        expect(car.drive()).toBe("Driving a Toyota Corolla");
    });
});