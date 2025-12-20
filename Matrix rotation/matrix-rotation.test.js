const rotateMatrix = require("./matrix-rotation");

describe("Rotate Matrix", () => {
  test("Rotate a 2x2 matrix 90 deg clockwise", () => {
    expect(
      rotateMatrix([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });
});

describe("Rotate Matrix", () => {
  test("Rotate a 3x3 matrix 90 deg clockwise", () => {
    expect(
      rotateMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});

describe("Rotate Matrix", () => {
  test("Rotate a 4x4 matrix 90deg clockwise", () => {
    expect(
      rotateMatrix([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});

describe("Rotate Matrix", () => {
  test("Rotate a 5x5 matrix 90deg clockwise", () => {
    expect(
      rotateMatrix([
        [5, 24, 9, 11, 17],
        [23, 4, 8, 10, 25],
        [21, 3, 6, 7, 18],
        [15, 14, 12, 16, 2],
        [20, 13, 1, 19, 22],
      ])
    ).toEqual([
      [20, 15, 21, 23, 5],
      [13, 14, 3, 4, 24],
      [1, 12, 6, 8, 9],
      [19, 16, 7, 10, 11],
      [22, 2, 18, 25, 17],
    ]);
  });
});
