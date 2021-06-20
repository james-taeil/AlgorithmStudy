function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}
// 이 트리가 정확히 어떤 값을 리턴하는 지 몰랐습니다. 
// 출력해보니 TreeNode {val: 0, left: null, right: null} 의 기본값을 가지고  
// 대충  
//const root  =new TreeNode() 
// console.log(root) 이 출력됨 이때  
// [1,null,2,3] 이 주어지면 왼쪽 부터 가니까
//   1
//     2
//   3
// 이런 식인데 이때 왼쪽에 있는 숫자 부터 배열에 담아 출력하는 것 입니다.
// [1,2,null,3,4,5,nul,6] 이런 배열이 주어지면 ...
//              1
//           2
//        3    4
//      5     6    
//  이런 느낌 인가요? 잘 모르겠습니다.
//  그래서 여러 유튜브 채널을 찾아보고 따라써봤습니다.


var inorderTraversal = function(root){
    if(root === null) return []        // 처음 부터 null이면 빈배열 리턴

    const result = []    // 결과값이 될 빈배열을 만들고
    const stack = [root]  // root 값을 stack에 할당 

    while(stack.length > 0){  // 반복문으로  stack이 0이 될 동안 
        let top = stack.pop()  //스택의 뒤에서 꺼낸다.

                    if(!top.left && !top.right){// pop untill Null is met
            while(top){         // top이 ture면 
                result.push(top.val)   // top의 val을 result에 넣는다. 
                top = stack.pop() //  stack의 뒤에서  값을 하나 뽑아준다.
            }
            continue    //넘어가고
        }
        if(top.left && !top.right){   // top left만 true 일 때
            result.push(top.val)  // result에 val을 넣어주고 
            stack.push(top.right)   // stack에도 넣어준다. 
        }

        if(!top.left && top.right){   // right만  true 일 때는 그 반대
            result.push(top.val)    
            stack.push(top.right)
        }

        if(top.left && top.right){ // 둘다 true 일 때
            stack.push(top.right) // stack에 top.right를 넣어주고 
            stack.push(null)  // null을 넣어주고
            stack.push(top)     // top을 넣어주고 
            stack.push(top.left)  // left를 넣어준다.
        }
    }
    return result 
}

````````````


var inorderTraversal = function(root) {    // root ={val:?,  left:{obj}, right: {obj} }
    let tourist = root    // root를 바로 tourist에 할당 왜 바로 안 쓰고 할당할까??
    let solution = []  // 결과값이 될 빈배열
    
    while(tourist !== null){        //  반복문 torist 가 null이 아닐 때
        let guide = tourist.left;  // guide가 left  값이 됨 left에서 부터 값을 훑는다
        
        if(tourist.left !== null){ // tourist.left값이 null이 아닐 때, 이 때 guide 값도 null 이 아니겠죠

        while(guide.right !== null && guide.right !== tourist){ //right 값이 null도 tourist와 같지도 않을 때
            guide = guide.right  // guide는 right 값이 된다. 그러니까 tourist.left의 right 값 
        }
        
        if(guide.right === null){ // guide의 right 값, tourist.left.right 
            guide.right = tourist; // guide.right는 tourist가 되고
            tourist = tourist.left;  // tourist 는 left 값을 가진다. 
        } else{                      // guide.right !== null
            guide.right = null       // guide.right = nul 
            solution.push(tourist.val)  // 결과값에 tourist.val 값을 할당 
            tourist = tourist.right 
        } 
            
        }else{                  // tourist.left 값이 null 일 때
            solution.push(tourist.val)   //결과값에 tourist.val을 추가
            tourist = tourist.right // tourist는 right 값을 가지고 다신 순회
        }
    }
    return solution
};