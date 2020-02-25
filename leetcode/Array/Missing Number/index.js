/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let obj = {};
    nums.forEach((item, index) => {
        obj[item] = 1;
    })
    for(let i = 0; i <= nums.length; i++) {
        if(!obj[i]) {
            return i;
        }
    }
};

const nums = [0, 1, 6];
console.log(missingNumber(nums));