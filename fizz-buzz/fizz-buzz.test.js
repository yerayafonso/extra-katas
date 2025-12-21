const fizzBuzz = require("./fizz-buzz");

describe("Fizz Buzz", () => {
  test("Generate array", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    expect(fizzBuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
