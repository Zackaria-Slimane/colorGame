import {randomValue, randomRanges} from "./utility.js"
const Color = require("color")

//document selectors
const colorTitle = document.querySelector(".color-string")
const colorGrid = document.querySelector(".color-grid")

// default declaration of random color
export const defaultColor = randomColor()
export const hslColor = Color(defaultColor).hsl().string()

export const randomColorsArray = generateRandomColors(6)
export function pickedColor() {
	return Math.floor(Math.random() * randomColorsArray.length)
}
//title rendering
export const shownColor = randomColorsArray[pickedColor()]
colorTitle.innerHTML = shownColor

//functions

export function colorFormatter(colorInput, format) {
	let color = colorInput ?? defaultColor
	if (format === "rgb" || " ") return Color(color).rgb().string()
	if (format === "hex") return Color(color).hex()
	if (format === "hsl") return Color(color).hsl().string()
}

function generateRandomColors(number) {
	let colorsArray = []
	for (let i = 0; i < number; i++) {
		colorsArray.push(randomColor())
	}
	return colorsArray
}

export function populateColorsGrid(setting) {
	colorGrid.innerHTML = ""
	console.log(randomColorsArray)

	for (let i = 0; i < randomColorsArray.length; i++) {
		let button = document.createElement("button")
		let correctIndex = Math.floor(randomValue(5))
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
	return colorGrid
}

export function similarColors(input, setting) {
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

function randomColor() {
	let r = randomValue(256)
	let g = randomValue(256)
	let b = randomValue(256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

const easyRange = randomRanges(0, 80)
const mediumRange = randomRanges(0, 50)
const hardRange = randomRanges(0, 30)
