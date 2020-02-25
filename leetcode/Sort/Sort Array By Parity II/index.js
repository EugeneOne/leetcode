/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i = 0;
    let j = 1;
    for(; i < A.length; i += 2) {
        if(A[i] % 2 === 0) continue;
        while(A[j] % 2 === 1) j += 2;
        [A[i],A[j]]=[A[j],A[i]];
    }
    return A;
};

const nums = [4,2,5,7];
sortArrayByParityII(nums);
console.log(nums);