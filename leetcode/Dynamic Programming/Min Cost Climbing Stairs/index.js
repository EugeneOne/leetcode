/**
 * @param {number[]} cost
 * @return {number}
 */
// cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// dp(n) = min(dp(n - 1), dp(n - 2)) + num[n]
// var minCostClimbingStairs = function(cost) {
//     let sum = {};
//     sum[0] = cost[0];
//     sum[1] = cost[1];
//     for(let i = 2; i <= cost.length; i++) {
//         if(i === cost.length) {
//             sum[i] = Math.min(sum[i - 1], sum[i - 2])
//         } else {
//             sum[i] = Math.min(sum[i - 1], sum[i - 2]) + cost[i]
//         }
//     }
//     console.log(sum);
//     return sum[cost.length];
// };

var minCostClimbingStairs = function(cost) {
    const len = cost.length;
    if(len === 1) {
        return cost[1];
    }
    if(len === 2) {
        return Math.min(cost[0], cost[1]);
    }
    for(let i = 2; i <= len; i++) {
        cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i]
    }
    console.log(cost);
    return Math.min(cost[len - 1], cost[len - 2]);
};

const arr = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(arr));