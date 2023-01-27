// function drowPattern(X) {
//   if (X % 2 === 0) return "X should be odd number";
//   let grid = new Array(X);
//   for (let i = 0; i < X; i++) {
//     grid[i] = new Array(X);
//   }
//   for (var i = 0; i < X; i++) {
//     for (var j = 0; j < X; j++) {
//       if (i === (X - 1) / 2 || j === (X - 1) / 2) {
//         grid[i][j] = "x";
//       } else if (i === j || i + j === X - 1) {
//         grid[i][j] = "o";
//       } else {
//         grid[i][j] = "o";
//       }
//     }
//   }
//   return grid;
// }

// console.log(drowPattern(5));

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

function drowPattern(x) {
  //check weather is "x" a odd number
  if (x % 2 === 0) {
    console.log("X should be an odd number.");
    return;
  }

  //declaring and initializing variables
  let pattern = [];
  let mid = (x - 1) / 2;

  //creating pattern
  for (let i = 0; i < x; i++) {
    pattern[i] = [];
    for (let j = 0; j < x; j++) {
      if (Math.abs(i - mid) + Math.abs(j - mid) <= mid) {
        pattern[i][j] = "x";
      } else {
        pattern[i][j] = "o";
      }
    }
  }

  return pattern;
}

console.log(drowPattern(5));
