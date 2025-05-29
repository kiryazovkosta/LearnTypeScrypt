class Dog {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    bark(): string {
        return `${this.name} says Woof!`;
    }
}

export { Dog };