    export function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

export function makeTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

export interface Message<T> {
    sender: string;
    receiver: string;
    data: T
}

export class SmsMessage<T> implements Message<T> {
    sender: string;
    receiver: string;
    data: T;

    constructor(sender: string, receiver: string, data: T) {
        this.sender = sender;
        this.receiver = receiver;
        this.data = data;
    }

    getMessage(): string {
        return `From: ${this.sender}, To: ${this.receiver}, Data: ${JSON.stringify(this.data)}`;
    }
}

export function getId<T extends { id: number}>(item: T): string {
    return `ID: ${item.id}`;
}

export class StorageBox<T> { 
    private items: T[] = [];
    private _capacity: number;

    constructor(private size: number) {
        if (size <= 0) {
            throw new Error("Capacity must be a positive number.");
        }

        this._capacity = size;
    }

    get capacity(): number {
        return this._capacity;
    }

    add(item: T): void {
        if (this.items.length >= this._capacity) {
            throw new Error("Storage box is full.");
        }
        this.items.push(item);
        this._capacity--;
    }

    remove(): void {
        if (this.items.length === 0) {
            throw new Error("Storage box is empty.");
        }
        this.items.pop();
        this._capacity++;
    }

    getAll(): T[] {
        return this.items;
    }

    getFirst(): T | undefined {
        return this.items[0];
    }
}

export type MakeOptional<T> = {
    [K in keyof T]?: T[K];
};