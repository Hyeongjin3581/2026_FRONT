// *이 10개이며, 삼각형 그리고 역삼각형 출력. 

// let a = []
// let html =""


//일단, 삼각형을 출력하는 방법을 생각해보자. 

// for(let i = 1; i<=10 ; i++){
//     for(let j=10; j>=1; j--){
//         if( j > i){
//             html += "*"
//         }else{
//             html+=""
//         }
//     }
//     html +="<br/>"
// } 
// document.querySelector("h3").innerHTML = html


let html = "";
let floor = 10;
let 공백 = "&nbsp&nbsp;"
// 위쪽 피라미드
for (let i = 1; i <= floor; i++) {
    // 공백
    for (let j = 1; j <= floor - i; j++) {
        html += 공백;
    }
    // 별
    for (let j = 1; j <= i * 2 - 1; j++) {
        html += "*";
    }
    html += "<br>";
}

// 아래쪽 역피라미드
for (let i = floor - 1; i >= 1; i--) {
    // 공백
    for (let j = 1; j <= floor - i; j++) {
        html += 공백;
    }
    // 별
    for (let j = 1; j <= i * 2 - 1; j++) {
        html += "*";
    }
    html += "<br>";
}

document.querySelector("h3").innerHTML = html;