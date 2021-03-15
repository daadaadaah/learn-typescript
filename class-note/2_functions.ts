function sum2(a: number, b: number): number {
  return a+b;
}

sum2(10)
sum2(10, 20, 30, 40)

// 함수의 옵셔널 파라라미터
function log(a: string, b?: string) {

}

log('hello world');
log('hello world', 'abc');
