/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    const RegLow = /[a-z]/;
    const RegUp = /[A-Z]/;
    let result = [];
    let fn = (str, str2) => {
        if(!result.length) {
            result.push(str);
            if(str2) {
                result.push(str2);
            }
            return;
        }
        const len = result.length;
        for (let i = 0; i < len; i++) {
            if (str2) {
                result.push(result[i] + str2)
            }
            result[i] = result[i] + str;
        }
    }
    for (let i = 0; i < S.length; i++) {
        if (RegLow.test(S[i]) || RegUp.test(S[i])) {
            fn(S[i].toLowerCase(), S[i].toUpperCase())
        } else {
            fn(S[i])
        }
    }
    return result;
};

const str = "3z4";
console.log(letterCasePermutation(str));