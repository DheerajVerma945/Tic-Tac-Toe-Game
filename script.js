let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new")

//Forking here

const winnningPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [, 6, 7, 8]
];
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0) {
            box.style.color = "blue";
            box.innerHTML = "0";
            turn0 = false;
        }
        else {
            box.style.color = "red";
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        
    })
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
let showWinner = (winner) => {
    msg.classList.remove("hide");
    
    msg.innerHTML = winner === "Draw" ? "Ohh! It's a Draw." : "Congratulations, Winner is " + winner + " !";
   
    disableBoxes();
}
const isDraw = ()=>{
    for(let box of boxes){
        if(box.innerText == "" ){
                return false;
        }
    }
    if(!checkWinner){
        showWinner("Draw");
        return true;
    }
    return false;
}

const checkWinner = () => {
    for (let pattern of winnningPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position3 === position2) {

                showWinner(position1);
                return true;
            }
        }
    }
    return false;
}
const ResetGame = () => {
    turn0 = true;
    enableBoxes();
    msg.classList.add("hide");

}
reset.addEventListener("click", ResetGame);
newGame.addEventListener("click", ResetGame);
