function calculateStepCount(inputMatrix, outputMatrix) {
  let count = 0;
  for (let i = 0; i < inputMatrix.length; i++) {
    for (let j = 0; j < inputMatrix[i].length; j++) {
      if (inputMatrix[i][j] !== outputMatrix[i][j]) {
        let location = findLocation(inputMatrix, outputMatrix[i][j]);
        let temp = inputMatrix[i][j];
        inputMatrix[i][j] = inputMatrix[location[0]][location[1]];
        inputMatrix[location[0]][location[1]] = temp;
        count += 1;
      }
    }
  }
  return count;
}

function findLocation(inputMatrix, num) {
  for (let i = 0; i < inputMatrix.length; i++) {
    for (let j = 0; j < inputMatrix[i].length; j++) {
      if (inputMatrix[i][j] === num) {
        return [i, j];
      }
    }
  }
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
