/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sObj = {};
    let tObj = {};
    let index = 0;
    let sArr = [];
    let tArr = [];
    for(let i of s) {
        if(sObj[i] === undefined) {
            sArr.push(index);
            sObj[i] = index;
            index++;
        } else {
            sArr.push(sObj[i]);
        }
    }
    index = 0;
    for(let i = 0; i < t.length; i++) {
        if(tObj[t[i]] === undefined) {
            tArr.push(index);
            tObj[t[i]] = index;
            index++;
        } else {
            tArr.push(tObj[t[i]]);
        }
        if(sArr[i] !== tArr[i]) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('aa', 'bb'));