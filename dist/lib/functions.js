function division(dividend, divisor) {
    return dividend / divisor;
}
function multiplication(mOne, mTwo) {
    return mOne * mTwo;
}
function subtract(sOne, sTwo) {
    return sOne - sTwo;
}
function sum(sumOne, sumTwo) {
    return sumOne + sumTwo;
}
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
export { division, multiplication, subtract, sum, operate };
