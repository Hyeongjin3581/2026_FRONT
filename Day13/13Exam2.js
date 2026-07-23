/*
    QueryString : URL 웹 주소 상에 매개변수 사용
        -페이지 이동 간에 매개변수 값 전달  ,   ** 주로 식별자 자료 **
        - URL ?  매개변수명 = 값 & 매개변수 = 값 
           new URLSearchParams( location.href ); : 현재 주소상 위치 반환
           new URLSearchParams( location.search );  : queryString 객체 반환
           .get('매개변수명) : queryString 내 특정한 매개변수명의 값 반환
*/

// [ 1 ] JS 에서 URL 정보 객체 호출
let url  = new URLSearchParams( location.search );
console.log( url )
    // http://127.0.0.1:5500/Day13/13Exam2.html?name=유재석
    let name = url.get('name')
    console.log(name)

// [2] 페이지 이동하는 방법
// 1) <a href="웹주소">링크</>

let pcode =url.get('pcode');        
let page = url.get('page');

console.log(pcode,page)

function 링크함수(){
    location.href ="https://www.naver.com";
}

/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행.
        -사용법 :  
         setInterval(함수명,밀리초) 
            -> 함수명에 (  ) 소괄호 넣으면 안됨. 
            -> 밀리초(1/1000) : 1000 -> 1초
        clearInterval(함수명)
*/
// [1]
let value = 0;
function 증가함수(){
    value+=1;
    document.querySelector('#box1').innerHTML = value;
}
setInterval(증가함수,1000)

function 시계함수(){
    let today = new Date()      // 1) 현재 날짜 시간
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let time = ` ${hour} : ${minute} : ${second < 10 ? "0"+second : second} `;
    document.querySelector('#box2').innerHTML = time;
}
// [2]
setInterval(시계함수,1000)

// [3]  인터벌 시작 / 종료
let time = 0 ;      // 초 저장하는 변수
let timeInter;     // 인터벌 저장하는 변수

function 타이머시작(){
    timeInter = setInterval(타이머함수,1000)
}
function 타이머함수(){
    time++;
    document.querySelector('#box3').innerHTML = time;
}

function 타이머종료(){
   clearInterval(timeInter);
}



