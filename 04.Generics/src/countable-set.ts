export interface CountableSet<T> {
    add(item:T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

export class CountedSet<T> implements CountableSet<T> {
    private items: Map<T, number>;

    constructor() {
        this.items = new Map<T, number>();
    }

    add(item: T): void {
        if (!this.items.has(item)) {
            this.items.set(item, 0);
        }

        this.items.set(item, this.items.get(item)! + 1);
    }

    remove(item: T): void {
        if (this.items.has(item) && this.items.get(item)! > 0) {
            this.items.set(item, this.items.get(item)! - 1);
        }
    }

    contains(item: T): boolean {
        return this.items.has(item) && this.items.get(item)! > 0
    }

    getNumberOfCopies(item: T): number {
        if (this.items.has(item)) {
            return this.items.get(item)!;
        }

        return 0;
    }
}
