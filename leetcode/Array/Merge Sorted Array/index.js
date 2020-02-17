/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0, m);
    let arr2 = nums2.slice(0, n);
    arr1 = arr1.concat(arr2);
    arr1.sort((a1, a2) => {
        if(a1 < a2) return -1;
        return 1
    });
    for(let i = 0;i < arr1.length;i++){
        nums1[i] = arr1[i];
    }
};

let nums1 = [1,2,3, 0, 0];
let nums2 = [2,5,6];

merge(nums1, 3, nums2, 3);
console.log(nums1);