function freezeClass(constructor: Function) {
    console.log("======================================");
    console.log(`${constructor.name} class has been frozen.`);
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
    console.log("======================================");
}

function validateLength(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: string) {
        if (value.length < 3) {
            throw new Error(`The value for ${propertyKey} must be at least 3 characters long.`);
        }

        originalSet?.call(this, value);
    }
}

function validateEmail(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: string) {
        if (value.indexOf("@") === -1) {
            throw new Error(`The value for ${propertyKey} is invalid email.`);
        }

        originalSet?.call(this, value);
    }
}

function depricatedMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
){
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
        console.log(`Caution! method ${methodName} is depricated`);
        return originalMethod.apply(this, args);
    }

    return descriptor;
}

function depricated(message: string) {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]){
            console.log(message);
            return originalMethod.apply(this, args);
        }

        return descriptor;
    }
}

//@freezeClass
class User2 {
    public name: string;

    public age: number;
    private _email!: string;

    constructor(name: string, age: number, email: string) { 
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public get email(): string {
        return this._email;
    }

    //@validateLength
    //@validateEmail
    public set email(value: string) {
        this._email = value;
    }

    //@depricatedMethod
    @depricated("Please doesn't use this method!")
    public getInfo(condensed: boolean): string {
        return condensed ?
            `User: ${this.name}, Age: ${this.age}`
            : `User Info - Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }       
}

export { User2 }