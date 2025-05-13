import { Exercises } from "./exercise";

console.log('Intro to TypeScript');

const exercises = new Exercises();
let isEven = exercises.evenSum(1, 2, 3);
console.log(isEven)
isEven = exercises.evenSum(2, 2, 3)
console.log(isEven);