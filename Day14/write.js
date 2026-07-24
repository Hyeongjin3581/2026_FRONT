

function boardWrite(){
    // 1. 마크업에서 내용 가져오기.
    const title = document.querySelector('#title1').value;
    const content = document.querySelector('#content1').value;
    const pwd = document.querySelector('#pwd1').value;

    //2. 객체 생성
    const obj = {title,content,pwd};

    //3. localStorage 에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    //4. no번호 등록. 
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;
    boardList.push(obj);

    //5. localStorage에 등록하기. 
    localStorage.setItem('boardList',JSON.stringify(boardList));
    alert('게시물 등록 성공!');
    location.href="list.html";
}