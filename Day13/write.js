function boardWrite(){
    // 1. 마크업 입력값 가져오기
    const title = document.querySelector('#title1').value;
    const content = document.querySelector('#content1').value;
    const pwd = document.querySelector('#pwd1').value;
    // 2. 객체화 하기.
    const obj ={title,content,pwd};
    // 3. localStorage에서 boardList 가져오기(배열)
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}
    // 4. 객체를 배열에 저장하기
    obj.no=boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;
    boardList.push(obj);
    // 5.  locatStorage에 배열 저장하기
    localStorage.setItem('boardList',JSON.stringify(boardList));
    // 6. ect 
    alert('게시물 등록 성공!');
    location.href='list.html';      // 글쓰기 성공시 list페이지로 이동.
}

