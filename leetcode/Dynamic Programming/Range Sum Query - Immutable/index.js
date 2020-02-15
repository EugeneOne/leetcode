/**
 * @param {number[]} nums
 */

// 暴力法：超出时间限制

// var NumArray = function(nums) {
//     this.arr = nums;
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     if(i < 0 || j >= this.arr.length) return;
//     const Arr = this.arr.slice();
//     const NewArr = Arr.filter((item, index) => {
//         return index >= i && index <= j;
//     })
//     return NewArr.reduce((prev,current,index,arr)=>{
//         return prev+current
//     });
// };


// 哈希法
// var NumArray = function(nums) {
//     this.arrObj = {};
//     nums.forEach((item, index) => {
//         this.arrObj[index] = item;
//     });
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function(i, j) {
//     const Arr = this.arrObj;
//     let result = 0;
//     for(let k = i; k <= j; k++) {
//         result += Arr[k];
//     }
    
//     return result;
// };

// 动态规划
// dp(i, j) = dp(j) - dp(i)
var NumArray = function(nums) {
    this.arr = nums;
    this.sum = {}; 
    this.sum[-1] = 0;
    for(let i = 0; i < this.arr.length; i++) {
        this.sum[i] = this.sum[i - 1] + nums[i];
    }
    console.log(this.sum);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    console.log(this.sum[j], this.sum[i]);
    return this.sum[j] - this.sum[i - 1];
};

 const nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums);
console.log(obj.sumRange(0, 2));