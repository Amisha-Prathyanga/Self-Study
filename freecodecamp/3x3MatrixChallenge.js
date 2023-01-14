function calculateStepCount(inputMatrix, outputMatrix) {
  let count = 0;
  for (let i = 0; i < inputMatrix.length; i++) {
    for (let j = 0; j < inputMatrix[i].length; j++) {
      if (inputMatrix[i][j] !== outputMatrix[i][j]) {
        count += 1;
      }
    }
  }
  return Math.ceil(count / 2);
}

console.log(
  calculateStepCount(
    [
      [3, 1, 2],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
  )
);
