let names = { 
    fName: 'John', 
    lName: 'Doe', 
    age: 22, getPersonInfo() { 
        return `${this.fName} ${this.lName}, age ${this.age}` 
    } 
};

let personLocation = { 
    city:'Boston', 
    street: 'Nowhere street', 
    number: 13, 
    postalCode: 51225, 
    getAddressInfo() { 
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`
    } 
};

let combinedFunction = createCombinedFunction(names, personLocation); 
let combinedPerson = Object.assign({}, names, personLocation); 
combinedFunction(combinedPerson);

type namesType = typeof names;
type locationType = typeof personLocation;
function createCombinedFunction(names: namesType, location: locationType) {
    return function (combinedObject: namesType & locationType) {
        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    }
}

