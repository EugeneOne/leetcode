/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 暴力法
// var removeElement = function(nums, val) {
//     for(let i = 0; i < nums.length; i++) {
//         console.log(nums[i], val);
//         if(nums[i] === val) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums.length;
// };

// 双指针法
var removeElement = function(nums, val) {
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }
    console.log(nums);
    return j;
};


const nums = [0,1,2,2,3,0,4,2];

console.log(removeElement(nums, 2));