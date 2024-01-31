const display = document.querySelector(".container__display");
const keys = document.querySelector(".container__buttons");
const backspaceBtn = document.querySelector(".fa-backspace");

let displayContent;
let firstNumber;
let secondNumber;
let operator;
let previousKeyCategory;

keys.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const clickedBtnContent = event.target.textContent;

        if (!isNaN(clickedBtnContent) && clickedBtnContent !== "") {
            if (
                display.innerText === "0" ||
                previousKeyCategory === "operator"
            ) {
                display.innerText = clickedBtnContent;
            } else {
                display.innerText += clickedBtnContent;
            }

            if (firstNumber) secondNumber = display.innerText;

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
                display.innerText = operate(
                    Number(firstNumber),
                    Number(secondNumber),
                    operator
                );
            }

            operator = clickedBtnContent;
            firstNumber = display.innerText;

            previousKeyCategory = "operator";
        }

        if (clickedBtnContent === "=") {
            if (!firstNumber) {
                return;
            }

            if (!secondNumber) {
                secondNumber = firstNumber;
            }

            display.innerText = operate(
                Number(firstNumber),
                Number(secondNumber),
                operator
            );

            firstNumber = display.innerText;

            previousKeyCategory = "equals";
        }

        if (clickedBtnContent === "AC") {
            display.textContent = "0";
            firstNumber = 0;
            secondNumber = 0;
            operator = "";

            previousKeyCategory = "clear";
        }

        if (clickedBtnContent === ".") {
            if (!display.innerText.includes(".")) {
                display.innerText += ".";
            }
            if (previousKeyCategory === "operator") {
                display.innerText = "0.";
            }

            previousKeyCategory = "decimal";
        }

        if (event.target === backspaceBtn) {
            if (display.innerText.length > 1)
                display.innerText = display.textContent.slice(0, -1);
            else display.innerText = "0";

            previousKeyCategory = "backspace";
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
