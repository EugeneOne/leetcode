/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 // dp(m, n) = dp(m - 1, n) + dp(m, n - 1)
var uniquePaths = function(m, n) {
    if(m === 1 || n === 1) return 1;
    let obj = new Map();
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(j === 1 || i === 1) {
                obj.set([i,j].join(), 1);
                continue;
            }
            obj.set([i,j].join(), obj.get([i, j - 1].join()) + obj.get([i - 1, j].join()));
        }
    }
    // console.log(obj);
    return obj.get([m,n].join());
    // const fn = (a, b) => {
    //     if(a === 1) return 1;
    //     if(b === 1) return 1;
    //     return fn(a - 1, b) + fn(a, b - 1);
    // }
    // return fn(m, n);
 };

 uniquePaths(5,9);