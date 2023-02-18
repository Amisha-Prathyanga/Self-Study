var reverseString = function (s) {
  return s.reverse().join(",");
};

s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
