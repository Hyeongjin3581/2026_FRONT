// *이 10개이며, 삼각형 그리고 역삼각형 출력. 

// let a = []



//일단, 삼각형을 출력하는 방법을 생각해보자. 



let html = " ";

for(let i = 0; i< 10; i++) {
    for(let j=0 ; j <=i; j++){
        html+= ' * '
    }
    html += '</br>'
}

for(let i = 9; i >= 1; i--){
    for(let j = 1; j <= i; j++){
        html += " * ";
    }
    html += "<br>";
}

document.querySelector("h3").innerHTML = html;





// let html = "";
// let floor = 11;
// let 공백 = "&nbsp;"
// // 위쪽 피라미드
// for (let i = 1; i <= floor; i++) {
//     // 공백
//     for (let j = 1; j <= floor - i; j++) {
//         html += 공백;
//     }
//     // 별
//     for (let j = 1; j <= i -1; j++) {
//         html += "*";
//     }
//     html += "<br>";
// }

// // 아래쪽 역피라미드
// for (let i = floor - 1; i >= 1; i--) {
//     // 공백
//     for (let j = 1; j <= floor - i; j++) {
//         html += 공백;
//     }
//     // 별
//     for (let j = 1; j <= i -1; j++) {
//         html += "*";
//     }
//     html += "<br>";
// }

// let html = " ";

// for(let i = 0; i< 10; i++) {
//     for(let j=0 ; j <=i; j++){
//         html+= ' * '
//     }
//     html += '</br>'
// }

// for(let i = 0; i< 10; i++) {
//     for(let j=1 ; 10 - j; j++){
//         html+= ' * '
//     }
//     html += '</br>'
// }
