const assert = require('assert');

import { Person } from "../src/person"

describe("1. Create a Person Class", () => {
	it("should returns valid string when introduced is provided", () => {
		const person = new Person("John", "Doe", 30);
		expect(person.introduced()).toBe("My name is John Doe and I am 30 years old.");
	});
});