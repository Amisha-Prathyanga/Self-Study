function drowPattern(X) {
  if (X % 2 === 0) return "X should be odd number";
  let grid = new Array(X);
  for (let i = 0; i < X; i++) {
    grid[i] = new Array(X);
  }
  for (var i = 0; i < X; i++) {
    for (var j = 0; j < X; j++) {
      if (i === (X - 1) / 2 || j === (X - 1) / 2) {
        grid[i][j] = "x";
      } else if (i === j || i + j === X - 1) {
        grid[i][j] = "o";
      } else {
        grid[i][j] = "o";
      }
    }
  }
  return grid;
}

console.log(drowPattern(5));

// function createPattern(X) {
//   if (X % 2 === 0) return "X should be odd number";
//   var grid = new Array(X);
//   for (var i = 0; i < X; i++) {
//     grid[i] = new Array(X);
//   }
//   for (var i = 0; i < X; i++) {
//     for (var j = 0; j < X; j++) {
//       if (i === (X - 1) / 2 || j === (X - 1) / 2) {
//         grid[i][j] = "x";
//       } else if (i === j || i + j === X - 1) {
//         grid[i][j] = "o";
//       } else {
//         grid[i][j] = " ";
//       }
//     }
//   }
//   return grid;
// }

// console.log(createPattern(5));
