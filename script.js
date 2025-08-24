function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
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

const display = document.querySelector(".display");
let displayValue;
let digits = document.querySelectorAll(".calculator > button");
digits = [...digits];

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", (event) => {
        if (display.textContent === '0') display.textContent = '';
        display.textContent += event.target.textContent;
        if (digits[i].textContent === "C") {
            display.textContent = '0'};
    });
}