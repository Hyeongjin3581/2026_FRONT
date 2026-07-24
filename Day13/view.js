//1

boardGet();

function boardGet(){
    const url = new URLSearchParams(location.search);
    const selecteNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        if(obj.no==selecteNo){
            document.querySelector('#title2') = obj.title;
            document.querySelector('#content2') = obj.content;
            return;
        }
    }
}

// 2 삭제함수

function boardDelete(){
    const url = new URLSearchParams(location.search);
    const selecteNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        if(obj.no==selecteNo){
            const confirm = prompt('비밀번호 입력')
            if(confirm == obj.pwd){
                boardList.splice(i,1);
                localStorage.setItem('boardList',JSON.stringify(boardList));
                alert('삭제성공!');
                location.href='list.html';
            }else{
                alert('비밀번호가 일치하지 않습니다.')
            }
        }
    }
}








