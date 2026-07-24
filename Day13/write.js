function boardWrite(){
    const title = document.querySelector('#title1').value;
    const content = document.querySelector('#content1').value;
    const pwd = document.querySelector('#pwd1').value;

    const obj ={title,content,pwd};

    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    obj.no=boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;
    boardList.push(obj);

    localStorage.setItem('boardList',JSON.stringify(boardList));
    alert('게시물 등록 성공!');
    location.href='list.html';
}








