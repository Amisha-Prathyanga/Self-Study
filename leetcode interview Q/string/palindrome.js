var isPalindrome = function (s) {
  //   let arr = [];

  //   for (let i = 0; i < s.length; i++) {
  //     if (!s[i].includes("," || ":")) {
  //       arr.push(s[i]);
  //     }
  //   }

  //   let joinedArr = arr.join("");

  //   return joinedArr;

  let joinedS = s.split(" ").join("").toLowerCase();
  let reverseS = joinedS.split("").reverse().join("");

  for (let i = 0; i < joinedS.length; i++) {
    if (joinedS === reverseS) {
      return "It is a palindrome!";
    }
  }

  return "not a palindrome";
};

s = "racecar";
console.log(isPalindrome(s));
