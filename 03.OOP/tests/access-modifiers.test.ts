import { Employee } from '../src/access-modifiers';

describe("6. Access Modifiers", () => {
    it("should balance is valid after deposit and withdraw", () => {
        const emp = new Employee("Alice", "Manager", 5000);
        expect(emp.getDetails()).toBe("Name: Alice, Position: Manager, Salary: $5000");
        expect(emp.showSalary()).toBe(5000);
        expect(emp.name).toBe("Alice");
    });
});