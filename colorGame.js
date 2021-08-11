import {randomValue, randomRanges} from "./utility.js"
const Color = require("color")

//document selectors
const colorTitle = document.querySelector(".color-string")
const colorGrid = document.querySelector(".color-grid")

// default declaration of random color
export const defaultColor = Color(randomColor()).rgb().string()
export const hslColor = Color(defaultColor).hsl().string()

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

export const randomColorsArray = generateRandomColors(6)

export function correctColor() {
	let resultArray = []
	let resultIndex = Math.floor(Math.random() * randomColorsArray.length)
	let result = randomColorsArray[resultIndex]
	resultArray.push(resultIndex, result)
	return resultArray
}
