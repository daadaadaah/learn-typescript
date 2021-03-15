// 숫자형 이넘
enum Shoes {
  Nike,
  Adidas
}

var myShoes0 = Shoes.Nike;
console.log(myShoes0); // 0

var myShoes1 = Shoes.Adidas;
console.log(myShoes1); // 1


enum Shoes2 {
  Nike = 10,
  Adidas
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 10

var myShoes3 = Shoes2.Adidas;
console.log(myShoes3); // 11

// 문자형 이넘
enum Shoes4 {
  Nike = "나이키",
  Adidas = "아이다스",
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // 나이키

var myShoes3 = Shoes2.Adidas;
console.log(myShoes3); // 아이다스

// 이넘 활용
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log("정답")
  }

  if(answer === Answer.No) {
    console.log("오답")
  }
}

askQuestion(Answer.Yes);
askQuestion('Yes');
