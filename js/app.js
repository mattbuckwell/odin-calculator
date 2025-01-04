// ----- Global Variables for Project -----
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// ----- HTML elements of the calculator -----
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
let btn = document.querySelectorAll(".btn");

// ----- Event Listeners for button elements -----
btn.forEach(element => {
    element.addEventListener("click", () => {
        calcDisplay.textContent += element.innerHTML;
    })
})

clearBtn.addEventListener("click", () => {
    calcDisplay.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
});

equalBtn.addEventListener("click", () => {
    result(calcDisplay.innerHTML);
})

// ----- Functions for calculator operations -----
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

// ----- Function to call an operation -----
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
            if (num2 === 0) {
                return "No dice!";
                break;
            }
            return divide(num1, num2);
            break;
        default :
            console.log("Not a valid operation");
    }
}

// ----- Function for displaying calculator result -----
function result (equation) {
    let operatorPos = 0;
    for (let value in equation) {
        if (isNaN(equation[value]) && equation[value] !== ".") {
            operatorPos = parseInt(value);
            operator = equation[value];
        }
    }
    firstNumber = parseFloat(equation.slice(0, operatorPos));
    secondNumber = parseFloat(equation.slice(operatorPos + 1, equation.length));

    calcDisplay.textContent = "";
    calcDisplay.textContent = operate(firstNumber, operator, secondNumber);
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

console.log("-- Numbers used in the equation --")
console.log(`First Number = ${firstNumber}`);
console.log(`Second Number = ${secondNumber}`);