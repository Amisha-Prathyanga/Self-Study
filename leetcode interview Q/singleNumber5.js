var singleNumber = function (nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return set.values().next().value;
};

nums = [1, 1, 2, 2, 3];
console.log(singleNumber(nums));
