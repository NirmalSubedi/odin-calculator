const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

console.log(add(8,6));
console.log(subtract(8,6));
console.log(multiply(8,6));
console.log(divide(8,6));

let firstNum, 
operator, 
secondNum;

const operate = function (firstNum, operator, secondNum) {
    operator === '+' ? add(firstNum, secondNum) :
    operator === '-' ? subtract(firstNum, secondNum) :
    operator === '*' ? multiply(firstNum, secondNum) :
    operator === '/' ? divide(firstNum, secondNum) : console.log('error');
}