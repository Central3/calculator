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
            if (
                firstNumber &&
                secondNumber &&
                previousKeyCategory !== "equals"
            ) {
                display.textContent = operate(
                    Number(firstNumber),
                    Number(secondNumber),
                    operator
                );
            }

            operator = clickedBtnContent;
            firstNumber = display.textContent;

            previousKeyCategory = "operator";
        }

        if (clickedBtnContent === "=") {
            if (!firstNumber) {
                return;
            }

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

        if (clickedBtnContent === "AC") {
            display.textContent = "0";
            firstNumber = 0;
            secondNumber = 0;
            operator = "";

            previousKeyCategory = "clear";
        }
    }
});

function operate(x, y, operator) {
    let result;

    if (operator === "÷" && secondNumber === "0") {
        return "0";
    }

    if (operator === "+") result = x + y;
    else if (operator === "-") result = x - y;
    else if (operator === "×") result = x * y;
    else if (operator === "÷") result = x / y;

    return +(Math.round(result + "e+7") + "e-7");
}
