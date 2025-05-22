export const optionalMultiplier = (
    a?: string|number, 
    b?: string|number, 
    c?: string|number): number => {
        return [a, b, c]
            .map(val => Number(val) || 1)
            .reduce((acc, curr) => acc * curr, 1);
}