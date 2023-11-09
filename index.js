
let firstNumber;
let operator;
let secondNumber;
let displayValue = '';

// All math functions
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return substract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

// Append numbers functions
function appendNumber(number) {
    displayValue += number;
}
const number0 = document.getElementById('digit-0');
number0.addEventListener('click', () => {
    appendNumber('0');
    updateDisplay();
})

const number1 = document.getElementById('digit-1');
number1.addEventListener('click', () => {
    appendNumber('1');
    updateDisplay();
})

const number2 = document.getElementById('digit-2');
number2.addEventListener('click', () => {
    appendNumber('2');
    updateDisplay();
})

const number3 = document.getElementById('digit-3');
number3.addEventListener('click', () => {
    appendNumber('3');
    updateDisplay();
})

const number4 = document.getElementById('digit-4');
number4.addEventListener('click', () => {
    appendNumber('4');
    updateDisplay();
})

const number5 = document.getElementById('digit-5');
number5.addEventListener('click', () => {
    appendNumber('5');
    updateDisplay();
})

const number6 = document.getElementById('digit-6');
number6.addEventListener('click', () => {
    appendNumber('6');
    updateDisplay();
})

const number7 = document.getElementById('digit-7');
number7.addEventListener('click', () => {
    appendNumber('07');
    updateDisplay();
})

const number8 = document.getElementById('digit-8');
number8.addEventListener('click', () => {
    appendNumber('8');
    updateDisplay();
})

const number9 = document.getElementById('digit-9');
number9.addEventListener('click', () => {
    appendNumber('9');
    updateDisplay();
})

function updateDisplay(){
    const displayElement = document.getElementById('screen');
    displayElement.textContent = displayValue;
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearDisplay)
