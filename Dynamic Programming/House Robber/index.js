/**
 * @param {number[]} nums
 * @return {number}
 */
// dp1 = A1
// dp2 = max(A1, A2)
// dp3 = max(A1+A3, A2)
// dpN = max(dp(N-2)+AN, dp(N-1))
// 动态规划
var rob = function(nums) {
  const LEN = nums.length;
  const DP = [];
  DP[0] = 0;
  DP[1] = nums[0];
  for (let i = 2; i <= LEN; i++) {
    if (DP[i - 2] + nums[i - 1] >= DP[i - 1]) {
      DP[i] = DP[i - 2] + nums[i - 1];
    } else {
      DP[i] = DP[i - 1];
    }
  }
  return DP[LEN];
};

console.log(rob([]));
