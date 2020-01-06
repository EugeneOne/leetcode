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
 *
 */
// 递归
var isSymmetric = function(root) {
  if (!root) return true;
  if (root.left === null && root.right === null) return true;
  if (root.left === null || root.right === null) return false;
  return isMirror(root.left, root.right);
};
var isMirror = function(l, r) {
  if (l === null && r === null) return true;
  if (l === null || r === null) return false;
  return l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left);
};
