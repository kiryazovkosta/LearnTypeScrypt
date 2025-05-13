import { Exercises } from "./exercise";

console.log('Intro to TypeScript');

/* 1. Even Sum */
const exercises = new Exercises();
let isEven = exercises.evenSum(1, 2, 3);
console.log(isEven)
isEven = exercises.evenSum(2, 2, 3)
console.log(isEven);

/* 2. Day of the Week */
let dayAsString = exercises.dayOfTheWeek(1);
console.log(dayAsString);
dayAsString = exercises.dayOfTheWeek(5);
console.log(dayAsString);
dayAsString = exercises.dayOfTheWeek(-1);
console.log(dayAsString);

/* 3. Format Person */
let personAsString = exercises.formatPerson(['Ivan', 20]);
console.log(personAsString);
personAsString = exercises.formatPerson(['Joro', 30]);
console.log(personAsString);

/* 4. Convert Array */
let arr = ['Hello', ' ',  'Type', 'Script', '!'];
let outputTuple: [string, number];
outputTuple = exercises.convertArray(arr);
console.log(outputTuple);

/* 5. Convert Array with Map */
let sumarized = 
exercises.summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]);
console.log(sumarized);
sumarized = exercises.summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']);
console.log(sumarized);
sumarized = exercises.summarizePerson(21, 'Joseph', 'Angler', 28);
console.log(sumarized);
sumarized = exercises.summarizePerson(21, 'Kristine', 'Neva', 23, '');
console.log(sumarized);

/* 6. Reversed Day of the Week */
let dayAsNumber = exercises.reversedDayofTheWeek('Monday');
console.log(dayAsNumber);
dayAsNumber = exercises.reversedDayofTheWeek('Friday');
console.log(dayAsNumber);
dayAsNumber = exercises.reversedDayofTheWeek('Invalid');
console.log(dayAsNumber);