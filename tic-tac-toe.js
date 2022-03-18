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