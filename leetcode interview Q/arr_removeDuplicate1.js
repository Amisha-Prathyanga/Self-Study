// var removeDuplicates = function (nums) {
//   let index = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[index] = nums[i + 1];
//       index++;
//     }
//   }
//   console.log(index);
//   return index;
// };

var removeDuplicates = function (nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // We skip to next index if we see a duplicate element
    if (nums[i - 1] != nums[i]) {
      /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
};

nums = [0, 0, 1, 2, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
