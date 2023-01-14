// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));

// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // first[0].id = 10;

// // console.log(combined);

// const combined = [...first, "a", ...second, "b"];

// console.log(combined);

// ------------------------------------------------------------
//Exercise 1

// function arrayFromRange(min, max) {
//   const array = [];
//   for (let i = min; i <= max; i++) array.push(i);
//   return array;
// }

// const numbers = arrayFromRange(1, 4);

// console.log(numbers);

// --------------------------------------------------------------
// Exercise 2

// function includes(array, searchElement) {
//   for (let number of array) if (number === searchElement) return true;
//   return false;
// }

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 5));

// ------------------------------------------------------------------
// Exercise 3

// function except(array, excluded) {
//   const output = [];
//   for (let element of array) {
//     if (!excluded.includes(element)) output.push(element);
//   }
//   return output;
// }

// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1, 2,3,4]);

// console.log(output);

// ------------------------------------------------------------------
// Exercise 4

// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length || position < 0) {
//     console.log("Invalid offset");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 1);

// console.log(output);

// ------------------------------------------------------------------
// Exercise 5

// function countOccurences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count += 1;
//   return count;
// }

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurences(numbers, -1);

// console.log(count);

// method 2

// const numbers = [1, 2, 3, 4, 1];
// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurence = current === searchElement ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurence;
//   }, 0);
// }

// ------------------------------------------------------------------
// Exercise 6

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let max = array[0];

//   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
//   return max;
// }

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);

// console.log(max);

//method 2
// function getMax(array) {
//   if (array.length === 0) return undefined;

//   return array.reduce((a, b) => (a > b ? a : b));
// }

// const numbers = [1, 2, 40, 3, 4];

// const max = getMax(numbers);

// console.log(max);

// ------------------------------------------------------------------
// Exercise 7

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const filtered = movies.filter((m) => m.year === 2018 && m.rating > 4);

console.log(filtered);

const sorted = filtered.sort((a, b) => b.rating - a.rating);

console.log(sorted);

const items = sorted.map((i) => i.title);

console.log(items);
