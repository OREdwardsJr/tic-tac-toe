// Launch Controls
const hideContent = document.querySelectorAll(".hide-content")
const startGameButton = document.querySelector("#button-start-game")
const launchPageContainer = document.querySelector(".launch-page-container")
const launchGamePlay = document.querySelector("#gameplay-styling");
const newGameButton = document.querySelector(".button-new-game");
let player1score = document.querySelector("#player1-score");
let player2score = document.querySelector("#player2-score");

for (let i = 0; i < hideContent.length; i++) {
    startGameButton.addEventListener("click", () => {
        hideContent[i].style = "visibility: hidden;";
    
    });
};

startGameButton.addEventListener("click", () => {
    launchPageContainer.style = "width: 80%";
    launchGamePlay.style = "visibility: normal; position: absolute; height: inherit";
});

// Game Controls
// Note to self - add underline to indicate turns
let rounds = 0
const gamePieces = document.querySelectorAll(".game-pieces");

//Winning methods:
/* To the right of methods is a coordinate. If you consider the board to be a plot then
you can find the piece using the coordinates. The first row indicates x = 0. The first
column equals to y = 0. EG: (0,0) is the first square in the  first column on the first row. */

/* Legend
    Coordinate | Button ID{i} | Methods
    (0,0) | 0 | 00, 03, 06
    (0,1) | 1 | 00, 04
    (0,2) | 2 | 00, 03, 05
    (1,0) | 3 | 01, 03
    (1,1) | 4 | 01, 04, 06, 07
    (1,2) | 5 | 01, 05
    (2,0) | 6 | 02, 03, 07
    (2,1) | 7 | 02, 04
    (2,2) | 8 | 02, 05, 06


methods[0] = 0, // (0,0), (0,1), (0,2)
methods[1] = 0, // (1,0), (1, 1), (1,2)
methods[2] = 0, // (2,0), (2,1), (2,2)
methods[3] = 0, // (0,0), (1,0), (2,0)
methods[4] = 0, // (0,1), (1,1), (2,1)
methods[5] = 0, // (0,2), (1,2), (2,2)
methods[6] = 0, // (0,0), (1,1), (2,2)
methods[7] = 0; // (2,0), (1,1), (0,2)  
*/


let methods = new Array(0, 0, 0, 0, 0, 0, 0, 0);


// Factory function
const takeTurn = (button, buttonID) => {
    let player;
    button.disabled = "true";
    if (rounds % 2 === 0) {
        button.textContent = "X"
        button.value = 1
        button.style = "background-color: rgba(51, 170, 51, .2);"
        player = "Player 1"
    } else {
        button.textContent = "O"
        button.value = -1
        button.style = "background-color: rgba(242, 0, 0, .2);"
        player = "Player 2"
    };

    switch (buttonID) { //This executes as expected
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
            player1score.textContent = parseInt(player1score.textContent) + 1;
        } else if (methods[j] === -3) {
            alert("Player 2 Wins");
            resetGame();
            player2score.textContent = parseInt(player2score.textContent) + 1;
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
    }
    for (let l = 0; l < methods.length; l++) {
        methods[l] = 0;
    }
}

newGameButton.addEventListener("click", () => resetGame());