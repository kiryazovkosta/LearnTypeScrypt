class Vehicle {
    private brand: string;

    public constructor(brand: string) {
        this.brand = brand;
    }

    public drive(): string {
        return `Driving a ${this.brand}`;
    }
}

export class Car extends Vehicle {
    private model: string;

    public constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    public drive(): string {
        return `${super.drive()} ${this.model}`;
    }
}