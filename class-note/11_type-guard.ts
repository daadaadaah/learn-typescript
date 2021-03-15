// 타입 가드 전 : 타입 단언만 사용했을 때 생기는 문제점
interface DeveloperA {
  name: string;
  skill: string;
}

interface PersonA {
  name: string;
  age: number;
}

function introduce(): DeveloperA | PersonA {
  return {
    name: "Tony",
    age: 23,
    skill: "Iron Making"
  }
}

var tony = introduce();
console.log(tony.skill);

if((tony as DeveloperA).skill) {
  var skill = (tony as DeveloperA).skill;
  console.log(skill);
} else if ((tony as PersonA).age) {
  var age = (tony as PersonA).age;
  console.log(age);
}

// 타입 가드 후
function isDeveloper(target: DeveloperA | PersonA): target is DeveloperA {
  return (target as DeveloperA).skill !== undefined;
}

if(isDeveloper(tony)) {
  console.log(tony.skill);  
} else {
  console.log(tony.age);  
}