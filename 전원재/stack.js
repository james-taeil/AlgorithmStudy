class Stack{
    constructor(){
        this.items = []
    }
    // push로 element를 스텍에 쌓는다 
    push(element){
        return this.items.push(element); 
    }
    // pop으로 쌓인 element를 제거한다.   
    pop(){
      console.log(this.items)
       return this.items.pop();    
    }
    // 가장 최근에 쌓인 데이터를 찾는다
    peek(){
        return this.items[this.length-1];
    }
    
   //데이터의 길이를 확인한다.
   size(){
       return this.items.length;
   }
   // 데이터가 비어있는 지를 확인한다.
   isEmpty(){
     console.log(this.items)
        return this.items.length === 0
   }
   // 데이터의 요소들을 print한다.
   print(){
       let str = ""
       for(let i=0; i<this.items.length; i++){
        str+=this.items +""
        return str
       }
   }
   //데이터 값을 초기화한다.
   clear(){
     console.log(this.items)
       this.items = []
       
       return this.items 
    }
}

const stack = new Stack()

stack.isEmpty() // => true

stack.push(100) // => 데이터를 쌓는다.
stack.push(200)

stack.peek() // => 200

stack.push(300)

console.log(stack.isEmpty())// => 데이터가 0이 아니므로 false

console.log(stack.size()) // console은 시각적으로 확인하기 위한 것 아니면 return 값이 보이지 않는다. => 데이터 길이는 3

console.log(stack.print()) // =>100,200,300

stack.pop() // => 쌓인 데이터를 위에서 부터 제거
stack.pop()

stack.clear() // =>데이터 값 초기화

console.log(stack.size()) // => 0

console.log(stack.isEmpty()) //=> true
console.log(stack.print()) // => 값이 없다 undefined