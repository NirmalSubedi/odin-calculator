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

function getFirstNum() {
    displayValue = display.value;
    return firstNum = Number(displayValue);
}

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
            }
            displayValue += event.target.textContent;
            display.value = displayValue;
        }

        // Error handling
        if (secondNum === 0 && operator === 'divide') display.value = 'Error: Try something else ;)'; // Number divided by zero
        if (classes[i] === 'equal' && typeof firstNum !== 'number') display.value = 'Enter a digit'; // Calculating with no number

    })

};

display.focus();

display.addEventListener('keydown', (event) => {
    event.preventDefault();

    if ((event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/')
        && typeof firstNum === 'number') {
        if (!displayValue) {
        } else {
            secondNum = Number(display.value);
            displayValue = operate(firstNum, operator, secondNum);
            display.value = displayValue;
            firstNum = Number(displayValue);
            if (event.key === "+") operator = 'add';
            if (event.key === "-") operator = 'subtract';
            if (event.key === "*") operator = 'multiply';
            if (event.key === "/") operator = 'subtract';
            displayValue = '';
        }
    }


    if (event.key === '+') {
        getFirstNum();
        operator = 'add';
        displayValue = '';
    }
    else if (event.key === '-') {
        getFirstNum();
        operator = 'subtract';
        displayValue = '';
    }
    else if (event.key === '*') {
        getFirstNum();
        operator = 'multiply';
        displayValue = '';
    }
    else if (event.key === '/') {
        getFirstNum();
        operator = 'divide';
        displayValue = '';

    }
    else if (event.key === '.') {
        if (displayValue.split(".").length - 1 === 1) {
            document.querySelector('.decimal').toggleAttribute("disabled", true);
        }
        else if (display.value === '') {
            displayValue = `0${event.key}`;
            display.value = displayValue;
        }
        else {
            document.querySelector('.decimal').toggleAttribute("disabled", false);
            displayValue += event.key;
            display.value = displayValue;
        }
    }
    else if (event.key === "=" || event.key === "Enter") {
        secondNum = Number(displayValue);
        displayValue = operate(firstNum, operator, secondNum);
        display.value = displayValue;
        displayValue = '';
        firstNum = 0;
    }
    else if (event.key === 'Backspace') {
        if (display.value === '') {
            displayValue = '0';
            firstNum = '';
            secondNum = '';
            operator = '';
            document.querySelector('.decimal').toggleAttribute("disabled", false);
            display.value = displayValue;
        }
        displayValue = display.value.slice(0, -1);
        display.value = displayValue;
    }
    else if (event.key === '1' ||
        event.key === '2' ||
        event.key === '3' ||
        event.key === '4' ||
        event.key === '5' ||
        event.key === '6' ||
        event.key === '7' ||
        event.key === '8' ||
        event.key === '9' ||
        event.key === '0'
    ) {
        displayValue += event.key;
        display.value = displayValue;
    }
    return;
})