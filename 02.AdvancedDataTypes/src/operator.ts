export const operator = (
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
): number|string|undefined => {
    if (operation === "Index" 
        && typeof param !== "number" 
        && param.length -1 >= operand) {
            return param[operand];
    }

    if (operation === "Length" 
        && typeof param !== "number") {
            return param.length % operand;
    }

    if (operation === "Add" 
        && !Array.isArray(param)) {
            return (Number(param) || 0) + operand;
    }
}