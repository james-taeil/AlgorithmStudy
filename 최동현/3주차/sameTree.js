
var isSameTree = function(p, q) {
    if(p === null && q === null){
        return true
    }
    if((p!== null && q === null) || (p === null && q!== null)){
        return false
    }
    if(p.val === q.val){
        return true
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left,q.left)
};
