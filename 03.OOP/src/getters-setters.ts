export class User {
    private _username!: string;

    constructor(username: string) {
        this.username = username;
    }

    public get username(): string {
        return this._username;
    }

    public set username(value: string) {
        if (value.length < 3) {
            throw new Error("Username must be at least 3 characters long.");
        }

        this._username = value;
    }
}