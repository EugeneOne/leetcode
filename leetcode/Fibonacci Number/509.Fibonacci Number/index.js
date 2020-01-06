/**
 * @param {number} N
 * @return {number}
 */
// 普通递归
// var fib = function(N) {
//   if (N <= 1) return N;
//   return fib(N - 1) + fib(N - 2);
// };
// 尾递归
// var fib = function(N, N2 = 0, total = 1) {
//   if (N === 0) return 0;
//   if (N === 1) return total;
//   return fib(N - 1, total, total + N2);
// };

// 动态规划
var fib = function(N) {
  let sum = {};
  sum[1] = 0;
  sum[2] = 1;
  for (let i = 3; i <= N; i++) {
    sum[i] = sum[i - 2] + sum[i - 1];
  }
  return sum[N];
};

console.log(fib(10));
