const integerToRoman = require("./integer-to-roman");

describe("Convert to Roman Numerals", () => {
  test("Convert a 2 digit integer to roman numerals", () => {
    expect(integerToRoman(94)).toBe("XCIV");
    expect(integerToRoman(39)).toBe("XXXIX");
  });

  test("Convert a 3 digit integer to roman numerals", () => {
    expect(integerToRoman(352)).toBe("CCCLII");
    expect(integerToRoman(684)).toBe("DCLXXXIV");
  });

  test("Convert a 4 digit integer to roman numerals", () => {
    expect(integerToRoman(2025)).toBe("MMXXV");
    expect(integerToRoman(1894)).toBe("MDCCCXCIV");
  });
});
