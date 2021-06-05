class Queue{ // class Queue 생성 
    constructor(){ //  this.items를 class 내 모든 scope에서 사용할 수 있게 만든다.
        this.items = [] // 빈 배열 items 생성
    }

    size(){ // items 배열의 길이를 리턴
        return this.items.length
    }
    
    enqueue(element){  // unshift로 배열의 데이터를 추가 push 사용가능 
        return this.items.unshift(element)
    }
    arr(){ // 현재 데이터를 확인
      return this.items
    }
    dequeue(){ // pop으로 배열의 데이터를 제거한다. 다만 push로 데이터를 추가했을 때, shift 사용가능
        return this.items.pop()
    }

    peek(){ // 가장 오래된, 먼저 생성된 데이터를 확인
        return this.items[this.items.length-1]
    }

    isEmpty(){ // 빈 데이터, 배열인 경우를 확인
        return this.items.length===0;
    }
}
const queue = new Queue();
queue.enqueue('sand') // 데이터 추가
queue.enqueue('rock')

console.log(queue.arr()) //데이터 확인 =>["sand","rock"]

console.log(queue.size())// 데이터 길이 확인 => 2

console.log(queue.peek())// 가장 먼저 생성된 데이터 확인- 가장 빨리 제거 될 데이터 =>sand

queue.dequeue(); // 데이터 삭제

console.log(queue.peek()) // 데이터 확인 =>["rock"]

queue.dequeue();

console.log(queue.peek()) // => undefined