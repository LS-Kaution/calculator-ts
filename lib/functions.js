export function division(dividend, divisor) {
    return dividend / divisor
}

export function multiplication(mOne, mTwo) {
    return mOne * mTwo
}

export function subtract(sOne, sTwo) {
    return sOne - sTwo
}

export function sum(sumOne, sumTwo) {
    return sumOne + sumTwo
}

export function operate(operator, numOne, numTwo) {
    if (operator == '+') {
        return sum(numOne, numTwo)
    }
    if (operator == '-') {
        return subtract(numOne, numTwo)
    }
    if (operator == 'x') {
        return multiplication(numOne, numTwo)
    }
    if (operator == '/') {
        return division(numOne, numTwo)
    }
}