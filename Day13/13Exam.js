/*
    - 브라우저(크롬/엣지/사파리)에 의존하여 HTML 랜더링
    - HTML 안에 JS/CSS도 포함하여 같이 랜더링 된다.
    - 브라우저 F5(새로고침) 하면 재요청(랜더링) 하므로 JS 초기화 한다.
*/

// [1] JS 변수들은 브라우저에서 F5(새로고침) 초기화 된다 


// [3] 서로다른 .js 파일에서 동일한 html에 포함되면 코드 공유 가능. 
// test.js 에서 선언된 코드가 ,exam1.js 에서 호출 가능

console.log(x)

// --> 해당 작업을 하는 이유? 임시 저장을 위해 스토리지를 사용, 장기저장은 DB활용
// 1. 웹 스토리지 객체 호출
console.log( localStorage )
console.log( sessionStorage )


// 2. 웹 스토리지 객체 내 자료 추가 .setItem(key , value);
sessionStorage.setItem('name' , '유재석')
localStorage.setItem(' age' , 40 )


// 3. 웹 스토리지 객체 내 자료호출 . getItem('key')
sessionStorage.getItem( 'name' ); console.log(name)
let age = localStorage.getItem('age'); console.log(age)


// 4. 웹 스토리지 객체 내 자료 삭제 .removeItem('key')
sessionStorage.removeItem( 'name ')  // 특정한 key가 존재하면, key/value 삭제 // 개발자 도구 삭제 결과
localStorage.clear() // 모든 key 전체삭제


// [*] 웹 스토리지도 문자열만 지원. *타입변환 필요*

// 동적타입
let a = 10 //JS --> 해당 js는 동적타입을 지원하기 때문에, 타입스트립트를 사용하는 추세. (정적타입을 활용하는 타입스크립트가 개발자에게 편하기 때문.)
a = 10 // PY

// 정적타입
// int a = 10


// 5 JSON(자바스크립트 객체) 
//       JSON.stringify(객체) : 객체 타입 --> 문자타입 반환
sessionStorage.setItem(' 회원객체1 ' , { ' name ' :'유재석' , 'age' : 40}) // 객체는 object로 출력되어 세션에서 확인 불가. 고로 문자타입으로 반환해야함. 
sessionStorage.setItem(' 회원객체 ' , JSON.stringify({ ' name ' :'유재석' , 'age' : 40}))
console.log(sessionStorage)
// JSON.parse(문자열) : 문자열 타입 --> 객체 변환
let 회원객체 = JSON.parse(sessionStorage.getItem('회원객체'))

console.log(회원객체)

