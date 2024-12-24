
const container = document.querySelector('.container');
const result = container.querySelector('.result');
const numbers = container.querySelector('.numbers');
const number = numbers.querySelectorAll('.number');
const operators = container.querySelector('.operators');
const operator = operators.querySelectorAll('.operator');

let operatorsOf = ['+','-','/','*'];

let firstOperand = null;
let lastOperand = null;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function (e) {
        result.textContent += e.target.dataset.number;


        firstOperand = result.textContent;
        if (result.textContent === '+' 
            || result.textContent === '-'
            || result.textContent === '/'
            || result.textContent === '*') {
            
        }
    })
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', (e) => {
        const operation = e.target.dataset.key;

        if (operation === '+') {
            add(firstOperand, lastOperand);
        } else if (operation === '-') {
            subtract(firstOperand, lastOperand);
        } else if (operation === '/') {
            divide(firstOperand, lastOperand);
        } else if (operation === '*') {
            multiply(firstOperand, lastOperand);
        } else {
            
        }
    })
}

function operate (a, op, b) {
    return "a op b";
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

