let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset');
let newGameButton = document.querySelector('.play-again');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    msgContainer.style.display = 'none';
    enableBoxes();
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = '';
    msgContainer.classList.add("hide");
    });
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '') {
            if (turn0) {
                box.innerText= 'X';
                turn0 = false;
            } else {
                box.innerText = 'O';
                turn0 = true;
            }
            box.disabled = true;
        }
        checkWinner();
    });
})

resetButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
}

const showWinner = (winner) => {
    msgContainer.style.display = 'block';
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

function checkWinner() {
    winPatterns.forEach((pattern) => {
        if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== '') {
            alert(`${boxes[pattern[0]].innerText} wins!`);
            showWinner(boxes[pattern[0]].innerText);
        }
    });
}

newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);