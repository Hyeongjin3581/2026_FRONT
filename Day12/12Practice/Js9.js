// [  인사 관리 대시보드 ] * 제출
// 1. 목표
// 부서, 사원, 그리고 휴가 신청 정보를 하나의 웹 페이지에서 통합적으로 관리하는 대시보드를 제작합니다.
// 사용자는 부서 등록/삭제/수정, 사원 등록/삭제/수정, 휴가 신청/취소 기능을 직관적으로 사용할 수 있어야 합니다.

// 부서 ==> 등록 / 삭제 / 수정
// => "부서명" , "관리"   


// 사원 ==> 등록 / 삭제 /수정
// => "사진", "이름", "부서", "직급", "관리" 순서
// => 카테고리명 :{ 코드1 : 개발팀 } , {코드2 : 디자인팀 } , {코드3 : 기획팀}

// 휴가 ==> 신청 / 취소 
// => "신청사원" , " 휴가 시작일 " , " 휴가 종료일 " , "휴가 사유" 



// 2. 화면 구성
// 페이지는 '부서 관리(왼쪽)', '사원 관리(가운데)', '휴가 관리(오른쪽)' 라는 3개의 명확한 컬럼으로 구성되어야 합니다.
// 부서 관리 영역:
// 부서 등록:  새로운 부서의 이름을 텍스트로 입력할 수 있는 입력창과 "추가" 버튼이 있어야 합니다.
// 부서 목록: 
// 등록된 모든 부서 정보를 보여주는 표(테이블)가 있어야 합니다.
// 표는 "부서명"과 "관리" 열로 구성됩니다.
// 각 부서 항목마다 해당 부서를 수정하고 삭제할 수 있는 버튼이 제공되어야 합니다.
// 사원 관리 영역:
// 사원 등록:
// 사원의 이름과 직급을 입력하는 텍스트 필드가 있어야 합니다.
// 등록된 부서 목록에서 소속될 부서를 선택할 수 있는 드롭다운 메뉴가 있어야 합니다.
// 사원의 사진을 등록할 수 있는 파일 선택 버튼이 있어야 합니다.
//     사원 목록:
// 등록된 모든 사원 정보를 보여주는 표(테이블)가 있어야 합니다.
// 표는 "사진", "이름", "부서", "직급", "관리" 순서의 열로 구성됩니다.
// 각 사원 항목마다 해당 사원의 이름과 직급을 수정하고, 사원 정보를 삭제할 수 있는 버튼이 제공되어야 합니다.
//   휴가 관리 영역:
// 휴가 신청:
// 등록된 사원 목록에서 휴가를 신청할 사원을 선택하는 드롭다운 메뉴가 있어야 합니다.
// 휴가 시작일과 종료일을 선택할 수 있는 날짜 입력 필드가 있어야 합니다.
// 휴가 사유를 텍스트로 간단히 기입할 수 있는 입력창이 있어야 합니다.
// 휴가 신청 전체 목록:
// 제출된 모든 휴가 신청 내역을 보여주는 목록이 있어야 합니다.
// 각 항목에는 신청한 사원의 이름, 휴가 기간, 사유가 표시되어야 합니다.
// 각 휴가 신청 항목마다 해당 신청을 취소할 수 있는 "신청취소" 버튼이 제공되어야 합니다.
// 3. 핵심 기능
//   초기 데이터 표시:
// 모든 데이터(부서, 사원, 휴가)는 웹 페이지가 실행되는 동안에만 유지되는 전역 배열을 통해 관리됩니다. 페이지를 새로고침하면 데이터는 초기 샘플 상태로 돌아갑니다.
// 사용자가 처음 페이지에 접속했을 때, 시스템 사용법을 쉽게 파악할 수 있도록 부서, 사원, 휴가 신청에 대한 예시 데이터가 기본적으로 화면에 표시되어 있어야 합니다.
//   부서 관리 기능:
// 등록: "추가" 버튼 클릭 시, 입력된 부서가 부서 목록과 사원 등록의 부서 선택 메뉴에 즉시 반영되어야 합니다. 이미 존재하는 부서명은 등록되지 않아야 합니다.
// 수정: "수정" 버튼 클릭 시, prompt 대화상자가 나타나 새로운 부서명을 입력받고, 입력 완료 시 목록에 즉시 반영되어야 합니다.
// 삭제: "삭제" 버튼 클릭 시, 해당 부서가 목록에서 제거되어야 합니다. 단, 해당 부서에 소속된 사원이 한 명이라도 있을 경우, 삭제할 수 없다는 경고 메시지를 표시해야 합니다.
//   사원 관리 기능:
// 등록: 사원 정보를 입력하고 "등록" 버튼 클릭 시, 사원 목록과 휴가 신청의 사원 선택 메뉴에 즉시 추가되어야 합니다. 사진을 첨부하면 해당 사진이, 첨부하지 않으면 기본 이미지가 표시되어야 합니다.
// 수정: "수정" 버튼 클릭 시, prompt 대화상자를 통해 새로운 이름과 직책을 입력받아 해당 사원의 정보를 수정하고 목록을 즉시 갱신해야 합니다.
// 삭제: "삭제" 버튼 클릭 시, 해당 사원이 목록에서 제거되며, 관련된 모든 휴가 신청 기록도 함께 삭제되어야 합니다.
//   휴가 관리 기능:
// 신청: 휴가 정보를 입력하고 "신청" 버튼 클릭 시, 휴가 신청 목록에 즉시 추가되어야 합니다.
// 취소: "신청취소" 버튼 클릭 시, 해당 휴가 신청 내역이 목록에서 제거되어야 합니다.


// 부서 ==> 등록 / 삭제 / 수정
// 사원 ==> 등록 / 삭제 /수정
// 휴가 ==> 신청 / 취소 


