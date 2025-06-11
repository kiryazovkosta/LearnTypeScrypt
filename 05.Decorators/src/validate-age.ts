function validateAge(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const originalSet = descriptor.set;

    descriptor.set = function(value: number) {
        if (value < 1 || value > 200) {
            throw new Error(`${propertyKey} must be between 1 and 200`);
        }

        originalSet?.call(this, value);
    }
}

class Age {
    private _age!: number;

    constructor(age: number){
        this.age = age;
    }

    @validateAge
    set age(val: number){ 
        this._age = val; 
    }

    get age() { 
        return this._age; 
    }
}

export { Age }