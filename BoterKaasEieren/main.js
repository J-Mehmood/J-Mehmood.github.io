let xo = document.querySelector(".XO")
let boxes = documenht.querySelectorAll(".box");
let restartBtn = document.querySelector(".restart")

const box = Array.from(document.getElementById("box"));


restartBtn.addEventListener("click", (e)=>{
    location.reload();
})
const xtext = "X";
const otext = "O";
let currentplayer = xtext;
let space = Array(9).fill(null);

function playerTurn(boxes){
    if(currentplayer === xtext && boxes.innerHTML == ""){
        boxes.innerHTML = "X";
        XO.innerHTML = "O";
        currentplayer = "O";
    }else if(currentplayer === xtext && boxes.innerHTML == ""){
        boxes.innerHTML = "X";
        XO.innerHTML = "O";
        currentplayer = "O";
    }}

    

const startGame = () => {
    box.forEach(box => box.addEventListener('clicked', boxClicked))
}

const b1 = document.querySelector("div.content1").textContent
const b2 = document.querySelector("div.content2").textContent
const b3 = document.querySelector("div.content3").textContent
const b4 = document.querySelector("div.content4").textContent
const b5 = document.querySelector("div.content5").textContent
const b6 = document.querySelector("div.content6").textContent
const b7 = document.querySelector("div.content7").textContent
const b8 = document.querySelector("div.content8").textContent
const b9 = document.querySelector("div.content9").textContent




if(b1 == "X" && b2 == "X" && b3 =="X"){
    showMessage("X heeft gewonnen");
}else if(b1 == "O" && b2 == "O" && b3 =="O"){
    showMessage("O heeft gewonnen");
}else if(b1){
    showMessage("Het is gelijkspel");
}


function showMessage(message){
    console.log(message);
}