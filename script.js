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

let firstNum, 
    operator, 
    secondNum;

const operate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case 'add': 
            return add(firstNum, secondNum);
        case 'subtract': 
            return subtract(firstNum, secondNum);
        case 'multiply': 
            return multiply(firstNum, secondNum);
        case 'divide': 
            return divide(firstNum, secondNum);
        default: 
            'error'
            break;
        }
    }
    
    
const display = document.querySelector(".display");
let displayValue = '';
let digits = document.querySelectorAll(".calculator > button");
digits = [...digits];
let classes = [];
const operatorList = ['+', '-', 'x', '&divide;'];

for (let i = 0; i < digits.length; i++) {

    classes.push(digits[i].getAttribute("class"));

    digits[i].addEventListener("click", (event) => {

        
        if (classes[i] === 'add' || classes[i] === 'subtract' || classes[i] === 'multiply' || classes[i] === 'divide') {
            displayValue = display.value;
            firstNum = Number(displayValue);
            console.log(firstNum)
            operator = classes[i];
            console.log(operator);
            console.log(secondNum);
            console.log(displayValue);
            displayValue = '';
        } 
        else if (classes[i] === 'clear') {
            displayValue = '0';
            display.value = displayValue;
        } 
        else if (classes[i] === "equal") {
            secondNum = Number(displayValue);
            displayValue = operate(firstNum, operator, secondNum);
            display.value = displayValue;
        }
        else {
            if (display.value === '0') {
                displayValue = '';
            } 
            displayValue += event.target.textContent;
            display.value = displayValue;
        }
    })
};