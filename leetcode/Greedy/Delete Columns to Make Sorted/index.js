/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    const len = A.length;
    const itemLen = A[0].length;
    let result = 0;
    for(let i = 0; i < itemLen; i++) {
        for(let j = 0; j < len - 1; j++) {
            if(A[j][i] > A[j + 1][i]) {
                result++;
                break;
            }
        }
    }
    return result;
};

const arr = ["zyx", "wvu", "tsr"];
console.log(minDeletionSize(arr));