//사원목록 -> 
let departmentStaffList =[
    { 'dcode': 1, 'dname':'개발팀', 'ecode': 1 , 'name' : '김민준' },
    { 'dcode': 2, 'dname':'디자인팀' , 'ecode': 2 , 'name' : '이서연' },
    { 'dcode': 3, 'dname':'기획팀' , 'ecode': 3 , 'name' : '박도윤' }
]
let employeeList = [ 
    { 'ecode' : 1 , 'eimg' :'https://placehold.co/100x100', 'ename' : '김민준' , 'dcode' : 1 , 'eposition': '선임 개발자'} , 
    { 'ecode' : 2 , 'eimg' :'https://placehold.co/100x100', 'ename' : '이서연' , 'dcode' : 2 , 'eposition': '수석 디자이너'} ,
    {'ecode' : 3 , 'eimg' :'https://placehold.co/100x100', 'ename' : '박도윤' , 'dcode' : 3 , 'eposition': '팀장'}
]
// ecode = 사원번호 , eimg = 사원사진, ename = 사원이름 , 
// dcode = 부서번호 , dname = 부서이름 , eposition = 직급


// [1] 전체조회 함수 
employeePrint( ) // JS가 열릴때 최초 1번 실행 
function employeePrint( ){
    // 1. 어디에
    let tbody = document.querySelector( '#main table tbody' )       // 해보고 안되면 #main table body로 수정.
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for( let i = 0 ; i <= employeeList.length-1 ; i++ ){
        let employee = employeeList[i] // i번째 사원객체 1명 
        // ++ 현재 i번째 사원의 부서명에 해당하는 부서번호 찾기
        let dname = ''      
        for(let j = 0 ; j <= departmentStaffList.length-1 ; j++){
            if(departmentStaffList[j].dcode == employee.dcode){ 
                dname = departmentStaffList[j].dname;
                break; 
            }
        } // 그 다음 , html에 사원 이미지, 이름, 부서 , 직급 입력
        html += `<tr>       
                    <td> <img src=${ employee.eimg } /> </td>
                    <td> ${ dname } </td> <td> ${ employee.ename } </td> 
                    <td> ${ employee.eposition} </td> 
                    <td> 
                        <button class="deleteBtn" onClick="employeeLDelete( ${ employee.dcode } )">삭제</button> 
                        <button class="updateBtn" onClick="employeeUpdate( ${ employee.dcode } )">수정</button> 
                    </td>
                </tr>`
    } // for end 
    // 3. 출력 
    tbody.innerHTML = html
} // F END 

// [2] 삭제 함수 , 삭제할 사원번호를 매개변수로 받아온다.
function employeeDelete( ecode ){
    // 1. 삭제할 ecode의 사원번호를 배열에서 찾는다.
    for( let i = 0 ; i <= employeeList.length-1 ; i++ ){
        if( employeeList[i].ecode == ecode ){
            employeeList.splice( i , 1 ); // 2. 배열에서 요소 삭제 . splice( 인덱스번호 , 개수 )
            alert('삭제 성공');
            employeePrint() // 3. 조회구역 최신화
            return // 주의할점 구분 : return function{}탈출  VS break for{}탈출
        } // if end 
    } // for end 
} // f end 
// [3] 수정 함수
function employeeUpdate( ecode ){
    // 1. 수정할 ecode의 사원번호를 배열에서 찾는다.
    for( let i = 0 ; i <= employeeList.length-1 ; i++ ){
        if( employeeList[i].ecode == ecode ){
            let newEname = prompt('수정할 사원명 입력하세요.')
            let newDname = prompt('수정할 부서명 입력하세요.')
            let newPosition = prompt('수정할 직급 입력하세요.')
            employeeList[i].ename = newEname // 2. 배열에서 특정한 요소값 사원이름 , 부서명,  직급
            employeeList[i].dname = newDname
            employeeList[i].eposition = newPosition
            employeePrint(); return;
        } //if end 
    } // for end 
} // f end 

// [4] 등록 함수 
let finalDcode = 3 // 현재 마지막으로 사용한 부서코드 
function employeeAdd( ){
    // 1. 입력받은 값 가져오기 
    let name = document.querySelector('.ename').value
    let code = document.querySelector('.dname').value
    let position = document.querySelector('.eposition').value
    let image = document.querySelector('.eimg').files[0] // + 첨부파일은 .files[0] 속성에서 첨부파일의 첫번째 자료 가져오기 
        // 꼼꼼히 ! , 유효성판단/검사
        if( dcode == 'disabled'){
            alert("부서선택해주세요");
            return;
        }

            // 2. 입력받은 값들을 객체화 , 중간검사 : console.log()를 이용한 변수/자료 확인
        // pcode : 제품식별코드로 사용자가 지정하지 않고 *자동번호 부여* , 마지막사용된 제품코드에 + 1
        // pdate : 현재 시스템 날짜/시간 함수 , new Date()
            // 현재연도 : new Date().getFullYear()  ,  현재월(0:1월~11:12월) : new Date().getMonth() , 현재일 : new Date().getDate()
        //console.log( new Date().getFullYear() , new Date().getMonth() , new Date().getDate()  ) 
    let object = {  ename: name , dname : code, eposition : position, 
                    //만약에 첨부파일 선택이 없으면(undifined)
                    eimg : image == undefined ? 'https://placehold.co/100x100' : URL.createObjectURL (image),      //  URL.createObjectURL ( 객체 ) 객체 (가상)주소 
                    dcode : finalDcode+1 }
    // 3. 배열 저장  , **마지막 부서코드 1 증가** 
    employeeList.push( object ); finalDcode += 1
    // 4. 성공  , 화면 최신화 
    alert('등록성공'); 
    employeePrint();
} // f end 