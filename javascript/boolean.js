// Java와 같은 경우는 if() 문에서 Single EQ(=)를 사용하면 syntax error가 발생
// if( (num = method()) ==3)

// 하지만 다음과 같은 코드는 논리적으로 문제가 없다.
// if( (num = method()) )
// while( reader = buffer.readline()) != null)
/* while(true){
    reader = buffer.readline();
    if(reader == null) break;
}

*/

// js 에서는 다음과 같은 코드가 논리적으로는 문제가 될수 있으나 문법적으론 정당하다.
// if((num = 5) == true) << 와 같다
if ((num = 5)) {
  consoler.log("같은 값");
}

// js에서는 숫자 0, false, null. undefined, NaN, 문자열" " 을 제외한 모든 것은 boolean에서 true로 취급된다.
// if(값) 명령을 사용할때 값에 위에 나열한 type 데이터가 나타나면 논리적으로 false가 인식되고 그 외에는 무조건 true이다.

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
  false;
}

let num1 = 3;
let num2 = "3";

/*
    두 값이 같이 비교를 하는 연산자.
    주로 if, while 등에서 사용
    동등연산자(==)
        자동으로 형 변환이 발생한다.
        0 == '0' 을 비교하면 문자열 '0'을 숫자 0으로 자동 형변환을 해 버린다.
        문자열과 숫자의 비교지만 내용만 같으면 같은 것으로 true값이 된다.

    일치연산자(===)
        무조건 자신의 형(type)을 유지하면서 비교.
        0 === '0'을 비교하면
        1. 두값을 type이 일치하는지 비교하고 같으면 true, 다르면 false
        2. (1.) 이 true 이면 다시 실제 값을 비교하여 같으면 true, 다르면 false를 나타낸다.

*/

console.log(num1 == num2);
console.log(num1 === num2);

// 문자열 ""과 문자열 "0"을 비교 => false
console.log("" == "0");

// 문자열 ""을 숫자 0으로 변환하고 0 == 0 으로 비교 => true
console.log("" == 0);

// boolean
console.log("true" == true);

// 동등연산자에서는 null하고, undefinde을 null == undefined 할때만 true로 인식하고 다른 이외의 값과 비교할때는 무조건 false
console.log(null == undefined);
console.log(null == false);
console.log(null == 0);
console.log(NaN == false);

// 어떤 변수에 담긴 값이 null인가 확인하고 싶을때
// 1번이나 2번처럼 해야한다
// 3번은 논리적으로 문제가 있다.
let un1 = null;
// 1번코드
if (un1) {
}

// 2번코드
if (un1 == null) {
}

// 3번코드
if (un1 == false) {
}

// 일반적으로 숫자형, 문자형의 데이터가 같은지(일치하는지) 알아보고 싶을대는 일치 연산자를 사용하는 것이 좋다.

console.log("3" === 3);

// parseInt() 문자열형 숫자를 실제 숫자로 변환하는 JS 함수
// type이 다른 두 값을 비교하고자 할때는 코드가 다소 복잡해지지만
// 강제 형변환을 하고 일치연산자로 비교하는 것이 논리적 오류를 막을 수 있다.
console.log(parseInt("3") == 3);

// inNaN : 값이 숫자로 변환할 수  없냐?
// 변환 가능할 시 false
// 불가할 시 true
console.log(inNaN("3")); // fasle
console.log(inNaN(3));

console.log(inNaN("A")); // true

// 아래 명령은 값 비교가 아닌 type 비교 이다.
console.log("A" == NaN); // false
