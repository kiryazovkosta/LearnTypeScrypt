export class Employee {
    public name: string;
    protected position: string;
    private salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }

    public showSalary(): number {
        return this.salary;
    }
}