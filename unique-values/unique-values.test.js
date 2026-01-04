const uniteUnique = require("./unique-values");

describe("Extract unique values", () => {
  test("Unite unique values", () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
      1, 3, 2, 5, 4,
    ]);
    expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
      1, 2, 3, 5, 4, 6, 7, 8,
    ]);
  });
  //   test("Shift array when k is more than array length", () => {
  //     expect(shiftArray([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([
  //       5, 6, 7, 1, 2, 3, 4,
  //     ]);
  //     expect(shiftArray([-1, -100, 3, 99], 6)).toEqual([3, 99, -1, -100]);
  //   });
});
