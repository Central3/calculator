const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const operator = prompt("operator: ");

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

operate(num1, num2, operator);
