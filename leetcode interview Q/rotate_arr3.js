var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};

nums = [1, 2, 3, 4, 5, 6];
k = 2;
console.log(rotate(nums, k));

//method 2

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.unshift(...nums.splice(nums.length - k, k));

  return nums;
};

nums = [4, 7, 8, 9, 2, 3];
k = 3;

console.log(rotate(nums, k));
