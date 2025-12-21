// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(n) {
  let newArray = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(`${i}`);
    }
  }
  return newArray;
}

module.exports = fizzBuzz;
