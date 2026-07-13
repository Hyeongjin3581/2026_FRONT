// *이 10개이며, 삼각형 그리고 역삼각형 출력. 

// let a = []


// let html = " ";

// for(let i = 0; i< 10; i++) {
//     for(let j=0 ; j <=i; j++){
//         html+= ' ★ '
//     }
//     html += '</br>'
// }

// for(let i = 9; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         html += " ★ ";
//     }
//     html += "<br>";
// }

// document.querySelector("h3").innerHTML = html;






































let html=" "

for(let i = 0; i<9; i++){
    for(let j=0; j<= i ; j++){
        html +=" ★ "
    }
    html +="</br>"
}

// for(let i = 10; i<= 1; i--) {
//     for(let j = 10; j <=i  ; j--){
//         html +=" ★ "
//     }
//     html +="</br>"
// }

for(let i = 0; i <= 9; i++) {
    for(let j = 9; j >= i; j--) {
        html += " ★ ";
    }
    html += "</br>";
}
document.querySelector("h3").innerHTML = html
