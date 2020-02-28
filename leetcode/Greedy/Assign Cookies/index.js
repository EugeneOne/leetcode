/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gArr= g.sort((a, b) => (a - b));
    let sArr= s.sort((a, b) => (a - b));
    let i = 0,
        j = 0,
        gLen = g.length,
        sLen = s.length,
        num = 0;
    while(i < gLen && j < sLen) {
        console.log(i, gArr, j, sLen);
        if(gArr[i] <= sArr[j]) {
            i++;
            j++;
            num++
        } else {
            j++;
        }
    }
    return num;
};

const gArr = [1,2,3];
const SArr = [1,1];
console.log(findContentChildren(gArr, SArr));