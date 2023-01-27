// const itemList = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function getTotalPrice(items, curWeight, curSize, curIndex) {
//   let totalPrice = 0;
//   let curWeight = 0;
//   let curSize = 0;

//   for (let i = 0; i < curIndex; i++) {
//     if (
//       curWeight + items[i].weight <= curWeight &&
//       curSize + items[i].size <= curSize
//     ) {
//       curWeight += items[i].weight;
//       curSize += items[i].size;
//       totalPrice += items[i].price;
//     }
//   }

//   return totalPrice;
// }

// console.log(getTotalPrice(itemList, 30, 100, itemList.length));

// const itemList = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function calculateTotalPrice(itemList, curWeight, curSize) {
//   let totalPrice = 0;
//   let currentWeight = 0;
//   let currentSize = 0;

//   for (let i = 0; i < itemList.length; i++) {
//     if (
//       currentWeight + itemList[i].weight <= curWeight &&
//       currentSize + itemList[i].size <= curSize
//     ) {
//       currentWeight += itemList[i].weight;
//       currentSize += itemList[i].size;
//       totalPrice += itemList[i].price;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice(itemList, 50, 50)); // Expected output: 35
// console.log(calculateTotalPrice(itemList, 30, 100)); // Expected output: 50

// const itemList = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function getTotalPrice(itemList, curWeight, curSize) {
//   let n = itemList.length;
//   let dp = Array(n + 1)
//     .fill()
//     .map(() => Array(curWeight + 1).fill(0));

//   for (let i = 1; i <= n; i++) {
//     for (let w = 1; w <= curWeight; w++) {
//       for (let s = 1; s <= curSize; s++) {
//         if (itemList[i - 1].weight <= w && itemList[i - 1].size <= s) {
//           dp[i][w] = Math.max(
//             dp[i - 1][w],
//             dp[i - 1][w - itemList[i - 1].weight] + itemList[i - 1].price
//           );
//         } else {
//           dp[i][w] = dp[i - 1][w];
//         }
//       }
//     }
//   }
//   return dp[n][curWeight];
// }
// console.log(getTotalPrice(itemList, 50, 50)); // Expected output: 35
// console.log(getTotalPrice(itemList, 30, 100)); // Expected output: 50

//------------------------------------------------------------------------------

function getTotalPrice(items, curWeight, curSize, curIndex) {
  let dp = Array(curIndex + 1)
    .fill(0)
    .map(() =>
      Array(curWeight + 1)
        .fill(0)
        .map(() => Array(curSize + 1).fill(0))
    );

  for (let i = 1; i <= curIndex; i++) {
    for (let w = 1; w <= curWeight; w++) {
      for (let s = 1; s <= curSize; s++) {
        if (items[i - 1].weight <= w && items[i - 1].size <= s) {
          dp[i][w][s] = Math.max(
            items[i - 1].price +
              dp[i - 1][w - items[i - 1].weight][s - items[i - 1].size],
            dp[i - 1][w][s]
          );
        } else {
          dp[i][w][s] = dp[i - 1][w][s];
        }
      }
    }
  }
  return dp[curIndex][curWeight][curSize];
}

// Example usage:
let itemList = [
  { weight: 10, price: 20, size: 30 },
  { weight: 15, price: 25, size: 35 },
  { weight: 20, price: 30, size: 40 },
  { weight: 25, price: 35, size: 40 },
];

console.log(getTotalPrice(itemList, 50, 50, itemList.length)); // Output: 35
console.log(getTotalPrice(itemList, 30, 100, itemList.length)); // Output: 50
