export type Choose<T, K extends keyof T> = {
    [Key in K]: T[Key];
};