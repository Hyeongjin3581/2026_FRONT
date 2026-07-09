// 연산 & 함수 결과는 항상 1개
//  분기 / 조건문  : 상황에 따라 흐름 분기/제어
    // 비가 오면 우산챙기고 아니면 우산 두고간다. 
    // 프로젝트 / 실무 : 어떠한 기능에 따른 상황 판단.

// 1. if문 : 만약에 / if (조건식) 실행문 , 조건식 결과가 true이면 실행문 처리. 아니면 실행 x 
if( 10 > 3 )  console.log("10은 3 보다 크다. ")
if ( 10 > 30 ) console.log ("10은 30보다 크다. ")

// 2. 실행문이 2개 이상이면 { } (중괄호로) 묶는다. / if (조건식){실행문; 실행문}
if ( 10 > 3)  {
    console.log("3,10은 3보다 크다. ")
    console.log("3,[2]")
}
// 3.  if문 : 조건식 결과 true(참) , false(거짓) 분기 처리
if( 10 > 3){console.log("4,10은 3보다 크다");}
else{console.log("4,10은 12보다 작다.")}

// 4. if문 ~ else if ~ else if~ else문  : 다수 조건 하나만 출력. 
if(10 > 3){console.log("5,10은 3보다 크다.");}
else if(10 > 2){ console.log("5,10은 2보다 크다.");}
else if(10 > 1){ console.log("5,10은 1보다 크다.");}
else{console.log("5, 거짓");}
// vs if if if : 다수 조건에 따른 결과를 다수 처리.
if( 10 > 3){console.log("5,10은 3보다 크다.");}
if(10 > 2){ console.log("5,10은 2보다 크다.");}
if(10 > 1){ console.log("5,10은 1보다 크다.");}
else{console.log("5, 거짓");}

// 5. 중첩 if 문
let 성별 = "남"; let 점수 = 90
if(성별 == "여"){             // 만약 성별이 "여"이면
    if(점수 >=80)
        console.log("여학생 우수")
    else{ 
        console.log("여학생")
    }
}else{
    if(점수>= 80){console.log("남학생 우수")}
    else{
        console.log("남학생")
    }
}