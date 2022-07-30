"use strict";
exports.__esModule = true;
var functions_1 = require("./lib/functions");
var buttonOne = document.getElementById('one');
buttonOne.addEventListener("click", function () { return screenNumber(buttonOne.value); });
var buttonTwo = document.getElementById('two');
buttonTwo.addEventListener("click", function () { return screenNumber(buttonTwo.value); });
var buttonThree = document.getElementById('three');
buttonThree.addEventListener("click", function () { return screenNumber(buttonThree.value); });
var buttonFour = document.getElementById('four');
buttonFour.addEventListener("click", function () { return screenNumber(buttonFour.value); });
var buttonFive = document.getElementById('five');
buttonFive.addEventListener("click", function () { return screenNumber(buttonFive.value); });
var buttonSix = document.getElementById('six');
buttonSix.addEventListener("click", function () { return screenNumber(buttonSix.value); });
var buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener("click", function () { return screenNumber(buttonSeven.value); });
var buttonEight = document.getElementById('eight');
buttonEight.addEventListener("click", function () { return screenNumber(buttonEight.value); });
var buttonNine = document.getElementById('nine');
buttonNine.addEventListener("click", function () { return screenNumber(buttonNine.value); });
var divisionButton = document.getElementById('division');
divisionButton.addEventListener("click", functions_1.division);
var multiplicationButton = document.getElementById('multiplication');
multiplicationButton.addEventListener("click", functions_1.multiplication);
var subtractButton = document.getElementById('subtract');
subtractButton.addEventListener("click", functions_1.subtract);
var sumButton = document.getElementById('sum');
sumButton.addEventListener("click", functions_1.sum);
var result = document.getElementById('result');
result.addEventListener("click", functions_1.operate);
function screenNumber(val) {
    result.innerHTML = val;
}
// TEST
console.log((0, functions_1.division)(30, 5));
console.log((0, functions_1.multiplication)(12, 12));
console.log((0, functions_1.subtract)(650, 550));
console.log((0, functions_1.sum)(450, 650));
