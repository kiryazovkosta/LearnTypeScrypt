// import { User2 } from "./decorators-02.js";

// const user = new User2("John Doe", 30, "kosta@example.com");
// user.email = "kosta@example.com";
// console.log(user.getInfo(false));

// import { Person } from "./logging-decorator.js";
// let person = new Person('John', 'Does');
// Person.getFullName(person.fName, person.lName)
// Person.getFullName('Benny', 'Tres');

// import { Age } from "./validate-age.js";
// let ageVal = new Age(10);
// ageVal.age = -10;

// import { User } from "./authorization.js";
// const user1 = new User("John Doe", 30, 'ABCD-1234');
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

import { User } from "./flexible-validation.js";

//let user = new User('John', 130,'hardPassword12');
// let user2 = new User('John', 30, '!test');
// let user3 = new User('John', 25, '@werty');
let user4 = new User('Jo', 20, 'password123');