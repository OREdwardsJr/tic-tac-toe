// Launch Controls
const hideContent = document.querySelectorAll(".hide-content")
const startGameButton = document.querySelector("#button-start-game")
const launchPageContainer = document.querySelector(".launch-page-container")
const launchGamePlay = document.querySelector("#gameplay-styling");
const newGameButton = document.querySelector(".button-new-game");
let player1Score = document.querySelector("#player1-score");
let player2Score = document.querySelector("#player2-score");
let player1Name = document.querySelector("#player1-name");
let player2Name = document.querySelector("#player2-name");
let rounds = 0
const gamePieces = document.querySelectorAll(".game-pieces");
let methods = new Array(0, 0, 0, 0, 0, 0, 0, 0);

// Start Game Page
for (let i = 0; i < hideContent.length; i++) {
    startGameButton.addEventListener("click", () => {
        hideContent[i].style = "visibility: hidden;";
    });
};

startGameButton.addEventListener("click", () => {
    launchPageContainer.style = "width: 80%";
    launchGamePlay.style = "visibility: normal; position: absolute; height: inherit";
});

//Play Game
//Factory function
const takeTurn = (button, buttonID) => {
    button.disabled = "true";
    if (rounds % 2 === 0) {
        button.textContent = "X"
        button.value = 1
        button.style = "background-color: rgba(51, 170, 51, .2);"
        player2Name.style = "border-bottom: 7px dashed var(--launch-primary-color)"
        player1Name.style = "border-bottom: 0px"
    } else {
        button.textContent = "O"
        button.value = -1
        button.style = "background-color: rgba(242, 0, 0, .2);"
        player1Name.style = "border-bottom: 7px dashed var(--launch-primary-color)"
        player2Name.style = "border-bottom: 0px"
    };

    switch (buttonID) {
        case 0:
            methods[0] += parseInt(button.value);
            methods[3] += parseInt(button.value);
            methods[6] += parseInt(button.value);
            break;
        case 1:
            methods[0] += parseInt(button.value);
            methods[4] += parseInt(button.value);
            break;
        case 2:
            methods[0] += parseInt(button.value);
            methods[3] += parseInt(button.value);
            methods[5] += parseInt(button.value);
            break;
        case 3:
            methods[1] += parseInt(button.value);
            methods[3] += parseInt(button.value);
            break;
        case 4:
            methods[1] += parseInt(button.value);
            methods[4] += parseInt(button.value);
            methods[6] += parseInt(button.value);
            methods[7] += parseInt(button.value);
            break;
        case 5:
            methods[1] += parseInt(button.value);
            methods[5] += parseInt(button.value);
            break;
        case 6:
            methods[2] += parseInt(button.value);
            methods[3] += parseInt(button.value);
            methods[7] += parseInt(button.value);
            break;
        case 7:
            methods[2] += parseInt(button.value);
            methods[4] += parseInt(button.value);
            break;
        case 8:
            methods[2] += parseInt(button.value);
            methods[5] += parseInt(button.value);
            methods[6] += parseInt(button.value);
            break;
    };
    ++rounds
};

function checkGame () {
    for (let j = 0; j < methods.length; j++) {
        console.log(methods[j])
        if (methods[j] === 3) {
            alert("Player 1 Wins!");
            resetGame();
            player1Score.textContent = parseInt(player1Score.textContent) + 1;
        } else if (methods[j] === -3) {
            alert("Player 2 Wins");
            resetGame();
            player2Score.textContent = parseInt(player2Score.textContent) + 1;
        } else if (rounds == 9) { 
            alert("Tie game!");
            resetGame();
            break;
        };
    };
};

for (let i = 0; i < gamePieces.length; i++) {
    gamePieces[i].addEventListener("click", () => {
        gamePieces[i].disabled = "true"
        takeTurn(gamePieces[i], i)
        checkGame()
    });
};

function resetGame () {
    for (let k = 0; k < gamePieces.length; k++) {
        gamePieces[k].value = 0;
        gamePieces[k].textContent = "";
        gamePieces[k].style = "background-color: var(--launch-secondary-color";
        gamePieces[k].disabled = false;
    };
    for (let l = 0; l < methods.length; l++) {
        methods[l] = 0;
    };
    rounds = 0;
};

newGameButton.addEventListener("click", () => resetGame());