//https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//이진트리의 순회방법에는 inorder, preorder, postorder
//inorder(left, root, right)
//preorder(root, left, right)
//postorder(left, right, root)
const inorderTraversal = (root) => {
  let tourlist = root;
  let solution = [];
  
  
  while (tourlist !== null) {
 
    let guide = tourlist.left;

    if (tourlist.left !== null) {
      while (guide.right !== null && guide.right !== tourlist) {
        guide = guide.right;
      }
      if (guide.right === null) {
        guide.right = tourlist;
        tourlist = tourlist.left;
      } else {
        guide.right = null;
        solution.push(tourlist.val);
        tourlist = tourlist.right;
      }
    } else {
        solution.push(tourlist.val);
        tourlist = tourlist.right;
    }
  }
  return solution;
};