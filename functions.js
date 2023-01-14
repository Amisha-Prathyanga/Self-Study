//Exercise 01

// function sum(...args) {
//   const total = args.reduce((a, b) => a + b);
//   return total;
// }

// console.log(sum([1, 2, 3, 4, 5]));

//to pass args in an array

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

//   return items.reduce((a, b) => a + b);
// }

// -------------------------------------------------------------
//Exercise 02

// const circle = {
//   radius: 2,
//   get area() {
//     const a = 3.14 * this.radius * this.radius;
//     return a;
//   },
// };

// circle.radius = 3;

// console.log(circle.area);

//Read only is done by getter

//Exercise 03
try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurences(null, 1);

  console.log(count);
} catch (e) {
  console.log(e);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Is not an array.");
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurence;
  }, 0);
}
