var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    if (s.indexOf(char) == i && s.lastIndexOf(char) === i) {
      return i;
    }
  }

  return -1;
};

s = "loveleetcode";
console.log(firstUniqChar(s));
