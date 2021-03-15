// var seho: string | number | boolean;

// 유니온 타입이란 : | 연산자
// 유니온 타입의 장점
// function logMessage(value: string | number) {
//   // 타입 가드 : 특정 타입으로 타입의 법위를 좁혀나가는(필터링 하는) 과정
//   if(typeof value === 'number') {
//     value.toString(); // 타입 가드
//   }

//   if(typeof value === 'string') {
//     value.toString(); // 타입 가드
//   }

//   throw new TypeError('value must be string or number');
// }

// logMessage('hello');
// logMessage(100);


interface DeveloperA {
  name: string;
  skill: string;
}

interface PersonA {
  name: string;
  age: number;
}

function askSomeone(someone: DeveloperA | PersonA) {
    console.log(someone)
  // someone.name; // O
  // someone.skill // X
  // someone.age // X
}

askSomeone({ name: 'q', skill: 'bad'}); // developer
askSomeone({ name: 'q', age: 11}); // person
askSomeone({ name: 'w', age: 100, skill: '123'}) //?? 에러 안뜸



// // 인터섹션 타입이란 : & 연산자
// function askSomeone2(someone: Developer & Person) {
//   someone.name; // O
//   someone.skill // O
//   someone.age // O
// }

// askSomeone2({ name: 'w', age: 100, skill: '123'}) //?? 에러 안뜸
// 유니온 타입(더 많이 쓰임) vs 인터섹션 타입 :
