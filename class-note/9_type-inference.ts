// 타입 추론 기본 1
var a = 'a';

function log(a = 'a') {
  var b = 10;
  return b;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T
//   title: string;
// }

// var items: Dropdown<string> = {
//   value: "abc",
//   title: "hello"
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var items: DetailedDropdown<string> = {
  title: "hello",
  description: "ab",
  value: "abc",
  tag: "a",
}

var items2: DetailedDropdown<number> = {
  title: "hello",
  description: "ab",
  value: "abc",
  tag: "a",
}

// Best Common Type
