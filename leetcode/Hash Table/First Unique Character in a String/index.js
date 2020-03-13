/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let sMap = new Map();
    for(let i in s) {
        if(sMap.has(s[i])) {
            sMap.set(s[i], -1)
        } else {
            sMap.set(s[i], i);
        }
    }
   for(let i of sMap.entries()) {
       if( !i ) return -1;
       if( i[1] !== -1 ) {
           return i[1]
       }
   }
   return -1;
};

const str = "leetcode";
console.log(firstUniqChar(str));