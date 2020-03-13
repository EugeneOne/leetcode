/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sMap = new Map();
    let singleLong = 0;
    let result = 0;
    for(let i of s) {
        if(!sMap.has(i)) {
            sMap.set(i, 1);
        } else {
            sMap.set(i, sMap.get(i) + 1);
        }
    }
    for(let i of sMap.values()) {
        if (i % 2 === 1) {
            result += (i - 1);
            singleLong = 1;
        } else if (i % 2 === 0) {
            console.log(i);
            result += i
        }
    }
    if(singleLong) result++;
    return result;
};

const str = "ccc";
console.log(longestPalindrome(str));