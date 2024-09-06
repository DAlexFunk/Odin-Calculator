const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back");
const equalsButton = document.querySelector("#enter");
const screen = document.querySelector(".screen");


let currentDisplay = "";
let num1 = "";
let num2 = "";
let operator = "";


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

function updateDisplay() {
    if (currentDisplay.length > 10) currentDisplay = currentDisplay.slice(0, 10);
    screen.textContent = currentDisplay;
}

function operatorAction(evt) {
    if (num1 === "") {
        operator = evt.currentTarget.textContent;
        num1 = Number(currentDisplay);
        currentDisplay = "";
    } else {
        num2 = Number(currentDisplay);
        currentDisplay = operate(num1, num2, operator);
        num1 = Number(currentDisplay);
        operator = evt.currentTarget.textContent;
        num2 = "";
    }
    updateDisplay();
    currentDisplay = "";
}

function numberAction(evt) {
    updateDisplay();
    currentDisplay += evt.currentTarget.textContent;
    updateDisplay();
}

function clearAction() {
    num1 = "";
    num2 = "";
    operator = "";
    currentDisplay = "";
    updateDisplay();
}

function backAction() {
    currentDisplay = currentDisplay.slice(0, currentDisplay.length - 1);
    updateDisplay();
}

function equalsAction() {
    num2 = Number(currentDisplay);
    currentDisplay = operate(num1, num2, operator);
    updateDisplay();
    num1 = "";
    num2 = "";
    operator = "";
    currentDisplay = "";
}

operatorButtons.forEach((button) => button.addEventListener("click", operatorAction));
numberButtons.forEach((button) => button.addEventListener("click", numberAction));
clearButton.addEventListener("click", clearAction);
backButton.addEventListener("click", backAction);
equalsButton.addEventListener("click", equalsAction);