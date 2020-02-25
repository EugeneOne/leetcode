/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a, b) => (a - b));
    let result = [];
    let a = 0;
    console.log(nums);
    for(let i = 1; i <= nums.length; i++) {
        if( nums[i - 1 + a] < i ) {
            a++;
        }
        if(nums[i - 1 + a] > i || !nums[i - 1 + a]) {
            result.push(i);
            a--;
        }
    }
    return result;
};

const arr = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(arr));