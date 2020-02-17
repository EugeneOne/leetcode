/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 动态规划
// dp(i, j) = dp(i - 1, j - 1) + dp(i - 1, j)
var generate = function(numRows) {
    if(!numRows) return [];
    let arr = [[1]]
    for(let i = 1; i < numRows; i++) {
        arr.push(new Array(i + 1))
        for(j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                arr[i][j] = 1;
                console.log(i, j);
            } else {
                arr[i][j] = arr[i-1][j-1] + arr[i - 1][j];
            }
        }
    }
    return arr
};

console.log(generate(0));