import { Exercises } from "../src/exercise"

describe("1. Even Sum", () => {
  it("should sum of added numbers to be even", () => {
    let exercise = new Exercises();
    expect(exercise.evenSum(1, 2, 3)).toBe(true);
  });

    it("should sum of added numbers to be odd", () => {
    let exercise = new Exercises();
    expect(exercise.evenSum(1, 1, 1)).toBe(false);
  });
});

describe("2. Day of the Week", () => {
    it("should day name be Friday when input is five", () => {
        let exercise = new Exercises();
        expect(exercise.dayOfTheWeek(5)).toBe('Friday');
    });

    it("should day name be Monday when input is one", () => {
        let exercise = new Exercises();
        expect(exercise.dayOfTheWeek(1)).toBe('Monday');
    });

    it("should result be error when input is invalid", () => {
        let exercise = new Exercises();
        expect(exercise.dayOfTheWeek(-1)).toBe('error');
    });
});

describe("3. Format Person", () => {
    it("should output string is valid when input is tupple in format[string, number]", () => {
        let exercise = new Exercises();
        expect(exercise.formatPerson(['Ivan', 20])).toBe('Hello, my name is Ivan and my age is 20');
    });

    it("should output string is valid when input is tupple in format[string, number]", () => {
        let exercise = new Exercises();
        expect(exercise.formatPerson(['Joro', 30])).toBe('Hello, my name is Joro and my age is 30');
    });
});

describe("4. Convert Arrays", () => {
    it("should output is valid tupple[string, number]", () => {
        let exercise = new Exercises();
        const result = exercise.convertArray(['How', 'are', 'you?']);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(typeof result[0]).toBe('string');
        expect(typeof result[1]).toBe('number');
        expect(result[0]).toBe('Howareyou?');
        expect(result[1]).toBe(10);
    });

    it("should output is valid tupple[string, number] when input array contains empty strings", () => {
        let exercise = new Exercises();
        const result = exercise.convertArray(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(typeof result[0]).toBe('string');
        expect(typeof result[1]).toBe('number');
        expect(result[0]).toBe('Today is a nice day for TypeScript');
        expect(result[1]).toBe(34);
    });
});

describe("5. Summarize Person", () => {
    it("should output is valid tupple[number,string, number, string, string] when all input properties are populated", () => {
        let exercise = new Exercises();
        const result = exercise.summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        expect(typeof result[0]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[2]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[1]).toBe('string');
        expect(result[0]).toBe(12);
        expect(result[1]).toBe('Eliot Braylen Des');
        expect(result[2]).toBe(20);
        expect(result[3]).toBe('tennis, football, hiking');
        expect(result[4]).toBe('Sales Consultant -> 2500');
    });

    it("should output is valid tupple[number,string, number, string, string] when middle name is not provided", () => {
        let exercise = new Exercises();
        const result = exercise.summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing']);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        expect(typeof result[0]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[2]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[1]).toBe('string');
        expect(result[0]).toBe(20);
        expect(result[1]).toBe('Mary Trent');
        expect(result[2]).toBe(25);
        expect(result[3]).toBe('fitness, rowing');
        expect(result[4]).toBe('-');
    });

    it("should output is valid tupple[number,string, number, string, string] when required fields are provided", () => {
        let exercise = new Exercises();
        const result = exercise.summarizePerson(21, 'Joseph', 'Angler', 28);
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        expect(typeof result[0]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[2]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[1]).toBe('string');
        expect(result[0]).toBe(21);
        expect(result[1]).toBe('Joseph Angler');
        expect(result[2]).toBe(28);
        expect(result[3]).toBe('-');
        expect(result[4]).toBe('-');
    });

    it("should output is valid tupple[number,string, number, string, string] when required fields are provided", () => {
        let exercise = new Exercises();
        const result = exercise.summarizePerson(21, 'Kristine', 'Neva', 23, '');
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(5);
        expect(typeof result[0]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[2]).toBe('number');
        expect(typeof result[1]).toBe('string');
        expect(typeof result[1]).toBe('string');
        expect(result[0]).toBe(21);
        expect(result[1]).toBe('Kristine Neva');
        expect(result[2]).toBe(23);
        expect(result[3]).toBe('-');
        expect(result[4]).toBe('-');
    });
});

describe("6. Reversed Day of the Week", () => {
    it("should day number be five when input is Friday", () => {
        let exercise = new Exercises();
        expect(exercise.reversedDayofTheWeek('Friday')).toBe(5);
    });

    it("should day number be one when input is Monday", () => {
        let exercise = new Exercises();
        expect(exercise.reversedDayofTheWeek('Monday')).toBe(1);
    });

    it("should result be error when input is invalid", () => {
        let exercise = new Exercises();
        expect(exercise.reversedDayofTheWeek('Invalid')).toBe('error');
    });
});

describe("7. Unknown Response", () => {
    it("should response is dash when value in response is array", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 200, text: 'Ok', value: [1, 2, 3]})).toBe('-');
    });

    it("should response is valid when value in response is string", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 301, text: 'Moved Permanently', value: 'New Url' })).toBe('New Url');
    });

    it("should response is dash when value in response is object", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } })).toBe('-');
    });

    it("should response is valid when value in response is string", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 201, text: 'Created', value: 'Object Created' })).toBe('Object Created');
    });

    it("should response is dash when value in response is missing", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 404, text: 'Not found' })).toBe('-');
    });

    it("should response is dash when value in response is missing", () => {
        let exercise = new Exercises();
        expect(exercise.unknownRespons({ code: 500, text: 'Internal Server Error' })).toBe('-');
    });
});


describe("8. Custom Type Guard", () => {
    it("should response false when input is empty object", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray({})).toBeFalsy();
    });

    it("should response false when input is non empty object", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray({ test: 'one' })).toBeFalsy();
    });

    it("should response false when input is empty array", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray([])).toBeFalsy();
    });

    it("should response false when input is undefined", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray(undefined)).toBeFalsy();
    });

    it("should response false when input is null", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray(null)).toBeFalsy();
    });

    it("should response false when input is array of numbers", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray([12, 13])).toBeFalsy();
    });

    it("should response false when input is tupple", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray(['test', 123])).toBeFalsy();
    });

    it("should response false when input is array of strings", () => {
        let exercise = new Exercises();
        expect(exercise.isNonEmptyStringArray(['a', 'b', 'c'])).toBeTruthy();
    });

});

describe("9. Friday the 13th", () => {
    it("should result contains valid 13th Friday dates", () => {
        let exercise = new Exercises();
        const result = exercise.friday13(
        [
            {},
            new Date(2025, 4, 13),
            null,
            new Date(2025, 5, 13),
            '13-09-2023',
            new Date(2025, 6, 13),
        ]);
        expect(result).toBe('13-June-2025');
    });

    it("should result contains valid 13th Friday dates", () => {
        let exercise = new Exercises();
        const result = exercise.friday13(
        [
            new Date(2024, 0, 13),
            new Date(2024, 1, 13),
            new Date(2024, 2, 13),
            new Date(2024, 3, 13),
            new Date(2024, 4, 13),
            new Date(2024, 5, 13),
            new Date(2024, 6, 13),
            new Date(2024, 7, 13),
            new Date(2024, 8, 13),
            new Date(2024, 9, 13),
            new Date(2024, 10, 13),
            new Date(2024, 11, 13)
        ]);
        expect(result).toBe('13-September-2024\n13-December-2024');
    });
});