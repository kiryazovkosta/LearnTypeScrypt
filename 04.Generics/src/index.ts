//import { getFirst, makeTuple, SmsMessage, Message, getId, StorageBox, MakeOptional } from "./demos";

import { swap } from "./array-swap";
import { Mechanic } from "./meh";
import { CountedSet } from "./countable-set"
import {conditionalNumber } from "./conditional-number"
import { Logger, LoggingLevel, LoggingFormat } from "./caching-logger"

// console.log("Hello, TypeScript!");
// console.log("This is a simple TypeScript project.");
// console.log("You can run this code using 'ts-node' or compile it with 'tsc'.");

// console.log(getFirst([1, 2, 3])); // Output: 1
// console.log(getFirst(["apple", "banana", "cherry"])); // Output: apple

// console.log(makeTuple(1, "apple")); // Output: [1, "apple"]
// console.log(makeTuple(true, 42)); // Output: [true, 42]
// console.log(makeTuple({ name: "Alice" }, [1, 2, 3])); // Output: [{ name: "Alice" }, [1, 2, 3]]

// const message = new SmsMessage("Alice", "Bob", { text: "Hello, Bob!" });
// console.log(message.getMessage()); // Output: From: Alice, To: Bob, Data: {"text":"Hello, Bob!"}

// const otherMessage = new SmsMessage<number>("Charlie", "Dave", 42);
// console.log(otherMessage.getMessage()); // Output: From: Charlie, To: Dave, Data: 42

// const mess: Message<{ key: number, value: string }> = {
//     sender: "Eve",
//     receiver: "Frank",
//     data: { key: 1, value: "Hello" }
// };
// console.log(mess.data); // Output: { key: 1, value: "Hello" }

// const person: { id: number, name: string } = { id: 123, name: "John Doe" };
// console.log(getId(person)); // Output: ID: 123

// let box = new StorageBox<string>(3);
// box.add("Item 1");
// box.add("Item 2");
// console.log(box.getAll()); // Output: 0      

// type User = {
//     id: number,
//     name: string,
//     age: number,
//     birthday: Date
// }

// type OptionalUser = MakeOptional<User>;
// let user: OptionalUser = {
//     id: 1,
//     name: undefined,
//     age: 25,
//     birthday: undefined
//  };

//  console.log(user); // Output: { id: 1, name: undefined, age: 25 }

// let a = ['test', '123'];
// let b = ['a', 'b', 'c'];
// swap<string>(a, 0, b, 2);
// console.log(a);
// console.log(b);

// let a1 = [20, 30 , 40];
// let b1 = [1, 2, 3, 4, 5];
// swap<number>(a1, 0, b1, 2);
// console.log(a1)
// console.log(b1)

// let mechanic = new Mechanic();
// let someCar = { engine: { horsepower: 350, type: 'diesel' }, tires: { model: 'BRIT', airPressure: 33 }, body: { material: 'aluminum' } };
// let notACar = { vroom: false };
// let maybeCar = { tires: { model: 'BRIT' }, body: { material: 'aluminum' } };
// let maybeCar2 = { engine: { horsepower: 220 }, tires: { model: 'BRIT', wear: 'High', airPressure: 33 }, body: { material: 'aluminum' } };
// let maybeCar3 = { engine: { horsepower: 250 }, tires: { model: 'Nie' }  };
// let maybeCar4 = { engine: { horsepower: 220, type: 'electric' }, tires: { model: 'BRIT' }, body: { material: 'steel', weight: 2670 } };
// let maybeCar5 = { engine: { horsepower: '220', type: 'electric' }, tires: { model: 'BRIT', airPressure: 28 }, body: { material: 'steel', weight: 2670 } };

// mechanic.technicalInspection(someCar);      //ok
// mechanic.technicalInspection(maybeCar2);    //ok

// // mechanic.technicalInspection(maybeCar4);    //TS Error
// // mechanic.technicalInspection(notACar);      //TS Error
// // mechanic.technicalInspection(maybeCar);     //TS Error
// // mechanic.technicalInspection(maybeCar3);    //TS Error
// // mechanic.technicalInspection(maybeCar5);    //TS Error

// let countedSet = new CountedSet<string>();
// countedSet.add('test');
// countedSet.add('test');
// console.log(countedSet.contains('test'));
// console.log(countedSet.getNumberOfCopies('test'));
// countedSet.remove('test')
// countedSet.remove('test')
// countedSet.remove('test')
// console.log(countedSet.getNumberOfCopies('test'));
// console.log(countedSet.contains('test'));

// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
// codesCounterSet.add(404);
// codesCounterSet.add(200);
// console.log(codesCounterSet.contains(404));
// console.log(codesCounterSet.getNumberOfCopies(200));

// console.log(conditionalNumber<number>(20.3555));
// console.log(conditionalNumber<string>('wow'));
// console.log(conditionalNumber<boolean>('a string'));
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");

// console.log('-----------')
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'))

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
// logger.log(LoggingLevel.Info, "Just a simple message.");
// logger.log(LoggingLevel.Error, "A Problem happened.");
// console.log('-----------')
// console.log(logger.getFormat());
// console.log([...logger.cachedLogs.entries()].map(x => x[1].join('\n')).join('\n'));

// import { Choose } from "./choose-type";

// type test = { 
//    name: string,
//    age: number,
//    test:() => string;
// }
// type extracted = Choose<test, 'name' | 'age'>

// type anotherType = {
//     time: Date,
//     duration: number,
//     test: () => string,
//     val: 200 | 300,
//     user: {
//         name: string,
//         age: number
//     }
// }
// type nestedUserAndTime = 'user' | 'time'
// type extracted2 = Choose<anotherType, nestedUserAndTime>

// type kosta = {
//     firstName: string,
//     middleName: string,
//     lastName: string,
//     age: number,
//     address: {
//         city: string,
//         street: string,
//         zipCode: string
//     },
//     hobbies: string[],
//     getFullName: () => string,
//     getAddress: () => string
// }

// type kostaExtracted = Choose<kosta, 'firstName' | 'lastName' | 'getFullName' | 'address'>
// console.log("test");

// import { AllFunctions } from "./function-extraction";
// type test = { 
//    name: string,
//    age: number,
//    test:() => string;
// }
// type extracted = AllFunctions<test>

// type Employee = {
//     name: string,
//     salary: number,
//     work: () => void,
//     takeBreak: () => string
// };
// type extracted2 = AllFunctions<Employee>;

// type Nope = {
//     name: string
// };
// type extracted3 = AllFunctions<Nope>;

import { PlannedHoliday, HolidayManager, TravelVacation, MountainVacation, BeachVacation , Holiday } from "./holiday-manager";

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations())
let holiday3 = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday4 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager2 = new HolidayManager<Holiday, BeachVacation>();
holidayManager2.reserveVacation(holiday3, BeachVacation.ScubaDiving);
holidayManager2.reserveVacation(holiday4, BeachVacation.Sea);
console.log(holidayManager2.listReservations())

