// function twoSum(nums, target_num) {
//   var map = [];
//   var indexnum = [];

//   for (var x = 0; x < nums.length; x++) {
//     if (map[nums[x]] != null) {
//       var index = map[nums[x]];
//       indexnum[0] = index;
//       indexnum[1] = x;
//       break;
//     } else {
//       map[target_num - nums[x]] = x;
//     }
//   }
//   return indexnum;
// }
// console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));

// function icecreamParlor(m, arr) {
//   let map = [];
//   let indexnum = [];

//   for (let i = 1; i <= arr.length; i++) {
//     if (map[arr[i]] != null) {
//       let index = map[arr[i]];
//       indexnum[0] = index;
//       indexnum[1] = i + 1;
//       break;
//     } else {
//       map[m - arr[i]] = i + 1;
//     }
//   }
//   return indexnum;
// }

// console.log(icecreamParlor(19, [6, 3, 5, 1, 2]));

function icecreamParlor(m, cost) {
  // check if the input is valid
  if (m <= 0 || !cost || cost.length < 2) {
    return "Invalid input: please provide a positive target value and a non-empty array with at least two elements.";
  }

  var indexnum = [];
  var seen = new Set(); // use a set to keep track of the elements and their indices

  for (var x = 0; x < cost.length; x++) {
    if (seen.has(m - cost[x])) {
      indexnum[0] = x + 1;
      indexnum[1] = cost.indexOf(m - cost[x]) + 1;
      break;
    }
    seen.add(cost[x]);
  }
  return indexnum;
}

console.log(icecreamParlor(19, [6, 3, 5, 1, 2]));
