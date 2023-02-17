var containsDuplicate = function (nums) {
  let sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }

    return false;
  }
};

nums = [1, 2, 3, 4, 5, 1];
console.log(containsDuplicate(nums));

var containsDuplicate = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

nums = [1, 2, 3, 4, 5];
console.log(containsDuplicate(nums));
