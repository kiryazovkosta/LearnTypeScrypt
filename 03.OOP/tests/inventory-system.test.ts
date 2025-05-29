import { Product, Inventory } from '../src/inventory-system';

describe("12. Simple Task Tracker with Access Control", () => {
    it("should create a task with the correct details", () => {
        const inventory = new Inventory();
        const product1 = new Product("Laptop", 1200);
        const product2 = new Product("Phone", 800);
        inventory.addProduct(product1);
        inventory.addProduct(product2);
        expect(inventory.listProducts()).toBe("ID: 1, Name: Laptop, Price: $1200\nID: 2, Name: Phone, Price: $800\nTotal Products: 2");
    });
});