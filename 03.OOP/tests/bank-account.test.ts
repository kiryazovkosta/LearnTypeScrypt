import { BankAccount } from '../src/bank-account';

describe("2. Bank Account", () => {
    it("should balance is valid after deposit and withdraw", () => {
        const account = new BankAccount(100);
        account.deposit(50);
        account.withdraw(30);
        expect(account.getBalance()).toBe(120);
    });

    it("should balance is valid after withdraw is with invalid ammount", () => {
        const account = new BankAccount(20);
        account.withdraw(30);
        expect(account.getBalance()).toBe(20);
    });
});