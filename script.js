import {initGame, populateColorsGrid} from "./colorGame.js"

const nextColorButton = document.querySelector(".nextColor-btn")

// initGame()

nextColorButton.addEventListener("click", () => {
	initGame()
})

populateColorsGrid(easy)
