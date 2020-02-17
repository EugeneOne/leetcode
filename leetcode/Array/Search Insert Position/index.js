/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力法
// var searchInsert = function(nums, target) {
//     if(nums[0] > target) return 0;
//     if(nums[nums.length - 1] < target) return nums.length;
//     let min = 0;
//     let result = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === target || (nums[i] > target && min < target)) {
//             result = i;
//             break;
//         }
//         min = nums[i];
//     }
//     return result;
// };

// 二分法
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            if(target > nums[nums.length - 1]){
                return nums.length
            }else{
               if (target < nums[i]) {
                    return i
                } 
            }
        }else{
            return nums.indexOf(target)
            break;
        }
    }
};

const nums = [1,3,5,6];
console.log(searchInsert(nums, 5));