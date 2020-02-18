/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0;
    // let cha = 0;
    for(let i = 1; i < prices.length; i++) {

        if(prices[i] - prices[i - 1] <= 0) {
            // cha = 0;
            continue;
        } else {
            result += (prices[i] - prices[i - 1]);
        }
    }
    return result;
};

const prices = [7,1,5,3,6,4,12,443,12,65,12,2,5,3,6,4,77,33,2,5,2,54,24];
console.log(maxProfit(prices));