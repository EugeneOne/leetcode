/**
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function(digits) {
//     const schema = new Map();
//     schema.set(2, 'abc');
//     schema.set(3, 'def');
//     schema.set(4, 'ghi');
//     schema.set(5, 'jkl');
//     schema.set(6, 'mno');
//     schema.set(7, 'pqrs');
//     schema.set(8, 'tuv');
//     schema.set(9, 'wxyz');
//     const result = [];
//     const len = digits.length;
//     let topIndex = 0;
//     let BottomIndex = len - 1;
//     let itemIndex = 2;
//     while() {
//         if(topIndex === 2 && BottomIndex === 1 && itemIndex === 2) return;
//         schema.get(digits[topIndex]) + 

//     }
// };
/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    const res = [];
    for (let num of digits) {
        let w = maps[num];
        if (res.length > 0) {
            let tmp = [];
            for (let i = 0; i < res.length; i++) {
                let wl = w.length;
                for (let j = 1; j < wl; j++) {
                    tmp.push(res[i] + w[j])
                }
                res[i] += w[0];
            }
            res.push(...tmp)
        } else {
            res.push(...w);
        }
    }
    return res;

};

console.log(letterCombinations('234'));