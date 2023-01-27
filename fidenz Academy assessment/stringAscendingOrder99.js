function makeAlpahabetSentenceSort(str) {
  let sentence = str.split(" ");
  let sortedString = sentence.map((s) => {
    return s.split("").sort().join("");
  });
  sortedString.sort((a, b) => {
    return a.length - b.length;
  });
  return sortedString.join(" ");
}

console.log(
  makeAlpahabetSentenceSort("she lives with him in a small apartment")
);
