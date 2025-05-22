export type Part = {
    partName: string,
    runDiagnostics: () => string;
}

export type CarBody = { 
    material: string, 
    state: string 
} & Part;

export type Tires = { 
    airPressure: number, 
    condition: string 
} & Part;

export type Engine = { 
    horsepower: number, 
    oilDensity: number 
} & Part;

export const carDiagnostics = (
    carBody: CarBody,
    tires: Tires,
    engine: Engine
): void => {
    console.log(carBody.runDiagnostics())
    console.log(tires.runDiagnostics())
    console.log(engine.runDiagnostics())
}