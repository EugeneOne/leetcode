/**
 * @param {number} n
 * @return {number}
 */

// dpN = dp(N-1) + dp(N-2)
var climbStairs = function(n) {
  let sum = {};
  sum[1] = 1;
  sum[2] = 2;
  for (let i = 3; i <= n; i++) {
    console.log(sum, i);
    sum[i] = sum[i - 2] + sum[i - 1];
  }
  return sum[n];
};
console.log(climbStairs(10));
