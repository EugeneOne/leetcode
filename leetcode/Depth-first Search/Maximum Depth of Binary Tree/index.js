/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depthArr = [];
    let depth = 1;
    if(!root) return 0;
    const getDepth = (root, depth = 1) => {
        if(!root || (!root.left && !root.right)) {
            depthArr.push(depth);
            return;
        }
        if(root.left) {
            getDepth(root.left, depth + 1);
        }
        if(root.right) {
            getDepth(root.right, depth + 1);
        }
    }
    getDepth(root, 1);
    return Math.max(...depthArr);
};