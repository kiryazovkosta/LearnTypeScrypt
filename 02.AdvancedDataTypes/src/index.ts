import { CarBody, Tires, Engine, carDiagnostics } from './car-diagnostics'

const runDiagnostics = function(this: { partName: string }) {
  return this.partName;
};

let carBody: CarBody = { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics}
let tires: Tires = { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics }
let engine: Engine = { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }

carDiagnostics(carBody, tires, engine);