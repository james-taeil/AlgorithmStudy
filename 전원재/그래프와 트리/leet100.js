function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let p = new TreeNode(input)
let q = new TreeNode(input)
// 위와 같이 기본 값이 주어지는 것 같다. 

var isSameTree = function(p, q) {
    if(p ===null && q===null){ // 둘 다 값이 없을 때, 이렇게 하는 이유는 재귀해야 하기 때문에
        return true         
    }
    
    if((p ===null && q!==null)||(p !==null && q ===null)){  // 값이 다르면 false
        return false
    }
    if(p.val !==q.val){  // 두 값이 다를 때 false
        return false
    }
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) // 재귀
   //재귀 할 때 각각의 left 값과 right 값이 같은 지를 확인해야한다.
};
//          1           
//       2      2
//     3   4   3  4  
//    ture
//          1
//        2    2
//     3      3  4   
//    false
//         1
//      2      2  
//    3   4   4   3 
//      false