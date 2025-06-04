export class Kosta {
    public name: string;
    public age: number;
    public hobbies: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.hobbies = ["one", "two", "three"];
    }

    printDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Hobbies: ${this.hobbies.join(', ')}`;
    }
}