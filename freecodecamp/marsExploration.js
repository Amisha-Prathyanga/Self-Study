function marsExploration(s) {
  let origMsg = "SOS".repeat(s.length / 3);
  let chngLetterCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== origMsg[i]) chngLetterCount++;
  }
  return chngLetterCount;
}
console.log(marsExploration("SPTTOT"));
