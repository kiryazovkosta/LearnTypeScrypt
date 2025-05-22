export class Person {
    constructor(public name: string, public age: number) {
    }
}

enum Day {
    Monday = 1,
    Tuesday = 2
}

let day = Day.Monday;
console.log(day);