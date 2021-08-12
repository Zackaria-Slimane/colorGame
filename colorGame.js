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
export function randomColor() {
	let r = randomValue(256)
	let g = randomValue(256)
	let b = randomValue(256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

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

export function populateColorsGrid() {
	colorGrid.innerHTML = ""
	console.log(randomColorsArray)

	// return gridArray.map((index) => {
	// 	if (index === 2) {
	// 		button.style.backgroundColor = Color(shownColor).rgb().string()
	// 		return button
	// 	} else {
	// 		button.style.backgroundColor = similarColors(inputColor, "easy")
	// 		return button
	// 	}
	// })

	for (let i = 0; i < randomColorsArray.length; i++) {
		let button = document.createElement("button")
		let correctIndex = randomValue(4)
		if (i === correctIndex) {
			button.style.backgroundColor = shownColor
			button.classList.add("correct")
			console.log(i, "correct color")
		} else {
			console.log(i, "wrong color")
			button.style.backgroundColor = similarColors(Color(shownColor), "easy")
		}
		// buttonsArray.push(button)
		colorGrid.appendChild(button)
	}
	console.table(colorGrid.innerHTML)
	return colorGrid
}

export function similarColors(input, setting) {
	if (setting === "easy") {
		let r = input.color[0] + randomValue(80)
		let g = input.color[1] + randomValue(80)
		let b = input.color[2] + randomValue(80)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
	if (setting === "medium") {
		let r = input.color[0] + randomValue(50)
		let g = input.color[1] + randomValue(50)
		let b = input.color[2] + randomValue(50)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
	if (setting === "hard") {
		let r = input.color[0] + randomValue(30)
		let g = input.color[1] + randomValue(30)
		let b = input.color[2] + randomValue(30)
		return "rgb(" + r + ", " + g + ", " + b + ")"
	}
}
