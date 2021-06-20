var isSameTree = function(p, q) {
    //base case
    // 배열일 경우 무조건 false
    // 값 하나가 null 이라면 true
    if (!p && !q) {
        return true;
    } else if (!p || !q) {
        return false; 
    }
    // 값 비교
    if (p.val !== q.val) {
        return false;
    }

    //recursive case
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};