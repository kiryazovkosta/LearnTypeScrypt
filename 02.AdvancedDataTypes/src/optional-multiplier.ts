export const optionalMultiplier = (
    a?: string|number, 
    b?: string|number, 
    c?: string|number): number => {
        if (a === undefined && b === undefined && c === undefined) {
            return 1;
        }

        return [a, b, c]
            .map(val => Number(val) || 1)
            .reduce((acc, curr) => acc * curr, 1);
}