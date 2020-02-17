/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 超出最大数 报错
// var plusOne = function(digits) {
//     return (parseInt(digits.join('')) + 1 + '').split('')
// };

var plusOne = function(digits) {
    let len = digits.length - 1;
    for(let i = len; i >= 0; i--) {
        if(digits[i] + 1 >= 10) {
            digits[i] = 0;
            if(i === 0) {
                digits.unshift(1);
            }
        } else {
            digits[i] = digits[i] + 1;
            break;
        }
    }
    return digits;
};

const arr = [9];
console.log(plusOne(arr));