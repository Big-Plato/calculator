const container = document.querySelector(".container");
const result = container.querySelector(".result");
const numbers = container.querySelector(".numbers");
const number = numbers.querySelectorAll(".number");
const operators = container.querySelector(".operators");
const operator = operators.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");

//Three variables to assign the values input by the user
let firstOperand = null;
let lastOperand = null;
let operation = null;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    const numberOf = e.target.dataset.number;
    console.log(numberOf);
    if (numberOf === "erase") {
      result.textContent = "";
    } else if (numberOf === "decimal") {
      result.textContent += '.';
    } else {
      result.textContent += numberOf;
    }

    let resultParts;
    if (result.textContent.includes("+")) {
      result.textContent = result.textContent.replace(/\+\+/gi, "+");
      resultParts = result.textContent.split("+");
      operation = "+";
    } else if (result.textContent.includes("-")) {
      result.textContent = result.textContent.replace(/\-\-/gi, "-");
      resultParts = result.textContent.split("-");
      operation = "-";
    } else if (result.textContent.includes("*")) {
      result.textContent = result.textContent.replace(/\*\*/gi, "*");
      resultParts = result.textContent.split("*");
      operation = "*";
    } else if (result.textContent.includes("/")) {
      result.textContent = result.textContent.replace(/\/\//gi, "/");
      resultParts = result.textContent.split("/");
      operation = "/";
    }
    equalBtn.addEventListener("click", () => {
      console.log("shit");
      result.textContent = operate(resultParts[0], operation, resultParts[1]);
    });
  });
}

//Backspace function
document.addEventListener("keydown", (e) => {
  if (e.code === "Backspace") {
    result.textContent = result.textContent.slice(
      0,
      result.textContent.length - 1
    );
  }
});

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (e) => {
    const operateOf = e.target.dataset.key;
    result.textContent += operateOf;
  });
}

//Functions to make the operations
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

function operate(n1, operator, n2) {
  let num1 = parseFloat(n1);
  let num2 = parseFloat(n2);

  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}
