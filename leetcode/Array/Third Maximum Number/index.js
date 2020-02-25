/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序后取值
var thirdMax = function(nums) {
    let arr = nums.sort((a, b) => (b - a));
    let maxArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(!maxArr.includes(arr[i])) {
            if(maxArr.length === 2) {
                return arr[i];
            }
            maxArr.push(arr[i])
        }
    }
    return arr[0];
};

const nums = [2, 2, 3];
console.log(thirdMax(nums));