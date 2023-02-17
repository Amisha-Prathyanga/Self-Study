// var moveZeroes = function (nums) {
//     const set = new Set();
//   for (let num of nums) {
//     if (num === 0) {

//     }
// }
// return nums;
// };

// nums = [0, 1, 2, 3, 0, 6];

// console.log(moveZeroes(nums));

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i = i - 1;
    }
  }
  return nums;
};

nums = [0, 1, 2, 3, 0, 6];

console.log(moveZeroes(nums));
