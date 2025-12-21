const shiftArray = require("./shift-array");

describe("Shift array", () => {
  test("Shift array when k is less than array length", () => {
    expect(shiftArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(shiftArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
  });
  test("Shift array when k is more than array length", () => {
    expect(shiftArray([1, 2, 3, 4, 5, 6, 7], 10)).toEqual([
      5, 6, 7, 1, 2, 3, 4,
    ]);
    expect(shiftArray([-1, -100, 3, 99], 6)).toEqual([3, 99, -1, -100]);
  });
});
