// 반복문 : for(초기값 ; 조건식; 증감식){ 실행문 }
//배열과 반복문 관계: 배열의 인덱스는 0부터 요소/자료가 저장되는 순서 규칙
//즉, 인덱스는 0부터 마지막인덱스까지 1씩증가

// [1] 배열의 데이터를 하나씩 출력

/*
let 과일목록 = ['사과', '포도', '딸기']
//1.
console.log(과일목록[0])
console.log(과일목록[1])
console.log(과일목록[2])
//2. .length 란? 배열내 요소/자료 개수 반환. 마지막인덱스(총개수-1) : 배열.length-1
for(let 인덱스 = 0; 인덱스<=과일목록.length; 인덱스++){console.log(과일목록[인덱스])}

// [*생각해보기] 3개의 이름을 입력받아 배열에 저장하고 배열에 저장된 이름들을 HTML에 출력하시오.

let 빈배열 = [ ]
for(let 반복=1; 반복<=이름목록.length-1;반복++){
    let 이름목록 = prompt("이름을 입력하세요.");
    빈배열.push(이름목록);
}  document.querySelector("h3").innerHTML = 빈배열

*/

// 반복문을 이용한 HTML 구성

// let 이름목록 = [ ]
// let html = ' '
// for(let 인덱스 = 0 ; 인덱스<=2 ; 인덱스++){
//     let 이름목록 = prompt("이름을 입력하세요.");
//     html += `<li> ${이름목록[인덱스]}</li>`
// }
// document.querySelector('ol').innerHTML = html

//반복문 제어키워드

/*

// 1. continu;
for(let 반복수=1;반복수<=5;반복수++){
    //만약에 반복수가 3이면, continue만나 코드 흐름이 증감식으로 이동한다.
    if(반복수 == 3 ){continue}        //반복문의 *증감식*으로 흐름 이동
console.log(반복수)        // 반복수가 3이면 console.log 실행안됨.
}

// 2. break; 반복문의 탈출 / 종료 
for(let 반복수 =1; 반복수 <=5; 반복수++){
    if(반복수 == 3) break;      // break만나면 끝나는 중괄호 밖으로 이동.
    console.log( 반복수 )
}
// 반복수가 3을 만나면 바로 여기로 이동. 출력은 2까지만 됨.

// 3. 무한루프 ( 무한반복 ) *특정조건의 break 권장* 
// for(  ;   ;  ){console.log('무한 출력중')}  //무한출력돼 HTML이 실행되지 않음.
for(    ;   ;   ){
    let 입력 = prompt("무한루프")       // 무한입력
    if (입력 == 'EXIT'){break}  //입력한 값이 'EXIT'라면, 무한루프 종료
} 
    
*/

// 문제 6: 배열 요소의 합계와 평균 구하기
// 다음 학생들의 점수가 담긴 배열이 있습니다. 
// for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
// let scores = [85, 92, 78, 65, 95]; 


// let scores = [85, 92, 78, 65, 95];
// let sum = 0; // 누적 총합계를 구해야 하므로 for 밖에 선언 
// for( let index = 0 ; index <= scores.length - 1 ; index++ ){ 
//     sum += scores[index];    
// } 
// console.log( `총점 : ${ sum }  , 평균 : ${ sum/scores.length } `  );



/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)
점수 배열에서 100점 만점자가 처음 나타나면, 
그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
let scores = [77, 82, 100, 54, 96];
출력 예시: 100점 만점자를 찾았습니다!*/
/*

let scores = [77, 82, 100, 54, 96];

for( let index = 0 ; index <= scores.length - 1 ; index++ ){
    let value = scores[index]; // index번째 요소 값 호출 
    if( value == 100 ){ //만약에 해당 값이 100(만점) 이면 
        console.log( `${value}점 만점자를 찾았습니다.!`);
        break; // 가장 가까운 for{} 탈출/종료 
    } // if end 
} // for end 
// break를 만나면  [***여기***] 로 이동된다.

*/


/*문제 8: 특정 조건 건너뛰기 (continue)
점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 
60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.
let scores = [90, 45, 72, 88, 59, 100];*/

// let scores = [90, 45, 72, 88, 59, 100];

// for(let i=0; i<=scores.length-1; i++){
//     let value = scores[i];
//     if(value < 60){continue}
//     console.log(value);
// }


/*
문제 9: 배열에서 특정 값의 개수 세기
다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 
for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; 
*/

// let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; 
// let count =0

// for(let i=0;i<=bloodTypes.length-1;i++){
//     let value = bloodTypes[i];
//     if(value == 'A'){count +=1}
// } console.log(count)

/*문제 10: 학생 점수 시각화하기 
주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 
시각화하여 HTML에 출력하는 프로그램을 작성하시오.

(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 100점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 
빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.
(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○  */

let nameArray = ['유재석', '강호동', '신동엽']
let scores = [92, 86, 72]
let circle = ['','','']
let html = ''

for(let index = 0; index <=nameArray.length-1;index++){
    //이름 작성
    html = html + nameArray[index];
     // 점수 대입 ,  html = html + scores[index]
     // 정수 도형으로 바꿈
    for(let 도형수 =1 ; 도형수 <= 10 ; 도형수++){
        if(scores[index]/10 > 도형수){html = html + '●'}
        else{html = html + '○'}
    }
    // 이름마다 줄바꿈 <br>
    html = html + "<br/>"
}  document.querySelector("p").innerHTML = html
