/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!nums[i]) {
            nums.splice(i, 1);
            i--;
            k++;
        }
    }
    if(k) {
        for(let i = 0; i < k; i++) {
            nums.push(0);
        }
    }
};

const nums = [0,0,1];
moveZeroes(nums)
console.log(nums);