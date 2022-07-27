function division(dividend: number, divisor: number){
    return dividend / divisor
}

function multiplication(mOne: number, mTwo: number){
    return mOne * mTwo
}

function subtract(sOne: number, sTwo: number){
    return sOne - sTwo
}

function sum(sumOne: number, sumTwo: number){
    return sumOne + sumTwo
}

function operate(operator: string, num1: number, num2: number){
    if(operator == 'sum'){
        sum(num1, num2)
    }
    if(operator == 'subtract'){
        subtract(num1, num2)
    }
    if(operator == 'multiplication'){
        multiplication(num1, num2)
    }
    else{
        division(num1, num2)
    }
}

export {division, multiplication, subtract, sum, operate} 