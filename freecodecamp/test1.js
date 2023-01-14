// const itemList = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function getTotalPrice(items, maxWeight, maxSize, curIndex) {
//   let totalPrice = 0;
//   let curWeight = 0;
//   let curSize = 0;

//   for (let i = 0; i < curIndex; i++) {
//     if (
//       curWeight + items[i].weight <= maxWeight &&
//       curSize + items[i].size <= maxSize
//     ) {
//       curWeight += items[i].weight;
//       curSize += items[i].size;
//       totalPrice += items[i].price;
//     }
//   }

//   return totalPrice;
// }

// console.log(getTotalPrice(itemList, 30, 100, itemList.length));

// const products = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function calculateTotalPrice(products, maxWeight, maxSize) {
//   let totalPrice = 0;
//   let currentWeight = 0;
//   let currentSize = 0;

//   for (let i = 0; i < products.length; i++) {
//     if (
//       currentWeight + products[i].weight <= maxWeight &&
//       currentSize + products[i].size <= maxSize
//     ) {
//       currentWeight += products[i].weight;
//       currentSize += products[i].size;
//       totalPrice += products[i].price;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice(products, 50, 50)); // Expected output: 35
// console.log(calculateTotalPrice(products, 30, 100)); // Expected output: 50

// const products = [
//   { weight: 10, price: 20, size: 30 },
//   { weight: 15, price: 25, size: 35 },
//   { weight: 20, price: 30, size: 40 },
//   { weight: 25, price: 35, size: 40 },
// ];

// function knapsack(products, maxWeight, maxSize) {
//   let n = products.length;
//   let dp = Array(n + 1)
//     .fill()
//     .map(() => Array(maxWeight + 1).fill(0));

//   for (let i = 1; i <= n; i++) {
//     for (let w = 1; w <= maxWeight; w++) {
//       for (let s = 1; s <= maxSize; s++) {
//         if (products[i - 1].weight <= w && products[i - 1].size <= s) {
//           dp[i][w] = Math.max(
//             dp[i - 1][w],
//             dp[i - 1][w - products[i - 1].weight] + products[i - 1].price
//           );
//         } else {
//           dp[i][w] = dp[i - 1][w];
//         }
//       }
//     }
//   }
//   return dp[n][maxWeight];
// }
// console.log(knapsack(products, 50, 50)); // Expected output: 35
// console.log(knapsack(products, 30, 100)); // Expected output: 50
