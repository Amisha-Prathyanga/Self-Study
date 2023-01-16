function countingValleys(n, s) {
  let position = 0;
  let valleyCount = 0;
  let inValley = false;
  for (let i = 0; i < n; i++) {
    if (s[i] === "U") {
      position++;
    } else {
      position--;
    }
    if (!inValley && position < 0) {
      valleyCount++;
      inValley = true;
    } else if (inValley && position >= 0) {
      inValley = false;
    }
  }
  return valleyCount;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
