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
    secondNum,
    result;

const operate = function (firstNum, operator, secondNum) {
    switch (operator) {
        case 'add':
            result = add(firstNum, secondNum);
            break;
        case 'subtract':
            result = subtract(firstNum, secondNum);
            break;
        case 'multiply':
            result = multiply(firstNum, secondNum);
            break;
        case 'divide':
            result = divide(firstNum, secondNum);
            break;
        default:
            'error'
            break;
    }
    return Math.round(result * 100000000) / 100000000;

}

const display = document.querySelector(".display");
let displayValue = '';
let digits = document.querySelectorAll(".calculator > button");
digits = [...digits];
let classes = [];

for (let i = 0; i < digits.length; i++) {

    classes.push(digits[i].getAttribute("class"));

    digits[i].addEventListener("click", (event) => {

        // Calculates value when inputting 2nd operator
        if ((classes[i] === 'add' || classes[i] === 'subtract' || classes[i] === 'multiply' || classes[i] === 'divide')
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
            document.querySelector('.decimal').toggleAttribute("disabled", false);
            display.value = displayValue;
        }
        else if (classes[i] === 'backspace') {
            displayValue = display.value.slice(0, -1);
            display.value = displayValue;
        }
        else if (classes[i] === 'equal') {
            secondNum = Number(displayValue);
            displayValue = operate(firstNum, operator, secondNum);
            display.value = displayValue;
            displayValue = '';
            firstNum = 0;
        }
        else {
            if (displayValue.split(".").length - 1 === 1) {
                document.querySelector('.decimal').toggleAttribute("disabled", true);
            } else {
                document.querySelector('.decimal').toggleAttribute("disabled", false);
            }
            if (display.value === '0' && classes[i] !== 'decimal') {
                displayValue = '';
            } else {
            }
            displayValue += event.target.textContent;
            display.value = displayValue;
        }
        
        // Error handling
        if (secondNum === 0 && operator === 'divide') display.value = 'Error :('; // Number divided by zero
        if (classes[i] === 'equal' && typeof firstNum !== 'number') display.value = 'Enter a digit'; // Calculating with no number

    })
};