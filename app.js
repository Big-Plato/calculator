
const container = document.querySelector('.container');
const result = container.querySelector('.result');
const numbers = container.querySelector('.numbers');
const number = numbers.querySelectorAll('.number');
const operators = container.querySelector('.operators');
const operator = operators.querySelector('.operator');

console.log(number)

number.forEach(number => {
    number.addEventListener("click", (e) => {
        result.textContent += e.target.id;
        console.log(e.target)
    })
})

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

