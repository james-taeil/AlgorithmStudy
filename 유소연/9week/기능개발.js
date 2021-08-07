function solution(progresses, speeds) {
    // 저번 코플릿문제와 동일한거같은데 못찾겠네요,,,
    // 1. 앞으로 개발하는데 걸리는 날짜 구하기
    //    (100 - 작업 진도)가 개발 속도로 나누어 떨어지면 
    //    -> (100 - 작업진도) / 개발 속도
    //    나누어 떨어지지 않으면?
    //    -> (100 - 작업진도)를 개발 속도로 나눈 몫에 +1
    // 2. 맨 앞의 기능 개발완료하는 날짜보다 덜 걸리는 기능들도 그날 배포 
    //      맨 앞 기능 구현보다 덜 걸린다? count++
    //      더 걸리는 경우 그 기능 앞에서 배열 자르기

    const result = [];
    
    // 기능별로 배포까지 걸리는 날짜 구하기
    progresses = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]))
    
    while (progresses.length > 0) {
      // 첫번째 기능 배포 날짜보다 늦게 완성되는 기능의 인덱스 구하기
      let idx = progresses.findIndex(el => el > progresses[0]);
      // 모두 첫번째 날짜보다 일찍 완성된다면? 당일 모두 배포
      if (idx === -1) {
        result.push(progresses.length);
        break;
      };
      result.push(idx);
      // 늦게 완성되는 기능 앞에서 배열 자르기
      progresses = progresses.slice(idx);
    }
  
    return result;
  }