var isPalindrome = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!s[i].includes("," || ":")) {
      arr.push(s[i]);
    }
  }

  let joinedArr = arr.join("");

  return joinedArr;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
