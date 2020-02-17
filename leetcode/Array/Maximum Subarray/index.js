/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// dp[i] = max(dp[i - 1] + nums[i], nums[i])
var maxSubArray = function(nums) {
    if(!nums || !nums.length) return;
    if(nums.length === 1) return nums[0];
    let newArr = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        newArr[i] = Math.max(newArr[i - 1] + nums[i], nums[i])
    }
    return Math.max(...newArr);
};

  const arr = [-2,-1];
  console.log(maxSubArray(arr));