// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// ------------------------------------------

// let a, b;

// function Max(a, b) {
//   //   if (a > b) {
//   //     return a;
//   //   } else {
//   //     return b;
//   //   }

//   return a > b ? a : b;
// }

// console.log(Max(1, 3));

// -----------------------------------------

// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(800, 500));

//------------------------------------------
// function fizzBuzz(input) {
//   //   if (typeof input != "number") return "Not a Number";
//   if (typeof input != "number") return NaN;
//   else if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   else if (input % 3 === 0) return "Fizz";
//   else if (input % 5 === 0) return "Buzz";
//   else return input;
// }

// const output = fizzBuzz(false);
// console.log(output);

// ----------------------------------------------

// const num = Math.floor(72.5);
// console.log(num);

// --------------------------------------------------

// function checkSpeed(speed) {
//   if (speed <= 70) return "OK";
//   if (speed > 70) {
//     points = Math.floor((speed - 70) / 5);
//     if (points > 12) {
//       return "License Suspended";
//     } else if (points === 0) {
//       return "OK";
//     } else return "points : " + points;
//   }
// }

// const chkSpd = checkSpeed(123);
// console.log(chkSpd);

// ---------------------------------------------

// let type;

// function showNumbers(limit) {
//   for (i = 0; i <= limit; i++) {
//     if (i % 2 === 1) {
//       type = "odd";
//     } else {
//       type = "Even";
//     }
//     console.log(i, type);
//   }
// }

// const shNum = showNumbers(10);
// console.log(shNum);

// ------------------------------------

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// const array = [0, null, undefined, 1, 2, 3, 4, 3];

// console.log(countTruthy(array));

// ----------------------------------------

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// const movie = {
//   title: "avatar",
//   releaseYear: 2022,
//   rating: 8.4,
//   directors: "Mcmillan",
// };

// showProperties(movie);

// -----------------------------------

// function sum(limit) {
//   let Nmul3 = Math.floor(limit / 3);
//   let Nmul5 = Math.floor(limit / 5);
//   let SumMul3 = 0;
//   let SumMul5 = 0;
//   for (i = 1; i <= Nmul3; i++) {
//     SumMul3 = SumMul3 + 3 * i;
//   }
//   for (i = 1; i <= Nmul5; i++) {
//     SumMul5 = SumMul5 + 5 * i;
//   }
//   let Sum = SumMul3 + SumMul5;
//   return Sum;
// }

// console.log(sum(10));

// ------------------------------------------

// function Sum(limit) {
//   let sum = 0;
//   for (i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }
//   return sum;
// }

// console.log(Sum(9));

// ------------------------------------------------

// function calculateGrade(marks) {
//   let sum = 0;
//   for (let mark of marks) {
//     sum += mark;
//   }
//   let average = sum / marks.length;
//   if (average >= 1 && average < 60) return "F";
//   else if (average >= 60 && average < 70) return "D";
//   else if (average >= 70 && average < 80) return "C";
//   else if (average >= 80 && average < 90) return "B";
//   else if (average >= 90 && average < 100) return "A";
// }

// const marks = [96, 95, 90];

// console.log(calculateGrade(marks));

// ------------------------------------------------------

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showPrimes(10);
