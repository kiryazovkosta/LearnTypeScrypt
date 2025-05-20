export const operator = (
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
): number|string|undefined => {
    if (operation === "Index" 
        && (Array.isArray(param) || typeof param === "string") 
        && param.length -1 >= operand) {
            return param[operand];
    }

    if (operation === "Length" 
        && (typeof param === "string" || Array.isArray(param))) {
            return param.length % operand;
    }

    if (operation === "Add" 
        && (typeof param === "string" || typeof param === "number")) {
            return (Number(param) || 0) + operand;
    }
}