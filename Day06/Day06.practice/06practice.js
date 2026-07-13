// *이 10개이며, 삼각형 그리고 역삼각형 출력. 


let html=" "

for(let i = 0; i<9; i++){
    for(let j=0; j<= i ; j++){
        html +=" ★ "
    }
    html +="</br>"
}

for(let i = 0; i <= 9; i++) {
    for(let j = 9; j >= i; j--) {
        html += " ★ ";
    }
    html += "</br>";
}
document.querySelector("h3").innerHTML = html
