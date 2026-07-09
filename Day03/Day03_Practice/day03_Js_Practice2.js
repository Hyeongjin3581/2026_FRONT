// 오늘 제출해야하는 것.  16p 7p내용을 위주로 해서 제출
// practice1 / practice2 / 시간남으면 level up

// 아이티단자 접속
// 로그인
// 수강신청 
// 내 강의실 강의 들어가기
// 메뉴에 과제목록에서 과제제출
// ex) github.com / ~~~~~~~~~~ / 

//practice3 1번문제

/*
let 밑변 = Number(prompt("밑변의 길이를 입력하시오: "))
let 높이 = Number(prompt("높이를 입력하시오: "))
let 삼각형 = 밑변 * 높이 / 2
console.log(`결과 : ${삼각형} `)
*/

//practice3 2번문제

/*
let 섭씨 = Number(prompt("섭씨 온도를 작성하시오 : "))
let 화씨 = (섭씨 * 9 / 5) + 32
console.log(`결과 : ${화씨} `)
*/

//practice3 3번문제

/*
let 탄생년도 = Number(prompt("태어난 년도를 작성하시오: "))
let 나이계산 = 2025 - 탄생년도 
console.log(`결과 : ${나이계산} `)
*/

//practice3 4번문제

/*
let 키 =  Number(prompt("본인의 키(cm)를 작성하시오: "))
let 몸무게 =  Number(prompt("본인의 몸무게(kg)를 작성하시오: "))
let BMI = 몸무게 / ((키/100) * (키/100))
console.log(`결과 : ${BMI} `)
*/

//practice3 5번문제

/*
let 아이디 = prompt("아이디를 입력하세요: ")
let 이메일 = prompt("이메일을 입력하세요: ")
let 판별 = 아이디 == 'admin' || 이메일 == 'admin@test.com'
let 정답 = 판별 ? "관리자" : "일반사용자"
console.log(`결과 : ${정답} `)
*/

//practice3 6번문제

/*
//조건 A ? 참A : 조건 B ? 참B : 조건 C ? 참C
let 점수 = Number(prompt("100점 만점 중 점수를 작성하시오: "))
let 판별 = 점수>=90 ? " 'A' " : 점수<90 && 점수>=80 ? " 'B' " : 점수 < 70 ? " 'C' " : " 'C' "
document.querySelector(' h2 ').innerHTML = `결과 : ${판별}`  
*/

//practice3 7번문제

/*
let 나이=  Number(prompt("본인의 나이를 작성하시오: "))
let 판별 = 나이>= 20 && 나이<=29 ? " \"이벤트 대상입니다.\" " : " \"이벤트 대상이 아닙니다.\""
console.log(`결과 : ${판별} `)
*/

//practice3 8번문제

// '좋아요' -> likeCount = 3 & likeCount++

/*
let likeCount = 3
likeCount++
console.log(` "좋아요 : ${[likeCount]}" `)
*/

//practice3 9번문제

/*
let todoList = ['장보기' , '과제하기']
let 마지막할일 = prompt("새로운 할 일을 작성해주세요: ")
todoList.push(마지막할일)
console.log(`결과 : ${todoList} `)
*/


//practice3 10번문제

/*
let waitingList = ['김민준', '이서연', '박도윤', '최지우']
let 대기자 =waitingList[waitingList.length-1]
console.log(` "마지막 대기자는 ${[대기자]}입니다."`)
*/



