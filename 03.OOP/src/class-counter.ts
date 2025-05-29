export class Counter {
    private static count: number = 0;

    public static increment(): void {
        Counter.count++;
    }

    public static getCount(): number {
        return Counter.count;
    }
}