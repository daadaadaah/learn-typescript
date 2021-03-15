// 타입 단언(type assertion)
var a;
a = 20;
a = "a";
var b = a as String;

// 타입 단언 : DOM API 조작할 때 유용!
// 타입 단언 전
// let div = document.querySelector('.container');
// if(div) {
//   div.innerHTML;
// }

// 타입 단언 후
let div = document.querySelector('.container') as HTMLDivElement;
div.innerHTML;
