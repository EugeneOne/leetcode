/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(needle.length > haystack.length) return -1;
    let j = 0,
        result = -1;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] !== needle[j]) {
            j === 0;
            result = -1;
        }
        if(haystack[i] === needle[j]) {
            if(result === -1) {
                result = i;
            }
            if(j >= needle.length - 1) {
                break;
            }
            j++;
        }
        
    }
    return result;
};
console.log(strStr('mississippi', 'issip'));