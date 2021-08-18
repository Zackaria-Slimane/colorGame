import {randomValue, randomRanges} from "./utility.js"
const Color = require("color")

//document selectors
const colorTitle = document.querySelector(".color-string")
const colorGrid = document.querySelector(".color-grid")
const formatSetting = document.querySelector(".radio-group-format")
const difficultySetting = document.querySelector(".radio-group-difficulty")
const formatValue = formatSetting.querySelector("input:checked").value
const difficultyValue = difficultySetting.querySelector("input:checked").value
const resultText = document.querySelector(".results-text")

//title rendering
const randomColorsArray = generateRandomColors(6)
function pickedColor() {
	return Math.floor(Math.random() * randomColorsArray.length)
}
function renderShownColor() {
	return randomColorsArray[pickedColor()]
}
const shownColor = randerShownColor()
console.log(shownColor)
colorTitle.innerHTML = shownColor

//facade functions

export function initGame() {
	console.log(formatValue, difficultyValue)

	colorFormatter(shownColor, formatValue)
	populateColorsGrid(difficultyValue)
	// checkWinLoss()
}

export function colorFormatter(colorInput, format) {
	let color = colorInput ?? shownColor
	if (format === rgb || " ") return Color(color).rgb().string()
	if (format === hex) return Color(color).hex()
	if (format === hsl) return Color(color).hsl().string()
}

export function populateColorsGrid(setting) {
	resultText.innerHTML = ""
	colorGrid.innerHTML = ""

	let correctIndex = randomValue(5)
	console.log(correctIndex)

	for (let i = 0; i < randomColorsArray.length; i++) {
		let button = document.createElement("button")

		if (i === correctIndex) {
			button.style.backgroundColor = shownColor
			button.classList.add("correct")
			console.log(i, "correct color")
		} else {
			console.log(i, "wrong color")
			button.style.backgroundColor = similarColors(Color(shownColor), setting)
			button.classList.remove("correct")
		}
		// buttonsArray.push(button)
		colorGrid.appendChild(button)
	}
	console.log(colorGrid.childElementCount)
	return colorGrid
}

export function checkWinLoss() {
	const colorButton = document.querySelectorAll(".colorButton")
	for (let i = 0; i < colorGrid.childElementCount; i++) {
		colorButton[i].addEventListener("click", function () {
			let clickedColor = this.style.backgroundColor

			if (clickedColor === shownColor) {
				// write win statement here
				resultText.innerHTML = " CORRECT, You WON !"
				// colorButton.addAttribute(disabled)
			} else {
				resultText.innerHTML = " Wrong guess Sorry ! Please try again"
				colorButton.classList.add("wrong")
				colorButton.addAttribute(disabled)
				// loss statement , retry option
			}
		})
	}
}

//secondary functions, colorgame logic related
function similarColors(input, setting) {
	if (setting === easy) {
		let r = Math.random() * (input.color[0] + easyRange)
		let g = Math.random() * (input.color[1] + easyRange)
		let b = Math.random() * (input.color[2] + easyRange)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
	if (setting === medium) {
		let r = Math.random() * (input.color[0] + mediumRange)
		let g = Math.random() * (input.color[1] + mediumRange)
		let b = Math.random() * (input.color[2] + mediumRange)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
	if (setting === hard) {
		let r = Math.random() * (input.color[0] + hardRange)
		let g = Math.random() * (input.color[1] + hardRange)
		let b = Math.random() * (input.color[2] + hardRange)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
}

//basic color generation
function generateRandomColors(number) {
	let colorsArray = []
	for (let i = 0; i < number; i++) {
		colorsArray.push(randomColor())
	}
	return colorsArray
}

function randomColor() {
	let r = randomValue(256)
	let g = randomValue(256)
	let b = randomValue(256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
//ranges to determine how similar the adjacent colors are
const easyRange = randomRanges(0, 80)
const mediumRange = randomRanges(0, 50)
const hardRange = randomRanges(0, 30)
