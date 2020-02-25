/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] !== undefined && (i - obj[nums[i]] <= k)) {
            return true;
        }
        obj[nums[i]] = i;
    }
    return false;
};

const nums1 = [1,1];
const nums2 = [1,2,3,1,2,3];

console.log(containsNearbyDuplicate(nums1, 2));