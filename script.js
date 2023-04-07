const screen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    screen.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    };
};

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});



const operators = document.querySelectorAll(".operator");
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    };
    calculationOperator = operator;
    currentNumber = '0';
};
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator)
    });
});



const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    };
    currentNumber = result;
    calculationOperator = "";
};  


const equal = document.querySelector(".equal");
equal.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const clear = document.querySelector(".all-clear");
clear.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});



inputDec = (dot) => {
    if(currentNumber.includes('.')){
        return;
    } currentNumber += dot;
};
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
    inputDec(event.target.value);
    updateScreen(currentNumber);
});



const percentage = document.querySelector('.persen');
const calculatePercentage = () => {
    let result = parseFloat(currentNumber);
    updateScreen((result)/(100));
};
percentage.addEventListener('click', () => {
    calculatePercentage();
});

