import { greeting } from "../src/decorators";

describe('testing greeting function', () => {
  test('greeting should returns valid string', () => {
    expect(greeting('Kosta')).toBe('Hello, Kosta!');
  });
});