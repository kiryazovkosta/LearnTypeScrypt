type Part = {
    partName: string,
    runDiagnostics: () => string;
}

type CarBody = { 
    material: string, 
    state: string 
} & Part;

type Tires = { 
    airPressure: number, 
    condition: string 
} & Part;

type Engine = { 
    horsepower: number, 
    oilDensity: number 
} & Part;

export const carDiagnostics = (
    carBody: CarBody,
    tires: Tires,
    engine: Engine
) => {
    console.log(carBody.runDiagnostics())
    console.log(tires.runDiagnostics())
    console.log(engine.runDiagnostics())
}