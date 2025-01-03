// ----- Global Variables for Project -----
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// ----- HTML elements of the calculator -----
const calcDisplay = document.querySelector(".display");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const divideBtn = document.querySelector(".divide");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const multiplyBtn = document.querySelector(".multiply");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const subtractBtn = document.querySelector(".subtraction");
const zeroBtn = document.querySelector(".zero");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const addBtn = document.querySelector(".addition");

// ----- vent Listeners for button elements -----
sevenBtn.addEventListener("click", () => {
    calcDisplay.textContent += sevenBtn.innerHTML;
});
eightBtn.addEventListener("click", () => {
    calcDisplay.textContent += eightBtn.innerHTML;
});
nineBtn.addEventListener("click", () => {
    calcDisplay.textContent += nineBtn.innerHTML;
});
divideBtn.addEventListener("click", () => {
    calcDisplay.textContent += divideBtn.innerHTML;
});
fourBtn.addEventListener("click", () => {
    calcDisplay.textContent += fourBtn.innerHTML;
});
fiveBtn.addEventListener("click", () => {
    calcDisplay.textContent += fiveBtn.innerHTML;
});
sixBtn.addEventListener("click", () => {
    calcDisplay.textContent += sixBtn.innerHTML;
});
multiplyBtn.addEventListener("click", () => {
    calcDisplay.textContent += multiplyBtn.innerHTML;
});
oneBtn.addEventListener("click", () => {
    calcDisplay.textContent += oneBtn.innerHTML;
});
twoBtn.addEventListener("click", () => {
    calcDisplay.textContent += twoBtn.innerHTML;
});
threeBtn.addEventListener("click", () => {
    calcDisplay.textContent += threeBtn.innerHTML;
});
subtractBtn.addEventListener("click", () => {
    calcDisplay.textContent += subtractBtn.innerHTML;
});
zeroBtn.addEventListener("click", () => {
    calcDisplay.textContent += zeroBtn.innerHTML;
});
addBtn.addEventListener("click", () => {
    calcDisplay.textContent += addBtn.innerHTML;
});
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