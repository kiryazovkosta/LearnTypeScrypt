export type Car = {
    engine: {
        horsepower: number
    };
    tires: {
        model: string;
        airPressure: number;
    };
    body: {
        material: string;
    }
}


export class Mechanic<T extends Car> {
    technicalInspection(car: T): boolean { 
        return true; 
    }
}