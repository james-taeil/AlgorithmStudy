var inorderTraversal = function (root) {
  const result = [];
  inorder(root);

  function inorder(root) {
    if (!root) return null;
    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }
  return result;
};
