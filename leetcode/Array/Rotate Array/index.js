/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    if(len <= 1) return;
    if( k > len ) k = k - len;
    for(let i = 0; i < k; i++) {
        nums.push('');
    }
    for(let i = 0; i < len; i++) {
        if(i + k > len - 1) {
            nums[i + k] = nums[i];
        } else {
            nums[i + len + k] = nums[i]
        }
    }
    for(let i = 0; i < len; i++) {
        nums.splice(0, 1);
    }
};

const arr = [0,-1];
rotate(arr, 2);
console.log(arr);