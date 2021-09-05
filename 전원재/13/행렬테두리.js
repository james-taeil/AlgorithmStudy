// 다른 분들의 답을 보니 이 문제는 노가다가 필요했던 것 같다.
// 내가 엄청 길게 작성한 것 같지는 않아서 다행이었다.
//


function solution(rows, columns, queries) {
   
    const matrix = [0] // 매트릭스를 만드는데, 이중 배열없이 그냥 하나의 배열에 담아낸다. 
    const multi = rows*columns // 배열의 길이는 행렬의 넓이 +1 이다. 
                            // 처음에 0을 넣어 계산을 간단하게 한다.
    
    for(let i=1; i<=multi; i++){ //시간 복잡도 최소화를 위해 매트릭스는 그냥 배열로 만든다. 
        matrix[i]=i
    } 
    
    function matrixIdx(r,c){  // 이 함수로 matrix 배열을 이중 배열과 계산해서 index를 뽑아올 수 있다. 
       return (r-1)*columns+c
        // 배열 a
       ///  [
        //   [0,1,2,3]
        //   [4,5,6,7]   
        //  ] 

        //  배열 a'
        //  [0,1,2,3,4,5,6,7]
        // 위의 배열이 있을 때 
        // a[1][2] = 6 이다.  이걸  row*column.length+column-1 으로 계산하면 1*4(열의 길이)+2 =6 / a'[6] = 6
        
        // 다만 여기서는 행열의 row와 column이 1에서 부터 시작하니까 r-1을 해준다. 
     }

    let result = Array(queries.length) // 결과를 넣어준 queries.length 
    
    queries.map((el,idx)=>{
        const [x1,y1,x2,y2]=el
        let temp1=matrix[matrixIdx(x1,y2)]
    
        result[idx]=temp1
            
        for(let i=y2; i>y1; i--){   // 각각의 범위에 따라 다르게 루프를 돌려준다. 
            let pre=matrixIdx(x1,i-1)
            let post=matrixIdx(x1,i)
            
            if(result[idx]>matrix[pre]){
                result[idx]=matrix[pre]
            }
            matrix[post]=matrix[pre]
            
        }
        

        
        for(let i=x1; i<x2; i++){
            let pre=matrixIdx(i+1,y1)
            let post=matrixIdx(i,y1)
            
            if(result[idx]>matrix[pre]){
                result[idx]=matrix[pre]
            }
            matrix[post]=matrix[pre]
        
        }
        
        for(let i=y1; i<y2; i++){
            let pre=matrixIdx(x2,i+1)
            let post=matrixIdx(x2,i)
            
            if(result[idx]>matrix[pre]){
                result[idx]=matrix[pre]
            }
            matrix[post]=matrix[pre]
           
        }
        
        for(let i=x2; i>x1+1; i--){
            let pre=matrixIdx(i-1,y2)
            let post=matrixIdx(i,y2)
            
            if(result[idx]>matrix[pre]){
                result[idx]=matrix[pre]
            }
            matrix[post]=matrix[pre]
            
           // temp= matrix(x2,y1)
        }
        matrix[matrixIdx(x1+1,y2)]=temp1
        
    })
    
    
    
    return result;
}