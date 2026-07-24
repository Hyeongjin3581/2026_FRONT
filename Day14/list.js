
// 한번 실행.

boardPrint();

function boardPrint(){
    //어디에
    const boardTbody = document.querySelector('#boardTbody');

    //  배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}


    let html ="";

    for(let i=0;i<=boardList.length-1;i++){
        const obj = boardList[i];

        html +=`<tr>
                        <td>${obj.no}</td>
                        <td><a href="view.html?no=${obj.no}">${obj.title}</a></td>
                      </tr>
        `
    }
    boardTbody.innerHTML = html ;
}