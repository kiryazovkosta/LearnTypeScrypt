type Functions<T> = {
    [Key in keyof T]: T[Key] extends Function ? Key : never;
}[keyof T];

export type AllFunctions<T> = Pick<T, Functions<T>>;