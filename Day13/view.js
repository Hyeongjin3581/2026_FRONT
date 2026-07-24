// // 1. 게시물번호 정보 조회 함수

// getBoard();

// function getBoard(){
//     // 1) 웹 주소 및 게시물번호 가져오기 html?no=3 주소로 들어왔다고 가정
//     const url = new URLSearchParams(location.search);   // 주소창의 '?no=3' 부분을 파싱
//     const selectNo = url.get('no');                   // 'no' 키의 값인 '3'을 가져옴

//     // 2) localStorage 배열 가져오기 
//     let boardList = localStorage.getItem('boardList');
//     if(boardList==null){boardList=[]}
//     else{boardList=JSON.parse(boardList);}

//     // 3) 전체 글 중에서 번호(no)가 '3'인 글을 찾아서 화면에 출력
//     for(let i=0;i<=boardList-1;i++){
//         const obj = boardList[i];
//         if(obj.no == selectNo){ //내가 선택한 게시물번호와 일치
//             document.querySelector('#title2').innerHTML = obj.title;
//             document.querySelector('#content2').innerHTML = obj.content;
//             return;
//         }
//     }
// }

// // 2. 삭제함수

// function boardDelete(){
//     const url = new URLSearchParams(location.search);
//     const selectNo = url.get('no');

//     let boardList = localStorage.getItem('boardList');
//     if(boardList==null){boardList=[]}
//     else{boardList=JSON.parse(boardList);}

//     for(let i=0;i<=boardList.length-1;i++){
//         const obj = boardList[i];

//         if(obj.no==selectNo){
//             const confirm = prompt('비밀번호 입력');    //  기존 비번과 일치하면 삭제, 아니면 실패    
//             if(obj.pwd == confirm){ // 비밀번호 일치
//                 boardList.splice(i,1);  //객체 1번 삭제
//                 localStorage.setItem('boardList',JSON.stringify(boardList));
//                 alert('삭제 성공');
//                 location.href = 'list.html'
//             }else{
//                 alert('삭제 실패 : 비밀번호 불일치')
//             }
//         }
//     }
// }

// // 3. 수정 함수 이동

// function boardUpdate(){
//     const url = new URLSearchParams(location.search);
//     const selectNo = url.get('no');

//     let boardList = localStorage.getItem('boardList');
//     if(boardList==null){boardList=[]}
//     else{boardList=JSON.parse(boardList);}

//     for(let i =0;i<=boardList.length-1;i++){
//         const obj = boardList[i];

//         if(obj.no==selectNo){
//             const confirm = prompt('비밀번호 입력')
//             if(obj.pwd == confirm){
//                 //만약 , 비밀번호가 일치하면 수정페이지로 이동.
//                 location.href = `update.html?no=${selectNo}`
//             }else{
//                 alert('수정불가 : 비밀번호 불일치');
//             }
//         }
//     }
// }







// 시작


// 1. 게시물 정보 조회 함수.
getBoard();

function getBoard(){
    // 1. 번호 받기
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //2. 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    //3. 번호 토대로 자료 가져오기.
    for(let i =0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        if(obj.no==selectNo){
            document.querySelector('#title2').innerHTML = obj.title;
            document.querySelector('#content2').innerHTML = obj.content;
            return;
        }
    }
}



//2. 삭제함수

function boardDelete(){
    // 1. 번호 받기
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //2. 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    //3. 번호 토대로 자료 가져오기.
    for(let i =0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        if(obj.no==selectNo){
            const confirm = prompt('비밀번호 입력');
            if(confirm==obj.pwd){
                boardList.splice(i,1);
                localStorage.setItem('boardList',JSON.stringify(boardList));
                alert('삭제 성공!');
                location.href ="list.html";
            }else{
                alert('삭제 실패: 비밀번호 불일치')
            }
        }
    }
}


//3. 수정함수

function boardUpdate(){
        // 1. 번호 받기
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    //2. 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    //3. 번호 토대로 자료 가져오기.
    for(let i =0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        if(obj.no==selectNo){
            const confirm = prompt('비밀번호 입력');
            if(confirm==obj.pwd){
                location.href = `update.html?no=${selectNo}`
            }else{
                alert('수정불가 : 비밀번호 불일치');
            }
        }
    }
}