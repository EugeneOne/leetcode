/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力破解法
// 时间复杂度过高
// var maxSubArray = function(nums) {
//   let max = nums[0];
//   let num = 1;
//   const LEN = nums.length;
//   while (num <= LEN) {
//     for (let i = 0; i < LEN; i++) {
//       let index = num - 1;
//       let result = 0;
//       while (index >= 0) {
//         result += nums[i + index];
//         index--;
//       }
//       // console.log(max, result);
//       if (max < result) {
//         max = result;
//       }
//     }
//     // console.log(num, LEN);
//     num++;
//   }
//   return max;
// };

// 动态规划
var maxSubArray = function(nums) {
  let sum = nums[0];
  let dp = 0;
  for (let num of nums) {
    if (dp > 0) {
      dp = num + dp;
    } else {
      dp = num;
    }
    console.log(dp, sum);
    sum = Math.max(dp, sum);
  }
  return sum;
};

console.log(maxSubArray([1, 2]));
