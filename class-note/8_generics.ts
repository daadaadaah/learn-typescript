// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText("하이");
// logText(true);


// 함수를 호출할 때, 그때 타입을 지정할게
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText("하이");
// logText<string>("하이");

// logText<number>(1);


// 코드 중복 발생 : 동일한 코드를 타입이 달라서, 중복해서 생성함
// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// function logNumber(text: number) {
//   console.log(text);
//   return text;
// }

// 해결 1 : 유니온 타입 활용하기 - 하나의 함수에서 여러개의 타입을 받을 수 있도록
// 해결 1의 문제점 1 : 함수 안에서 text가 string과 number 교집합으로 활동함
// function logText(text: string | number) {
//   console.log(text);
//   text
//   return text;
// }

// 해결1의 문제점 2 : split 등 관련 api 지원 안됨
// const a = logText("hello");
// a.split();

// 해결 1의 해결책 이면서 해결 2 : 제네릭 사용 
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 호출할 때, 타입 정하기
const b = logText<string>("abc");
b.split('');


// interface에서 Generics을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: "hello",
  selected: true
}

const obj2: Dropdown<number> = {
  value: 20,
  selected: true
}

// 제네릭의 타입 제한 1 : 타입 힌트(예 : 배열[])를 줄 수 있다.
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function(text) {
//     console.log(text);
//   })
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입 제한 2 : 정의된 타입 이용하기
interface LengthType {
  length: number;

}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('a');
logTextLength({ length : 10 });

// logTextLength(10);

// 제네릭의 타입 제한 3 : keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingOtemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  console.log(itemOption)
  return itemOption;
}

getShoppingOtemOption("price");
// console.log(a);
