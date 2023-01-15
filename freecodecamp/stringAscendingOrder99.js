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

// function sort_sentence(sentence) {
//     let words = sentence.split(" ");
//     let sortedWords = words.map(word => {
//         return word.split("").sort().join("");
//     });
//     sortedWords.sort((a, b) => {
//         return a.length - b.length;
//     });
//     return sortedWords.join(" ");
// }

// console.log(sort_sentence("she lives with him in a small apartment"));
