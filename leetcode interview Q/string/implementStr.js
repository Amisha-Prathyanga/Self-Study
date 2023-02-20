var strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }

  return -1;
};

haystack = "hello";
needle = "llr";

console.log(strStr(haystack, needle));
