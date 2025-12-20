function integerToRoman(number) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

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
  ];
  let romanStr = "";
  for (let i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      romanStr += letters[i];
      number -= values[i];
    }
  }
  return romanStr;
}

console.log(integerToRomann(357));
console.log(integerToRoman(29));
console.log(integerToRoman(2025));
console.log(integerToRoman(1920));
