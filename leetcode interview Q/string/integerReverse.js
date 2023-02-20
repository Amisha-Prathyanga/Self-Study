var reverse = function (x) {
  //   const len = x.length;
  //   if (x[len - 1] === 0) {
  //     x.pop();
  //   }

  //   if(typeof x[0] !== Number){

  //       return Number(String(x).split("").reverse().join(""));
  //   }

  let rev = "";
  const len = x.length;
  let start = x < 0 ? 1 : 0;
  if (x[len - 1] === 0) {
    x.pop();
  }
  for (let i = start; i < len; i++) {
    rev = x[i] + rev;
  }

  return x < 0 ? "-" + rev : rev;
};

x = "-123001";

console.log(reverse(x));

// function reverseInt(x) {
//   let intRev = "";
//   let start = x < 0 ? 1 : 0;
//   for (let i = start; i < x.length; i++) {
//     intRev = x[i] + intRev;
//   }
//   return x < 0 ? "-" + intRev : intRev;
// }

// let x = "123";

// console.log(reverseInt(x));

// console.log("12345 in reverse is:  " + reverseInt("12345"));
// console.log("-12345 in reverse is: " + reverseInt("-12345"));
