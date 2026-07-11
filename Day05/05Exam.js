// 반복문 : for문
// for (초기값 ;조건식; 증감식){ }

// 안녕하세요 3번 출력, 방법1: 복붙 , 방법2 : 반복문

/*

console.log("안녕하세요")
console.log("안녕하세요")
console.log("안녕하세요")

// 어디부터(초기값) 어디까지(조건식) 무엇을(실행문) 반복 할 것인지.
// 반복수++ : 1증가
for(let 반복수 = 1; 반복수 <=3;  반복수++){console.log("안녕하세요")}

// [2]
// 1 ~ 5까지 출력.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

//초기값: 1 , 조건식 : 5가지 , 증감식 : 1씩증가, 실행문 : 반복처리할 코드
for(let 숫자 =1; 숫자<=5;숫자++){console.log(숫자)}

// [3] 1부터 5까지 총 합계

let 총합계 = 1
총합계 = 총합계 + 2 ; 
총합계 = 총합계 + 3
총합계 = 총합계 + 4
총합계 = 총합계 + 5
console.log(총합계)

let 합계 =1
for(let 수 = 2; 수<=5; 수++){
    합계 = 합계 + 수 
}
console.log(합계)

// [4] 2단
console.log(` 2*1= ${2*1} `)
console.log(` 2*2= ${2*2} `)
console.log(` 2*3= ${2*3} `)
console.log(` 2*4= ${2*4} `)
// 이하 생략
for(let 곱=1;곱<=9;곱++){console.log(`2 * ${곱} = ${2 * 곱}`)}

// [5] 구구단 ; 중첩 for문 
for(let 단 = 1; 단<=9;단++){
    for(let 곱1 =1; 곱1<=9;곱1++){
        console.log(`${단} * ${곱1} = ${단 * 곱1}`)
    } // for end
}// for end

*/

//[6] 3개의 문자열을 입력받아 배열에 저장
// let 배열변수 = [ ]              //빈배열


/*
for(let 반복수 =1; 반복수<=3; 반복수++){
let 입력 = prompt();        // 입력
배열변수.push( 입력 )     //저장
} console.log(배열변수)

*/