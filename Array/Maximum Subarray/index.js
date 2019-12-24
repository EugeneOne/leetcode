/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力破解法
var maxSubArray = function(nums) {
  let max = nums[1];
  let num = 0;
  const LEN = nums.length;
  while (num !== LEN) {
    for (let i = 0; i < LEN; i++) {
      console.log('1');
      let index = num;
      let result = 0;
      max = nums[i];
      // while (index && nums[index]) {
      //   result += nums[i + index];
      //   index--;
      // }
      if (max < result) {
        max = nums[i];
      }
    }
    num++;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
