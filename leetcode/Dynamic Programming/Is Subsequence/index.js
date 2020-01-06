/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 转化为数组
var isSubsequence = function(s, t) {
  let sArr = s.split('');
  let tArr = t.split('');
  if (sArr.length === 0) {
    return true;
  }
  while (tArr.length) {
    let str = tArr.pop();
    if (str === sArr[sArr.length - 1]) {
      sArr.pop();
    }
    if (sArr.length === 0) return true;
  }
  return false;
};

console.log(isSubsequence('abc', 'ajbpbookckh'));
