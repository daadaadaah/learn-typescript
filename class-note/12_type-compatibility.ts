// 타입 호환 : 인터페이스, 클래스
// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   skill: string;
// }

// var developer: Developer;
// var person: Person;
// developer = person;

// 타입 호환 : 함수
var add = function(a: number) {
  // ...
}

var sum = function(a: number, b: number) {
  // ...
}

sum = add; // 호환 가능
// add = sum;

// 제네릭
interface Empty<T> {
  // ..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
