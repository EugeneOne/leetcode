/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力法
var maxArea = function(height) {
    let start = 0;
    let len = height.length;
    let max = 0;
    if(len === 2) return Math.min(...height);
    console.log(len);
    while(start < len - 2) {
        for(let i = 1; i < len; i++) {
            if(Math.min(height[start], height[i]) * (i - start) > max) {
                max = Math.min(height[start], height[i]) * (i - start)
            }
        }
        start++;
    }
    return max;
};

const arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));