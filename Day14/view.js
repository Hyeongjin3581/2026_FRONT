//1. 게시물 정보 등록함수

getBoard();

function getBoard(){
    // 번호 확인 및 가져오기.
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    // 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        // 가져온 넘버와 등록 번호가 같다면, 
        if(obj.no==selectNo){
            document.querySelector('#title') = obj.title;
            document.querySelector('#content') = obj.content;
            return;
        }
    }
}

//2. 삭제함수

function boardDelete(){
        // 번호 확인 및 가져오기.
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    // 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        // 가져온 넘버와 등록 번호가 같다면, 
        if(obj.no==selectNo){
            const confirm = prompt('비밀번호 입력');
            // 입력한 비밀번호가 일치하다면
            if(confirm == obj.pwd){
                boardList.splice(i,1) // i번째 삭제
                localStorage.setItem('boardList',JSON.stringify(boardList));
                alert('삭제 성공!');
                location.href="list.html";
            }else{
                alert('비밀번호가 일치하지 않습니다.');
            }
        }
    }
}


// 3 등록함수

function boardUpdate(){
    // 번호 확인 및 가져오기.
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    // 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        // 가져온 넘버와 등록 번호가 같다면, 
        if(obj.no==selectNo){
            const confirm = prompt('비밀번호 입력');
            // 입력한 비밀번호가 일치하다면
            if(confirm == obj.pwd){
                // 번호에 맞는 수정위치로 이동.
                location.href =`update.html?no=${selectNo}`;
            }else{
                alert('비밀번호가 일치하지 않습니다.')
            }
        }
    }
}