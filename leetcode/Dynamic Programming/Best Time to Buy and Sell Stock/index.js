/**
 * @param {number[]} prices
 * @return {number}
 */
//
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let min = prices[0];
  let diff = 0;
  for (let i of prices) {
    if (i < min) {
      min = i;
    }
    diff = diff > i - min ? diff : i - min;
  }
  return diff;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
