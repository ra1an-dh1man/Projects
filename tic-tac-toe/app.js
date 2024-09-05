let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector(".reset-btn");
let newgameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;


let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>
    {
        turnO = true;
        boxEnable();
        msgContainer.classList.add("hide")
    }


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO)
            {
            box.innerHTML = "O"
            turnO = false;
            }
        else
        {
            box.innerHTML = "X" 
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const boxDisable = () => 
    {
        for(let box of boxes)
            {
                box.disabled = true;
            }
    }

    const boxEnable = () => 
        {
            for(let box of boxes)
                {
                    box.disabled = false;
                    box.innerHTML = ""
                }
        }

const showWinner = (winner) => 
    {
        msg.innerHTML = `Congratulation! Winner is ${winner}`;
        msgContainer.classList.remove("hide")
        boxDisable();
    }

const checkWinner = () => {
    for(pattern of winningPattern)
        {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "")
                {
                    if(pos1Val == pos2Val && pos2Val == pos3Val)
                        {
                            showWinner(pos1Val);
                        }
                }
        }
}


newgameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);