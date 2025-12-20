// Given an n x n 2D matrix, representing an image, rotate the image by 90 deg clockwise
// Bonus points by changing the matrix directly and not allocating a new array

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

function rotateMatrix(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i].unshift(matrix[j][i]);
    }
  }
  //   console.log(newMatrix);
  return newMatrix;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
