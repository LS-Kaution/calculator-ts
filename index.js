import { division, multiplication, operate, subtract, sum } from "./lib/functions.js"

const buttons = [
	document.getElementById('one'),
	document.getElementById('two'),
	document.getElementById('three'),
	document.getElementById('four'),
	document.getElementById('five'),
	document.getElementById('six'),
	document.getElementById('seven'),
	document.getElementById('eight'),
	document.getElementById('nine'),
	document.getElementById('zero'),
	document.getElementById('decimal-point'),
	document.getElementById('division'),
	document.getElementById('multiplication'),
	document.getElementById('subtract'),
	document.getElementById('sum'),
]

let result = document.getElementById('result')

for (const button of buttons) {
	button?.addEventListener("click", () => {
		result.value = result.value + button.value;
	});
}

const equalButton = document.getElementById("equal")

equalButton?.addEventListener("click", () => {
	const operator = getOperator(result.value);
	const [numOne, numTwo] = result.value.split(operator);

	let results = operate(operator, numOne, numTwo);
	result.value = results;
});

function getOperator(string) {
	const operators = ['+', '-', 'x', '/'];
	const stringToArr = string.split('');

	for (const char of stringToArr) {
		if (operators.includes(char)) {
			return char;
		}
	}
}

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetGame)

function resetGame() {
	location.reload()
}