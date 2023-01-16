// function fairRations(b) {
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] % 2 === 1) {
//       b[i]++;
//       count1++;
//       if (b[i + 1] % 2 === 1) {
//         b[i + 1]++;
//         count2++;
//       }
//       if (b[i - 1] % 2 === 1) {
//         b[i - 1]++;
//         count2++;
//       }
//       if (b[i + 1] % 2 === 0 && b[i - 1] % 2 === 0) {
//         b[i + 1];
//         count2++;
//       }
//     }
//   }
//   let minLoaves = count1 + count2;
//   return minLoaves;
// }

//console.log(fairRations([2, 3, 4, 5, 6]));

function fairRations(B) {
  let loaves_distributed = 0;
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      if (i == B.length - 1) {
        return "NO";
      }
      B[i]++;
      B[i + 1]++;
      loaves_distributed += 2;
    }
  }
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      return "NO";
    }
  }
  return loaves_distributed;
}

console.log(fairRations([1,2]));
