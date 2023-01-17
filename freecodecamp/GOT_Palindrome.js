// function gameOfThrones(s) {
//   let charCount = {};
//   let oddCount = 0;
//   for (let char of s) {
//     charCount[char] = charCount[char] + 1 || 1;
//   }
//   for (let count of Object.values(charCount)) {
//     if (count % 2 !== 0) oddCount++;
//   }
//   return oddCount <= 1 ? "YES" : "NO";
// }
// console.log(gameOfThrones("aaaaabbb"));

function gameOfThrones(s) {
  let charCount = new Array(26).fill(0);
  let oddCount = 0;
  for (let char of s) {
    charCount[char.charCodeAt() - "a".charCodeAt()]++;
  }
  for (let count of charCount) {
    if (count % 2 !== 0) oddCount++;
  }
  return oddCount <= 1 ? "YES" : "NO";
}
console.log(gameOfThrones("aaaaabbb"));
