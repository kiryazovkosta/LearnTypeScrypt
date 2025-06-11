function validateName(minLength: number) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set;

        descriptor.set = function (value: string) {
            if (value.length < minLength) {
                throw new Error(`${propName} must have a min length of ${minLength} characters`);
            }

            originalSet?.call(this, value);
        }
    }
}

function validateAge(min: number, max: number) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set;

        descriptor.set = function (value: number) {
            if (value < min || value > max) {
                throw new Error(`${propName} must be between ${min} and ${max}`);
            }

            originalSet?.call(this, value);
        }
    }
}

function validatePassword(pattern: RegExp) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalSet = descriptor.set;

        descriptor.set = function (value: string) {
            if (!value.match(pattern)) {
                throw new Error(`${propName} needs to match ${pattern}`);
            }

            originalSet?.call(this, value);
        }
    }
}

class User {
    private _name!: string;
    private _age!: number;
    private _password!: string;

    constructor(name: string, age: number, password: string) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    @validateName(3)
    set name(val: string) { this._name = val; }

    @validateAge(1, 100)
    set age(val: number) { this._age = val; }

    @validatePassword(/^[a-zA-Z0-9]+$/g)
    set password(val: string) { this._password = val; }

    get name() { return this._name; }

    get age() { return this._age; }
}

export { User }