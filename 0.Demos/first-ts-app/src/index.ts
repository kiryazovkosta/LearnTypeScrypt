import { Second } from "./second";

const second = new Second();
second.play();

let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 30;
let isEmployed: boolean = true;
let length: number = 5.5;
let hobbies: string[] = ["reading", "gaming", "coding"];

enum Gender {
    Male = 1,
    Female = 2,
    Other = 3,
}

function greet(name: string, gender: Gender,  title?: string): string {
    if (title === undefined) {
        title = "Mr.";
    }
    
    return `Hello, ${name} ${gender} ${title}!`;
}

console.log(greet(firstName, Gender.Male, "Miss"));
console.log(greet(firstName, Gender.Female));

function increment(x: number): void {
    x = x + 1;
}

let settings = {
    theme: "dark",
    notifications: "enabled"
};