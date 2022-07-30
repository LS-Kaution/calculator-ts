import { division, multiplication, operate, subtract, sum } from "./lib/functions"

let buttonOne = document.getElementById('one')
buttonOne.addEventListener("click", () => screenNumber(buttonOne.value))

let buttonTwo = document.getElementById('two')
buttonTwo.addEventListener("click", () => screenNumber(buttonTwo.value))

let buttonThree = document.getElementById('three')
buttonThree.addEventListener("click", () => screenNumber(buttonThree.value))

let buttonFour = document.getElementById('four')
buttonFour.addEventListener("click", () => screenNumber(buttonFour.value))

let buttonFive = document.getElementById('five')
buttonFive.addEventListener("click", () => screenNumber(buttonFive.value))

let buttonSix = document.getElementById('six')
buttonSix.addEventListener("click", () => screenNumber(buttonSix.value))

let buttonSeven = document.getElementById('seven')
buttonSeven.addEventListener("click", () => screenNumber(buttonSeven.value))

let buttonEight = document.getElementById('eight')
buttonEight.addEventListener("click", () => screenNumber(buttonEight.value))

let buttonNine = document.getElementById('nine')
buttonNine.addEventListener("click", () => screenNumber(buttonNine.value))

let divisionButton = document.getElementById('division')
divisionButton.addEventListener("click", division)

let multiplicationButton = document.getElementById('multiplication')
multiplicationButton.addEventListener("click", multiplication)

let subtractButton = document.getElementById('subtract')
subtractButton.addEventListener("click", subtract)

let sumButton = document.getElementById('sum')
sumButton.addEventListener("click", sum)

let result = document.getElementById('result')
result.addEventListener("click", operate) 
  
function screenNumber(val: string) {
	result.innerHTML = val
}

// TEST
console.log(division(30, 5))
console.log(multiplication(12, 12))
console.log(subtract(650, 550))
console.log(sum(450, 650))