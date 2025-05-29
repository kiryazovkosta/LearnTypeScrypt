export class Calculator{
    public calculate(operation: 'power' | 'log', a: number, b: number ): number;
    public calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', a: number, b: number, c?: number, d?: number): number;

    public calculate(
        operation: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide', 
        a: number, 
        b: number, 
        c?: number, 
        d?: number): number {
        const args = [a, b, c, d].filter(arg => arg !== undefined) as number[];
            switch (operation) {
                case 'power':
                    return a ** b;
                case 'log':
                    return Math.log(a) / Math.log(b);
                case 'add':
                    return args.reduce((acc, val) => acc + val, 0);
                case 'subtract':
                    return args.reduce((acc, val) => acc - val);
                case 'multiply':
                    return args.reduce((acc, val) => acc * val, 1);
                case 'divide':
                    return args.reduce((acc, val) => acc / val);
                default:
                    throw new Error('Invalid operation');
        }
    }
}