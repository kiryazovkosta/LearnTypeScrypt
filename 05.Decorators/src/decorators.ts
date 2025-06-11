function greeting(name: string): string {
    return `Hello, ${name}!`;
}

function LogClass(target: Function) {
    //console.log("======================================");
    console.log(`${typeof target} has been created. ${target.name}`);
    //console.log("======================================");
}

function LogAccessor(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    //console.log("======================================");
    console.log(`${propertyKey} accessor has been created.`);
    //console.log("======================================");
}

function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    //console.log("======================================");
    console.log("LogMethod has been created.");
    //console.log("======================================");
}

function LogProperty(
    target: any,
    propertyKey: string
) {
    //console.log("======================================");
    console.log("LogProperty has been created.");
    //console.log("======================================");
}

function LogParameter(
    target: any,
    methodName: string,
    parameterIndex: number
) {
    //console.log("======================================");
    console.log(`${methodName} method's parameter at index ${parameterIndex} has been created.`);
    //console.log("======================================");
}

function FreezeClass(construction: Function) {
   // console.log("======================================");
    console.log(`${construction.name} class has been frozen.`);
    Object.freeze(construction);
    //console.log("======================================");
}

//@LogClass
@FreezeClass
class User {
    public name: string;
    @LogProperty
    public age: number;
    private _email!: string;

    constructor(name: string, age: number, email: string) { 
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @LogAccessor
    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    @LogMethod
    public getInfo(@LogParameter condensed: boolean): string {
        return condensed ?
            `User: ${this.name}, Age: ${this.age}`
            : `User Info - Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }       
}

export { greeting }