
const container = document.querySelector('.container');
const result = container.querySelector('.result');
const numbers = container.querySelector('.numbers');
const number = numbers.querySelectorAll('.number');
const operators = container.querySelector('.operators');
const operator = operators.querySelectorAll('.operator');
const equalBtn = document.getElementById('equal');

//Three variables to assign the values input by the user
let firstOperand = null;
let lastOperand = null;
let operation = null;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', (e) => {
        const numberOf = e.target.dataset.number;
        console.log(numberOf)
        if (numberOf === 'erase') {
            result.innerHTML = '';
        } else {
            result.innerHTML += numberOf;
        }

        firstOperand = result.textContent.slice(0, 2);
        lastOperand = result.textContent.slice(3, result.length);
        operation = result.textContent.slice(2, 3)
        console.log(firstOperand)     
        console.log(lastOperand)
        console.log(operation);

        equalBtn.addEventListener('click', () => {
            
            console.log("shit")
            result.textContent = operate(firstOperand, operation, lastOperand);;
        })
        
    })
}

const btnCalc = () => {

}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', (e) => {
        const operateOf = e.target.dataset.key;
        result.textContent += operateOf;
    })
}

//Functions to make the operations
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

function operate (n1, operator, n2) {
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    }
    if (operator === '*') {
        return multiply(num1, num2);
    }
    if (operator === '/') {
        return divide(num1, num2);
    }

}


