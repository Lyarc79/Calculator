
let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
let currentState = 'first';
let previousOperation = '';

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

function remainder(a, b){
    return a % b;
}

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () =>{
    appendDecimal();
    updateDisplay();
})
function appendDecimal(){
    if(currentState === 'first'){
        if(!firstNumber.includes('.')){
            firstNumber += '.';
            displayValue += '.';
        }
    } else {
        if(!secondNumber.includes('.')){
            secondNumber += '.';
            displayValue += '.';
        }
    }
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
    } else if (operator === '%'){
        return remainder(a, b);
    }
}

// Append numbers and operator functions
function appendNumber(number) {
    displayValue += number;
    if(currentState === 'first'){
        firstNumber += number;
    } else {
        secondNumber += number;
    }
    updateDisplay();
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
    appendNumber('7');
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

const plusOperator = document.getElementById('plus');
plusOperator.addEventListener('click', () =>{
    handleOperatorClick('+');
})

const minusOperator = document.getElementById('minus');
minusOperator.addEventListener('click', () =>{
    handleOperatorClick('-');
})

const multiplyOperator = document.getElementById('multiply');
multiplyOperator.addEventListener('click', () =>{
    handleOperatorClick('*');
})

const divideOperator = document.getElementById('divide');
divideOperator.addEventListener('click', () =>{
    handleOperatorClick('/');
})

const remainderOperator = document.getElementById('remainder');
remainderOperator.addEventListener('click', () =>{
    handleOperatorClick('%');
})

// Update, delete and clear screen
function updateDisplay(){
    const displayElement = document.getElementById('lower-screen');
    const upperDisplayElement = document.getElementById('upper-screen');

    if (currentState === 'first'){
        displayElement.textContent = firstNumber;
        upperDisplayElement.textContent = previousOperation;
    } else {
        displayElement.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        upperDisplayElement.textContent = previousOperation;
    } 
}

function clearDisplay(){
    console.log('Clear button clicked');
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayValue = '';
    currentState = 'first';
    previousOperation = '';
    updateDisplay();
}
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearDisplay);

function deleteLastNum(){
    if(currentState === 'first'){
        firstNumber = firstNumber.slice(0, -1);
        if(firstNumber === ''){
            firstNumber = '0';
        }
    } else {
        secondNumber = secondNumber.slice(0, -1);
    }
    updateDisplay();
}
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteLastNum);

// Storing the clicked operator
function handleOperatorClick(operatorClicked){
    operator = operatorClicked;
    currentState = 'second';
    updateDisplay();
}

// Calculator logic after clickin equals
const equals = document.getElementById('equals');
equals.addEventListener('click', () => {

    console.log('Before Calculation:', firstNumber, operator, secondNumber);

    if (firstNumber !== '' && operator !== '' && secondNumber !== ''){
        let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        
        console.log('Result:', result);

        displayValue = result.toString();
        previousOperation = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        currentState = 'first';
        updateDisplay();
    }
    console.log('After Calculation:', firstNumber, operator, secondNumber);
})