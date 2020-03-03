/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = {};
    nums.forEach((item, index) => {
        if(result[item] === undefined) {
            result[item] = 1;
        } else {
            delete result[item]
        }
    })
    return Object.keys(result)[0];
};

const nums = [4,1,2,1,2];
console.log(singleNumber(nums));