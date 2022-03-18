// Launch Controls
const hideContent = document.querySelectorAll(".hide-content")
const startGameButton = document.querySelector("#button-start-game")
const launchPageContainer = document.querySelector(".launch-page-container")
const launchGamePlay = document.querySelector("#gameplay-styling");

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

// Factory function
let rounds = 0
const takeTurn = (button) => {

    if (rounds % 2 === 0) {
        button.textContent = "X"
        button.value = 1
        button.style = "background-color: rgba(51, 170, 51, .2);"
    } else {
        button.textContent = "O"
        button.value = -1
        button.style = "background-color: rgba(242, 0, 0, .2);"
    };
    rounds = ++rounds
    console.log(button.textContent, button.value)
    return {/* x or o, trigger for game over, trigger for winner */}
};

const gamePieces = document.querySelectorAll(".game-pieces");

for (let i = 0; i < gamePieces.length; i++) {
    gamePieces[i].addEventListener("click", () => {
        gamePieces[i].disabled = "true"
        takeTurn(gamePieces[i])
    });
};