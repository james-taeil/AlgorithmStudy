// 내 풀이
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// 정석 풀이

const inorderTraversal = root => {
    const inorder = [];
    const dfs = (node) => {
        // null 일경우 true니까 아무것도 안넣기
        if (!node) {
            return;
        }
        dfs(node.left)
        inorder.push(node.val);
        dfs(node.right)
    }
    dfs(root);
    return inorder;
}