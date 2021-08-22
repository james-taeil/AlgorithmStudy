
// 우선 평소 풀던 알고리즘과는 조금 다른 느낌이었다. 일반적으로 풀던 알고리즘은 수학같았다면 이 문제는 좀 정보처리에 가까웠던것 같았다. 익숙하지 않아서 푸는 데 시간이 좀 많이 걸렸다. 

// 우선 
// record로 아래와 같은 배열이 주어진다.


```
["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
```
// 이걸 split으로 삼등분해서 각각 다른 배열에 나누어 담았다. 그래서 세 배열의 0번 째 인덱스를 조합하면 원래의 문자열이 되는 원리를 생각하고 문제를 풀었다. 

// 수도 코드
```
세 가지 다른 빈 배열을 정의 해준다. 상태어를 담을 배열, 아이디를 담을 배열, 이름을 담을 배열이다. 
그리고 map을 써서 각 요소들을 스플릿 해준후 0,1,2 번 째 인덱스를 각각의 배열에 나누어 담는다. 
이때, name의 경우 아이디를 키로 name을 벨류로 하는 객체를 따로 만든다. 
{id: name}
객체는 키가 같으면 나주에 들어온 키가 이전의 키를 대체하는 성질이 있다. 결국 특정 아이디가 가장 나중에 사용한 이름이 최종 이름이 되는 성질을 이용해서 결과값에 기록될 이름을 정하는 것이다. 

그렇게 각각의 배열 그리고 객체에 요소들이 들어갔으면, 결과값을 만들어 내기위한 분류를 한다. 
반복문을 만들어 상태어 배열의 길이를 기준으로 반복을 한다. (상태어에 따라서 결과값이 만들어진다.)
만약 Chage면 아무 값도 만들어 내지 않을 것이기 때문에 continue를 하고 Enter이면 
어떤 임시 변수에 객체 id가 들어간 배열에서 같은 인덱스를 가진 요소를 키로 가진 객체의 벨류를 가져와야한다. 좀 복잡해진다.

command =[]

id=[]
name=[]

id_name={
    id: name
    ...
} 객체

이렇게 있으면 command와 id의 길이는 같다.
id_name 객체에 있는 아이디에 따른 이름이 최종값에 들어갈 이름이된다. 

그러니까 command의 언어 Enter이 0번 째 인덱스에 있다면 id의 0번째 인덱스에 있는 id가 그 행위를 한 것이고 그 id의 이름을 가져올 때는  id_name에 있는 벨류를 가져오면 된다는 것이다. 
지금 보니 name 배열은 필요가 없을 것 갔다. 
```


function solution(record) {
  const id_Name={} // 최종값이 될 name이 들어 가는 객체 여기에 있는 이름이 진짜다 
    var answer = []; // 결과값이 될 배열 ["Prodo님이 들어왔습니다."] 같은 문자열이 들어간다. 
    let command = [] // 상태 언어 ["Enter", "Change"] 등이 들어간다.
    let id=[] // id 가 들어간다.

    record.map((el,i)=>{ // record의 요소를 나누어 각각의 배열에 담는다.
        const separeted = el.split(" ")
        command.push(separeted[0])
        id.push(separeted[1])
        
        if(separeted[2]===undefined){ // 명령어가 Leave일 때는 값이 없으므로 그냥 넘어간다. 
          // id_Name[separeted[1]]=0
        }else{ // name 값이 있으면 객체의 id에 이름을 할당한다.
        id_Name[separeted[1]]=separeted[2]
        }
    })
    // console.log(command) / 개인적으로 값들을 확인했다.
    // console.log(id)
    // console.log(id_Name)

    for(let i=0; i<command.length; i++){// 최종적으로 반복문에서 결과값이 될 문자열을 만든다. 
    if(command[i]==="Change") continue // change면 넘어가고 
     let temp="" // 임시배열에 최종 문자열을 담아 answer에 넘긴다. 
      if(command[i]==="Enter"){ 
        temp+= `${id_Name[id[i]]}님이 들어왔습니다.`
      }else if(command[i]==="Leave"){
        temp+=`${id_Name[id[i]]}님이 나갔습니다.`
      }
answer.push(temp)
    }

    return answer;
}
