interface Animal {
    makeSound(): string;
}

export class Dog implements Animal {
    public makeSound(): string {
        return "Woof";
    }
}