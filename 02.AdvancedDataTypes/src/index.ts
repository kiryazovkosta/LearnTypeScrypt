import * as exp from './exercises'
import * as cd from './car-diagnostics'

//exp.operator(['First', 'Second', 'Third'], 'Index', 1)

const runDiagnostics = function(this: { partName: string }) {
  return this.partName;
};

cd.carDiagnostics(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics })