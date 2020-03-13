/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isBalanced = function(root) {
//     if(!root || !root.val) return true;
//     let depthArr = [];
//     const getDepth = (root, depth = 1) => {
//         if(!root || (!root.left && !root.right)) {
//             depthArr.push(depth);
//             return;
//         }
//         if(root.left) {
//             getDepth(root.left, depth + 1);
//         }
//         if(root.right) {
//             getDepth(root.right, depth + 1);
//         }
//     }
//     getDepth(root, 1);
//     console.log('depthArr:', depthArr);
//     return Math.max(...depthArr) - Math.min(...depthArr) <= 1 ? true : false;
// };

var readBinaryWatch = function(num) {
    const hours = [1,2,4,8];
    const minutes = [1,2,4,8,16,32];
};