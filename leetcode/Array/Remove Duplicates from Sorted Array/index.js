/**
 * @param {number[]} nums
 * @return {number}
 */

// 有序数列，重复数字会相邻
// var removeDuplicates = function(nums) {
//     let len = nums.length;
//     for(let i = 1; i < len; i++) {
//         console.log(nums[i], nums[i - 1]);
//         if(nums[i] === nums[i - 1]) {
//             nums.splice(i,1);
//             i -= 1;
//             len -= 1;
//         }
//     };
// };

var removeDuplicates = function(nums) {
    if(nums.length === 0) return;
    let j = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i]
        }
    }
    return j + 1;
};

// var removeDuplicates = function(nums) {
//     const Obj = {};
//     for(let i = 0; i < nums.length; i++) {
//         let val = nums[i];
//         if(!Obj[val]) {
//             Obj[val] = 1
//         } else {
//             Obj[val] += 1;
//         }
//     };
//     console.log(Obj);

// };

const Array = [0,0,0,1,1,2,2,3,3,4];
console.log(removeDuplicates(Array));
