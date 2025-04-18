alert("Do you want to start...");
let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#Reset");
let newBtn = document.querySelector("#New");
let resulting = document.querySelector(".result");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const newgame = () => {
    turnO = true;
    anableboxaccess();
    resulting.classList.add("hide");
};

boxes.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO) {
            button.innerText = "O";
            turnO = false;
        }

        else {
            button.innerText = "X";
            turnO = true;
        }

        button.disabled = true;
        checkwinner(); // function call
    });
});

const showwinner = (winner) => {
    msg.innerText = `WINNER : Player ${winner}`;
    resulting.classList.remove("hide");
};

const ending = () => {
    for (let button of boxes) {
        button.disabled = true;
    }
};

const anableboxaccess = () => {
    for (let button of boxes) {
        button.disabled = false;
        button.innerText = "";
    }
};

const checkwinner = () => {      // function defination 
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("WINNER", pos1val);
                ending();
                // button.disabled = true;
                showwinner(pos1val);
            }
        }
    }
};

newBtn.addEventListener("click", newgame);
resetBtn.addEventListener("click", newgame);