const itemList = [
  { weight: 10, price: 20, size: 30 },
  { weight: 15, price: 25, size: 35 },
  { weight: 20, price: 30, size: 40 },
  { weight: 25, price: 35, size: 40 },
];

function getTotalPrice(items, maxWeight, maxSize, curIndex) {
  let totalPrice = 0;
  let curWeight = 0;
  let curSize = 0;

  for (let i = 0; i < curIndex; i++) {
    if (
      curWeight + items[i].weight <= maxWeight &&
      curSize + items[i].size <= maxSize
    ) {
      curWeight += items[i].weight;
      curSize += items[i].size;
      totalPrice += items[i].price;
    }
  }

  return totalPrice;
}

console.log(getTotalPrice(itemList, 30, 100, itemList.length));