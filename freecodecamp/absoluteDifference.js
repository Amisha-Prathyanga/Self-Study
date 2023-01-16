function pickingNumbers(a) {
  // Create an empty array to store the frequency of each integer
  let freq = new Array(100).fill(0);
  // Iterate over the array and count the frequency of each integer
  for (let x of a) {
    freq[x]++;
  }
  // Initialize a variable to store the maximum length
  let maxLength = 0;
  // Iterate over the frequency array to find the maximum frequency
  for (let i = 0; i < freq.length - 1; i++) {
    maxLength = Math.max(maxLength, freq[i] + freq[i + 1]);
  }
  // Return the maximum length
  return maxLength;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
