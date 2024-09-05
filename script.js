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
        return divide(num1, num2);
    }
    return "ERROR";
}

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const numberButtons = document.querySelectorAll(".number");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back");
const screen = document.querySelector(".screen");

clearButton.addEventListener("click", () => screen.textContent = "");

backButton.addEventListener("click", () => screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1));

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        screen.textContent += button.textContent;
    });
});