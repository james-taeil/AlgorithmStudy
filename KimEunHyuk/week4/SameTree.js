const isSameTree = function(p, q) {
    if (!p && !q)
        return true;
    
    if (!!p !== !!q)
        return false;
    
    const stack = [p, q];
    
    while(stack.length > 0){
        const one = stack.pop();
        const two = stack.pop();
        
        if (one.val !== two.val)
            return false;
        
        if(one.left && two.left){
            stack.push(one.left);
            stack.push(two.left);
        }
        else if (one.left || two.left){
            return false;
        }
        
        if (one.right && two.right){
            stack.push(one.right);
            stack.push(two.right);
        }
        else if (one.right || two.right){
            return false;
        }
    }
    return true;
};
