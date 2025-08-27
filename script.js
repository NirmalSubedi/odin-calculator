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
    return Math.round((a / b) * 10000) / 10000;
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
    
        // Calculates value when inputting 2nd operator
        if ((classes[i] === 'add' || classes[i] === 'subtract' || classes[i] === 'multiply' || classes[i] === 'divide' ) 
            && typeof firstNum === 'number') {
        if (!displayValue) {
        } else {
            secondNum = Number(display.value);
            displayValue = operate(firstNum, operator, secondNum);
            display.value = displayValue;
            firstNum = Number(displayValue);
            operator = classes[i];
            displayValue = '';
        }
        }

        if (classes[i] === 'add' || classes[i] === 'subtract' || classes[i] === 'multiply' || classes[i] === 'divide') {
            displayValue = display.value; 
            firstNum = Number(displayValue); 
            operator = classes[i]; 
            displayValue = ''; 
        } 
        else if (classes[i] === 'clear') {
            displayValue = '0'; 
            firstNum = '';
            secondNum = '';
            operator = '';
            display.value = displayValue;
        } 
        else if (classes[i] === "equal") {
            secondNum = Number(displayValue);
            displayValue = operate(firstNum, operator, secondNum);
            display.value = displayValue;
            displayValue = '';
            firstNum = 0;
        }
        else {
            if (display.value === '0') {
                displayValue = '';
            } 
            displayValue += event.target.textContent;
            display.value = displayValue;
        }
        
        // Error handling
        if (secondNum === 0 && operator === 'divide') display.value = 'Error :('; // Number divided by zero
        if (classes[i] === 'equal' && typeof firstNum !== 'number') display.value = 'Enter a digit'; // Calculating with no number

    })
};