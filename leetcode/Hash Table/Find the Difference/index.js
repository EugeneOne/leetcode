/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    let result = '';
    for(i of s) {
        if(!sMap.has(i)) {
            sMap.set(i, 1);
        } else {
            sMap.set(i, sMap.get(i) + 1);
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(!sMap.has(t[i]) || !sMap.get(t[i])) {
            result = t[i];
            break;
        } else {
            sMap.set(t[i], sMap.get(t[i]) - 1);
        }
    }
    return result;
};

const s = 'abcd';
const t = 'eabcd';
findTheDifference(s, t)