// function isPrimeFactorLargerThanFive(number) {
//   const factors = [];
//   let divisor = 2;

//   while (number >= 2) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//       number = number / divisor;
//     } else {
//       divisor++;
//     }
//   }

//   for (let i = 0; i < factors.length; i++) {
//     if (factors[i] < 5) return true;
//     else return false;
//   }
// }

// console.log(isPrimeFactorLargerThanFive(257));

function hasPrimeFactorLargerThanFive(num) {
  while (num % 2 === 0) num /= 2;
  while (num % 3 === 0) num /= 3;
  while (num % 5 === 0) num /= 5;
  return num === 1;
}

console.log(hasPrimeFactorLargerThanFive(13));
