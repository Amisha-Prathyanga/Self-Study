function getMoneySpent(keyboards, drives, b) {
  let totalPrice = 0;
  let maxTotalPrice = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      totalPrice = keyboards[i] + drives[j];
      if (totalPrice <= b && totalPrice > maxTotalPrice) {
        maxTotalPrice = totalPrice;
      }
    }
  }
  return maxTotalPrice;
}

console.log(getMoneySpent([5], [5], 5));
