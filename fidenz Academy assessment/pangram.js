function pangrams(s) {
  const result = new Set();
  for (const char of s.toUpperCase()) {
    let pattern = /[A-Z]/;
    if (pattern.test(char)) {
      result.add(char);
    }
  }
  return result.size === 26;
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
