const display = document.querySelector(".container__display");
const keys = document.querySelector(".container__buttons");

let displayContent;
let firstNumber;
let secondNumber;
let operator;
let previousKeyCategory;

keys.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const clickedBtnContent = event.target.textContent;

        if (!isNaN(clickedBtnContent)) {
            if (
                display.textContent.trim() === "0" ||
                previousKeyCategory === "operator"
            ) {
                display.textContent = clickedBtnContent;
                displayContent = display.textContent;
            } else {
                display.textContent += clickedBtnContent;
                displayContent = display.textContent;
            }

            if (firstNumber) secondNumber = displayContent;

            previousKeyCategory = "number";
        }

        if (
            clickedBtnContent === "+" ||
            clickedBtnContent === "-" ||
            clickedBtnContent === "×" ||
            clickedBtnContent === "÷"
        ) {
            operator = clickedBtnContent;
            firstNumber = displayContent;

            previousKeyCategory = "operator";
        }

        console.log(firstNumber, operator, secondNumber);
    }
});

function operate(x, y, operator) {
    if (operator === "+") console.log(add(num1, num2));
    else if (operator === "-") console.log(subtract(num1, num2));
    else if (operator === "*") console.log(multiply(num1, num2));
    else if (operator === "/") console.log(divide(num1, num2));
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}
