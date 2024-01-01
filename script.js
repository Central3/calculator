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
            firstNumber = display.textContent;

            previousKeyCategory = "operator";
        }

        if (clickedBtnContent === "=") {
            if (!secondNumber) {
                secondNumber = firstNumber;
            }

            display.textContent = operate(
                Number(firstNumber),
                Number(secondNumber),
                operator
            );

            firstNumber = display.textContent;

            previousKeyCategory = "equals";
        }

        console.log(firstNumber, secondNumber, operator);
    }
});

function operate(x, y, operator) {
    if (operator === "+") return add(x, y);
    else if (operator === "-") return subtract(x, y);
    else if (operator === "×") return multiply(x, y);
    else if (operator === "÷") return divide(x, y);
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
