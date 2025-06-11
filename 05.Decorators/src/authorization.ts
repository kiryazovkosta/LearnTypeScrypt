class MockAuthrizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name','age'].includes(property);
            default: return false;
        }
    }
}

function authorizeUser(userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        const authService = new MockAuthrizationService(userRole);
        
        const originalGetter = descriptor.get;

        descriptor.get = function() {
            const hasAcess = authService.canViewData(propName);
            if (!hasAcess) {
                throw new Error('You are not authorized to view this information');
            }

            return originalGetter?.call(this);
        }

        return descriptor;
    }
}

class User {
    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorizeUser("Admin")
    get name() {
        return this._name;
    }

    @authorizeUser("Guest")
    get age() {
        return this._age;
    }

    @authorizeUser("PersonalDataAdministrator")
    get creditCardNumber() {
        return this._creditCardNumber;
    }
}

export { MockAuthrizationService, User }