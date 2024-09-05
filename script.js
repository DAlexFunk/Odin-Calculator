function add(a, b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        if (num2 === 0) {
            return "bro?";
        } else {
            return divide(num1,num2);
        }
    }
    return "ERROR";
}

let num1 = "";
let num2 = "";
let result = "";
let operator = "";

const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back");
const screen = document.querySelector(".screen");
const addButton = document.querySelector("#plus");
const subtractButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#enter");


clearButton.addEventListener("click", () => {
    screen.textContent = "";
    operator = "";
    num1 = "";
});

backButton.addEventListener("click", () => screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1));

numberButtons.forEach((button) => button.addEventListener("click", () => {
    if (screen.textContent.length < 10) screen.textContent += button.textContent;
}));

addButton.addEventListener("click", () => {
    num1 = Number(screen.textContent);
    operator = "+";
    screen.textContent = "";
})

subtractButton.addEventListener("click", () => {
    num1 = Number(screen.textContent);
    operator = "-";
    screen.textContent = "";
})

multiplyButton.addEventListener("click", () => {
    num1 = Number(screen.textContent);
    operator = "*";
    screen.textContent = "";
})

divideButton.addEventListener("click", () => {
    num1 = Number(screen.textContent);
    operator = "/";
    screen.textContent = "";
})

equalsButton.addEventListener("click", () => {
    result = operate(Number(num1), Number(screen.textContent), operator);
    num1 = result;
    screen.textContent = result;
})