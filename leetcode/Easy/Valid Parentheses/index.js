/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str = s;
    for(let i = 0; i < str.length; i++) {
        console.log(str[i], str.length, str, i);
        if(isMatch(str[i], str[i+1])) {
            str = str.substring(0, i) + str.substring(i + 2);
            i = -1;
        }
    }
    return str ? false : true;
};

const isMatch = (a, b) => {
    if((a === '[' && b === ']' ) || ( a === '{' && b === '}' ) || ( a === '(' && b === ')' )) {
        return true;
    };
    return false;
}

const str = "{()[]}";
console.log(isValid(str));