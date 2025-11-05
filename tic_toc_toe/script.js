let boxs = document.querySelectorAll('.box');
let reset = document.querySelector('.reset_game');
let newgame = document.querySelector('.new_game');
let h1 = document.querySelector('h1');
let result = document.createElement('h3');
h1.after(result);
let turn0 = true;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
newgame.addEventListener('click', () => {
    turn0 = true;
    a = 0;
    for (let y of boxs) {
        if (y.disabled === true && y.innerText==="") {
            a = 1;
        }
    }
    if (a === 1) {
        for (let x of boxs) {
            x.innerText = "";
            x.disabled = false;
            result.innerText = "";
            x.style.background = "rgb(216, 211, 153)";
        }
    }
    else{
        result.innerText='Game is not complete yet...\nby the way you can reset it!'
    }
});
reset.addEventListener('click', () => {
    turn0 = true;
    a = 0;
    for (let y of boxs) {
        if (y.disabled === true && y.innerText==="") {
            a = 1;
        }
    }
    if (a === 0) {
        for (let x of boxs) {
            x.innerText = "";
            x.disabled = false;
            result.innerText = "";
            x.style.background = "rgb(216, 211, 153)";
        }
    }
    else{
        result.innerText='Game is completed now...\nby the way you can go for new game!'
    }
});
boxs.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;

        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        box.style.background = "rgb(232, 108, 108)";
        check();
    });
});

const check = () => {
    for (let pattern of winPatterns) {
        let position1 = boxs[pattern[0]].innerText;
        let position2 = boxs[pattern[1]].innerText;
        let position3 = boxs[pattern[2]].innerText;
        if (position1 != "" && position1 != "" && position1 != "") {
            if (position1 === position2 && position2 === position3) {
                result.innerText = 'the winner is: ' + position1;
                for (let box of boxs) {
                    box.disabled = true;
                }
            }
        }
    }
}

