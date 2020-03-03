/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const len = pattern.length;
    const strArr = str.split(' ');
    if(len !== strArr.length) return false;
    let pMap = new Map(),
        sMap = new Map();
    for(let i = 0; i < len; i++) {
        if(!pMap.get(pattern[i])) {
            pMap.set(pattern[i], strArr[i])
        } else if(pMap.get(pattern[i]) !== strArr[i]) {
            return false;
        }

        if(!sMap.get(strArr[i])) {
            sMap.set(strArr[i], pattern[i])
        } else if(sMap.get(strArr[i]) !== pattern[i]) {
            return false;
        }

    }
    return true;
};

const pattern = "abba";
const str = "dog cat cat dog";
console.log(wordPattern(pattern, str));