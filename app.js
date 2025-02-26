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
const numerical = "0123456789";

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    const numberOf = e.target.dataset.number;
    console.log(numberOf);
    if (numberOf === "erase") {
      result.textContent = "";
    } else if (numberOf === "decimal") {
      result.textContent += ".";
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

document.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    result.textContent += "+";
  } else if (e.key === "-") {
    result.textContent += "-";
  } else if (e.key === "*") {
    result.textContent += "*";
  } else if (e.key === "/") {
    result.textContent += "/";
  } else if (e.key === 13) {
    console.log(e.key);
  }

  let keyResult = result.textContent;
});
//Backspace function
document.addEventListener("keydown", (e) => {
  if (e.code === "Backspace") {
    result.textContent = result.textContent.slice(
      0,
      result.textContent.length - 1
    );
  }
  if (numerical.includes(e.key)) {
    result.textContent += e.key;
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

  if (e.code === "Enter") {
    result.textContent = operate(resultParts[0], operation, resultParts[1]);
  }
});

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", (e) => {
    const operateOf = e.target.dataset.key;
    result.textContent += operateOf;
  });
}

//Functions to make the operations
function operateNums(a, b) {
  const add = () => {
    return a + b;
  }

  const subtract = () => {
    return a - b;
  }

  const multiply = () => {
    return a * b;
  }

  const divide = () => {
    return a / b;
  }

  return { add, subtract, multiply, divide }
}

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

  const operate = operateNums();

  if (operator === "+") {
    operate.add(num1, num2);
  }
  if (operator === "-") {
    operate.subtract(num1, num2);
  }
  if (operator === "*") {
    operate.multiply(num1, num2);
  }
  if (operator === "/") {
    operate.divide(num1, num2);
  }
}
