// --> 전역변수 x why? 스토리지에 저장하여 내용을 기억해야 하기 때문.

// 고로, 세션혹은 로컬스토리지에 값을 저장해놓아야 함.

// 회원번호는 등록시 1씩 증가. 
// 배열 전체를 JSON.stringfy()를 사용해 문자열 반환
// localStorage에 'memberList라는 키에 저장되어야 함.

// let memberList = [ { 'no', 'id' , 'pw' } , { 'no', 'id' , 'pw' } ]

// localStorage.setItem('memberList' , JSON.stringify(회원객체))


function signup(){
    // 1. 입력받은 값 가져오기 
    let id = document.querySelector('.signId').value;      // 받아온 값은 class라면 .으로 받고 ,id는 #
    let pw = document.querySelector('.signPw').value;
    // [*] localStorge에서 memberList를 가져와야 함.        *JSON파싱 필요*
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    console.log(memberList) // 아마 null값이 산출될 것.
    if( memberList == null){     // 최초 등록이면 배열
        memberList = [ ]
    }
    // 마지막인덱스         :           lenght -1 , 마지막인덱스 회원번호 + 1
    let no = memberList.length == 0 ? 1 : memberList[ memberList.length -1].no+1
    // 2. 객체화 
    let obj = {no, id , pw}; console.log( obj );
    // 3. 배열 저장한다.
    memberList.push( obj ) ; console.log( memberList );
    // 4. 성공처리
    alert('등록 성공!');
    // [*] localStorage 에 memberList  배열 저장하기.
    localStorage.setItem( 'memberList', JSON.stringify(memberList))
}

// [2] login 함수, 자료 단순 비교
function login(){
    // 1. 입력받은 값 가져오기
    let id = document.querySelector('.loginId').value;
    let pw = document.querySelector('.loginPw').value;
    // 2. 입력받은 값을 배열 내 정보와 비교
    // [*] localStorage 기존 배열 가져오기.
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    if( memberList != null){ 
        for(let i = 0 ; i<=memberList.length -1 ; i++){
            if( memberList[i].id == id && memberList[i].pw == pw){
                alert('로그인 성공!'); 
                return; // 여러개를 찾는것이 아닌 한명의 로그인을 찾는것이므로 return을 사용해도 좋음. 
            }
        }
    }
    alert('동일한 회원정보가 없습니다.')
}



// 현재 이해안되는점 .  1. input에서 작성한 아이디와 패스워드를 어떻게  회원가입 함수에 반환받을 것인가?
// 2. 반환 받은 값을 어떻게 저장하고, 어떻게 횟수를 늘려 회원번호에 저장할 것 인가?