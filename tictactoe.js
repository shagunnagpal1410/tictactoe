let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-btn");
let winner=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turn0=true;
const winpatterns= [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.style.color="#090040";
            box.innerText = "O";
            turn0=false;
        }
        else {
            box.style.color="#471396";
            box.innerText= "X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableall = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
}
const enableall = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner= (check) => {
    msg.innerText= `Congratulation, Winner is ${check}`;
    msgcontainer.classList.remove("hide");
}
const tie= () => {
    msg.innerText= `It is a Tie`;
    msgcontainer.classList.remove("hide");
}
const checkwinner=() => {
    for (let pattern of winpatterns) {
        if (boxes[pattern[0]].innerText==="X" && boxes[pattern[1]].innerText==="X" && boxes[pattern[2]].innerText==="X") {
            showwinner(boxes[pattern[0]].innerText);
            disableall();
            break;
        }
        else if (boxes[pattern[0]].innerText==="O" && boxes[pattern[1]].innerText==="O" && boxes[pattern[2]].innerText==="O") {
            showwinner(boxes[pattern[0]].innerText);
            disableall();
            break;
        }
    }
};
const resetgame =() => {
    turn0=true;
    enableall();
    msgcontainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);