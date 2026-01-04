// # Sorted Union Kata

// ## Challenge
// Write a function `uniteUnique(...arrays)` that takes two or more arrays and returns a new array of unique values in the order they first appear.

// ## Rules
// - Include all unique values from all arrays
// - Keep them in the order they first appear
// - No duplicates in the final array

// ## Examples

// ```javascript
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// // [1, 3, 2, 5, 4]
// // 1, 3, 2 from first array
// // 5, 4 are new from second array (2, 1 already seen)
// // Nothing new from third array

// uniteUnique([1, 2, 3], [5, 2, 1]);
// // [1, 2, 3, 5]
// ```

// ## Test Your Solution

function uniteUnique(...arrays) {
  // Your code here
  let unique = [];

  const input = [...arrays];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (unique.includes(input[i][j]) === false) {
        unique.push(input[i][j]);
      }
    }
  }
  return unique;
}

module.exports = uniteUnique;

// // Tests
// console.log(
//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),
//   "→ Expected: [1, 3, 2, 5, 4]"
// );
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]), "→ Expected: [1, 2, 3, 5]");
// console.log(
//   uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]),
//   "→ Expected: [1, 2, 3, 5, 4, 6, 7, 8]"
// );
// console.log(
//   uniteUnique([1, 3, 2], [5, 4], [5, 6]),
//   "→ Expected: [1, 3, 2, 5, 4, 6]"
// );
// console.log(
//   uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]),
//   "→ Expected: [1, 3, 2, 5, 4]"
// );
