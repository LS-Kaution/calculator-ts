"use strict";
exports.__esModule = true;
exports.operate = exports.sum = exports.subtract = exports.multiplication = exports.division = void 0;
function division(dividend, divisor) {
    return dividend / divisor;
}
exports.division = division;
function multiplication(mOne, mTwo) {
    return mOne * mTwo;
}
exports.multiplication = multiplication;
function subtract(sOne, sTwo) {
    return sOne - sTwo;
}
exports.subtract = subtract;
function sum(sumOne, sumTwo) {
    return sumOne + sumTwo;
}
exports.sum = sum;
function operate(operator, num1, num2) {
    if (operator == 'sum') {
        sum(num1, num2);
    }
    if (operator == 'subtract') {
        subtract(num1, num2);
    }
    if (operator == 'multiplication') {
        multiplication(num1, num2);
    }
    else {
        division(num1, num2);
    }
}
exports.operate = operate;
