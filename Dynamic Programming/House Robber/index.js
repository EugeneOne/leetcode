/**
 * @param {number[]} nums
 * @return {number}
 */
// dp1 = A1
// dp2 = max(A1, A2)
// dp3 = max(A1+A3, A2)
// dpN = max(dp(N-2)+AN, dp(N-1))
// var rob = function(nums) {
//   let max = nums[0];
//   if (nums.length < 3) {
//     max = Math.max.apply(null, nums);
//   }

//   for (let i in nums) {
//     max = Math.max.apply(nums[i - 2] + nums[i], nums[i - 1])
//   }
// };

// rob([1, 2, 53, 23]);
