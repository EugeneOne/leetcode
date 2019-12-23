/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
// var twoSum = function(nums, target) {
//   let result = [];
//   const LEN = nums.length;
//   for (let i = 0; i < LEN; i++) {
//     for (let j = i + 1; j < LEN; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// hash表法
var twoSum = function(nums, target) {
  const MapNums = new Map();
  const LEN = nums.length;
  let result = [];
  nums.forEach((num, index) => {
    MapNums.set(num, index);
  });
  for (let i = 0; i < LEN; i++) {
    let diff = target - nums[i];
    if (MapNums.has(diff) && MapNums.get(diff) !== i) {
      return [i, MapNums.get(diff)];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
