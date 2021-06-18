const inorderTraversal = function(root) {
    let output = [];
    
    const inorder = (root) => {
        if (!root)
            return;
        inorder(root.left);
        output.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    
    return output;
    
};
