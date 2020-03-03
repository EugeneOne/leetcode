/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let resultObj = {};
    let result = ''
    const fn = (nums) => {
        let total = 0;
        for(let i in nums.toString()) {
            total += Math.pow(nums.toString()[i], 2); 
        }
        if(total === 1) {
            result = true;
            return;
        }
        if(resultObj[total]) {
            result = false;
            return
        }
        resultObj[total] = 1;
        fn(total);
    }

    fn(n);
    return result;
};

const n = 2;
console.log(isHappy(n));