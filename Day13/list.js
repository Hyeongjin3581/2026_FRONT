boardPrint();       // JS가 실행될 때 한번 실행. 

function boardPrint(){
    // 1. 어디에
    const boardTbody = document.querySelector('#boardTbody');

    // 2. 무엇을 
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList=[]}
    else{boardList=JSON.parse(boardList);}

    // 3. 어떻게 출력 할 것인지.
    let html="";

    for(let i=0; i<=boardList.length-1;i++){
        const obj = boardList[i];
        // 제목을 클릭하여 view.html로 넘어가도록 설계. 
        html +=`<tr>
                        <td>${obj.no}</td>
                        <td><a href="view.html?no=${obj.no}">${obj.title}</a></td>
                      </tr>
        `
    }
    boardTbody.innerHTML = html;
}