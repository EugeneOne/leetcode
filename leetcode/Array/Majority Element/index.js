/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length <= 1) return nums[0];
    let arrObj = {};
    let result = [];
    let half = nums.length / 2;
    for(let i = 0; i < nums.length; i++) {
        if(!arrObj[nums[i]]) {
            arrObj[nums[i]] = 1;
            if(nums.length === 2) {
                result.push(nums[i]);
            }
        } else if(arrObj[nums[i]] >= half && arrObj[nums[i]] < half + 1) {
            result.push(nums[i]);
        }
        arrObj[nums[i]] += 1;
    }
    return result;
};

const arr = [2,2];
console.log(majorityElement(arr));