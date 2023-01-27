function nonDivisibleSubset(S, k) {
  // Create an array to store the remainder frequency count
  var remainderCount = new Array(k).fill(0);
  // Count the remainder frequency for each element in S
  for (var i = 0; i < S.length; i++) {
    remainderCount[S[i] % k]++;
  }
  // Initialize the max subset size
  var maxSize = 0;
  // Check the remainder with the largest count
  if (remainderCount[0] > 0) maxSize++;
  // Check the other remainders
  for (var i = 1; i <= k / 2; i++) {
    // Choose the larger count among the two complementary remainders
    if (i != k - i) {
      maxSize += Math.max(remainderCount[i], remainderCount[k - i]);
    }
  }
  // If k is even, check the middle remainder
  if (k % 2 == 0) {
    maxSize++;
  }
  // Return the max subset size
  return maxSize;
}

console.log(nonDivisibleSubset([19, 10, 12, 10, 24, 25, 22], 4));
