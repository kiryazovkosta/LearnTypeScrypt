export class Product{
    private static _productCount: number = 0;
    public get productCount(): number {
        return Product._productCount;
    }

    public readonly id: number;

    private _name!: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        if (value.length < 1) {
            throw new Error("Product name must be at least 1 characters long.");
        }
        this._name = value;
    }

    private _price!: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        if (value <= 0) {
            throw new Error("Product price cannot be zero or negative.");
        }
        this._price = value;
    }

    constructor(name: string, price: number) {
        this.id = Product._productCount + 1;
        Product._productCount++;
        this.name = name;
        this.price = price;
    }

    public getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
}

export class Inventory {
    private _products: Product[] = [];

    public addProduct(product: Product): void {
        this._products.push(product);
    }

    public listProducts(): string {
        return this._products.map(product => product.getDetails()).join("\n") + "\nTotal Products: " + this._products.length;
    }
}