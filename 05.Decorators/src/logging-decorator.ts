function log(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]){
            console.log(`Function '${methodName}' called with arguments: ${args.join(", ")}`)
            return originalMethod.apply(this, args);
        }

        return descriptor;
    }

class Person {
    fName: string;
    lName: string;

    constructor(firstName: string, lastName: string) {
        this.fName = firstName;
        this.lName = lastName;
    }

    @log
    static getFullName(firstName: string, lastName: string): string {
        return `${firstName} ${lastName}`;
    }
}

export { Person }