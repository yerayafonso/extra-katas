// # Substring Finder

// ## Challenge
// Write a function `substringTest(str1, str2)` that returns `true` if the two strings share a common substring of 2+ letters, otherwise `false`.

// ## Rules
// - Only substrings of **2 or more letters** count
// - Case insensitive: "A" equals "a"
// - Letters must be in the same order

// ## Examples

// substringTest("Something", "Fun");    // false
// substringTest("Something", "Home");   // true (both have "me")
// substringTest("HELLO", "bell");       // true (both have "ell")

// ## Test Your Solution

function substringTest(str1, str2) {
  // Your code here
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();
  for (let i = 0; i < lowerStr1.length - 1; i++) {
    let ref = lowerStr1.slice(i, i + 2);
    if (lowerStr2.includes(ref)) {
      return true;
    }
  }
  return false;
}

module.exports = substringTest;

// // Tests
console.log(substringTest("Something", "Fun"), "→ Expected: false");
console.log(substringTest("Something", "Home"), "→ Expected: true");
console.log(substringTest("HELLO", "bell"), "→ Expected: true");
console.log(substringTest("test", "llama"), "→ Expected: false");
console.log(substringTest("Apple", "Pepsi"), "→ Expected: false");
