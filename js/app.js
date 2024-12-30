// Global Variables for Project
const firstNumber = 0;
const secondNumber = 0;
const operator = "";

const calcDisplay = document.querySelector(".display");
calcDisplay.textContent = "7+7";

// Functions for calculator operations
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

// Function to call an operation
function operate (num1, operator, num2) {
    switch (operator) {
        case "+" :
            return add(num1, num2);
            break;
        case "-" :
            return subtract(num1, num2);
            break;
        case "*" :
            return multiply(num1, num2);
            break;
        case "/" :
            return divide(num1, num2);
            break;
        default :
            console.log("Not a valid operation");
    }
}

// ----- Test cases -----
console.log("-- Individual Functions --");
console.log(`Addition of 2 + 2 = ${add(2,2)}`);
console.log(`Subtraction of 10 - 3 = ${subtract(10, 3)}`);
console.log(`Multiplication of 8 * 20 = ${multiply(8, 20)}`);
console.log(`Division of 50 / 10 = ${divide(50, 10)}`);

console.log("-- Main Function --");
console.log(`Addition of 10 + 10 = ${operate(10, "+", 10)}`);
console.log(`Subtraction of 1000 - 350 = ${operate(1000, "-", 350)}`);
console.log(`Multiplication of 50 * 50 = ${operate(50, "*", 50)}`);
console.log(`Division of 1000 / 10 = ${operate(1000, "/", 10)}`);