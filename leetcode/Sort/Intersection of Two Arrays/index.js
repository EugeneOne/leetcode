/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let longNums = '';
    let shortNums = '';
    let arrObj = {};
    let result = [];

    if(len1 <= len2) {
        shortNums = nums1;
        longNums = nums2;
    } else {
        shortNums = nums2;
        longNums = nums1;
    }

    longNums.forEach((item, index) => {
        arrObj[item] = 1;
    })
    for(let i = 0; i < shortNums.length; i++) {
        if(arrObj[shortNums[i]] === 1) {
            result.push(shortNums[i])
            arrObj[shortNums[i]]++;
        }
    }

    return result

};

const num1 = [1,2,2,1];
const num2 = [2, 2];
console.log(intersection(num1, num2));