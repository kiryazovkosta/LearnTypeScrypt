import { Exercises } from "./exercise";

console.log('Intro to TypeScript');

/* 1. Even Sum */
const exercises = new Exercises();
let isEven = exercises.evenSum(1, 2, 3);
console.log(isEven)
isEven = exercises.evenSum(2, 2, 3)
console.log(isEven);

/* 2. Day of the Week */
let day = 1;
let dayAsString = exercises.dayOfTheWeek(day);
console.log(dayAsString);
day = 5;
dayAsString = exercises.dayOfTheWeek(day);
console.log(dayAsString);
day = -1;
dayAsString = exercises.dayOfTheWeek(day);
console.log(dayAsString);