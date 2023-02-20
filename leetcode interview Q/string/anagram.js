var isAnagram = function (s, t) {
  //   let sorts = s.split("").sort();
  //   let sortt = t.split("").sort();

  //   let len = 0;

  //   if (s.length > t.length) len = s.length;
  //   else len = t.length;

  //   for (let i = 0; i < len; i++) {
  //     if (sorts[i] !== sortt[i]) {
  //       return false;
  //     }
  //   }

  //   return true;

  let sorts = s.split("").sort();
  let sortt = t.split("").sort();

  let len = 0;

  if (s.length > t.length) {
    len = s.length;
  } else {
    len = t.length;
  }

  for (let i = 0; i < len; i++) {
    if (sorts[i] !== sortt[i]) {
      return false;
    }
  }

  return true;
};

s = "a";
t = "ab";
console.log(isAnagram(s, t));
