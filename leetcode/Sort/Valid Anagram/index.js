/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;;
    let sObj = {};
    let tObj = {};
    for(let val of s) {
        if(!sObj[val]) {
            sObj[val] = 1;
        } else {
            sObj[val]++;
        }
    }

    for(let val of t) {
        if(!tObj[val]) {
            tObj[val] = 1;
        } else {
            tObj[val]++;
        }
    }

    for(let val of t) {
        if(tObj[val] !== sObj[val]) {
            return false;
        }
    }

    return true;

};

const str1 = "anagram";
const str2 = "nigaram";
console.log(isAnagram(str1, str2));