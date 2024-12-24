
const container = document.querySelector('.container');
const result = container.querySelector('.result');
const numbers = container.querySelector('.numbers');
const number = numbers.querySelectorAll('.number');
const operators = container.querySelector('.operators');
const operator = operators.querySelectorAll('.operator');

const firstOperand = null;
const secondOperand = null;

console.log(number)


const clickedNumber = number.forEach(number => {
    number.addEventListener("click", (e) => {
        const numberOf = e.target.dataset.number;
        if (e.target.id !== 'erase') {
            result.textContent += numberOf;
        } else {
            result.textContent = "";
        }
        
    })
})




const operatorClicked = operator.forEach(operator => {
    operator.addEventListener("click", (e) => {
        const operation = e.target.dataset.key;
        result.textContent += operation;
    })
})

if (operatorClicked) {
    console.log("YES")
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

