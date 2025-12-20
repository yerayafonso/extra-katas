function romanToInteger(string) {
  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ].reverse();

  const letters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ].reverse();

  let num = 0;

  for (let i = 0; i < letters.length; i++) {
    while (string.length > 0) {
      string -= string.match(letters[i]);
      num += values[i];
    }
  }
  return num;
}

console.log(romanToInteger("XXV"));
console.log(romanToInteger("LIV"));
console.log(romanToInteger("DCLXXXIV"));
