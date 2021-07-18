function solution(answers) {
  const answer = [];
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const obj = answers.reduce(
    (a, c, i) => {
      if (c === person1[i % person1.length]) {
        a["person1"]++;
      }
      if (c === person2[i % person2.length]) {
        a["person2"]++;
      }
      if (c === person3[i % person3.length]) {
        a["person3"]++;
      }
      return a;
    },
    {
      person1: 0,
      person2: 0,
      person3: 0,
    }
  );

  let maxNum = 0;
  for (const val of Object.values(obj)) {
    if (val > maxNum) {
      maxNum = val;
    }
  }

  for (const [key, val] of Object.entries(obj)) {
    if (val === maxNum) {
      switch (key) {
        case "person1":
          answer.push(1);
          break;
        case "person2":
          answer.push(2);
          break;
        case "person3":
          answer.push(3);
          break;
      }
    }
  }

  return answer;
}
