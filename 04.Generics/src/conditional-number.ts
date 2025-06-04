type InputParamType<T> = T extends number ? number : string;

export function conditionalNumber<T>(arg: InputParamType<T>): string {
    if (typeof arg === 'number') {
        return arg.toFixed(2);
    }

    return arg;
}