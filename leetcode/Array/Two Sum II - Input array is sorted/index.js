/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(!numbers || numbers.length < 2) return [];
    let j = 1;
    let i = 0;
    let result = []
    while(numbers[i] <= target && i < numbers.length) {
        console.log(numbers[i], numbers[j]);
        if(numbers[i] + numbers[j] === target) {
            result = [i + 1, j + 1];
            break;
        } else if(numbers[i] + numbers[j] > target || j >= numbers.length) {
            i  += 1;
            j = i + 1;
        } else {
            j++;
        }
    }
    return result;
};

const numbers = [0,0,3,4];
console.log(twoSum(numbers, 0));