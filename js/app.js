// ----- Global Variables for Project -----
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const reg = /[0-9+-/*.]/;

// ----- HTML elements of the calculator -----
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const calcDisplay = document.querySelector(".display");
let calcBtn = document.querySelectorAll(".btn");
const percentBtn = document.querySelector(".percent");
const plusMinusBtn = document.querySelector(".plus-minus");
const operatorBtn = document.querySelectorAll(".operator");
const dotBtn = document.querySelector(".dot");

// ----- Event Listeners for button elements -----
calcBtn.forEach(element => {
    element.addEventListener("click", () => {
        calcDisplay.textContent += element.innerHTML;
    })
})

percentBtn.addEventListener("click", () => {
    if (calcDisplay.innerHTML !== "") {
        percentConvert(calcDisplay.innerHTML);
    }
});

plusMinusBtn.addEventListener("click", () => {
    let value = parseFloat(calcDisplay.innerHTML);
    if (value >= 0) {
        calcDisplay.textContent = `-${value}`;
    } else if (isNaN(value)) {
        calcDisplay.innerHTML = "-";
    } else if (value < 0) {
        calcDisplay.innerHTML = value * -1;
    }
})

operatorBtn.forEach(element => {
    element.addEventListener("click", () => {
        plusMinusBtn.disabled = true;
        dotBtn.disabled = false;
    })
})

dotBtn.addEventListener("click", () => {
    dotBtn.disabled = true;
})

clearBtn.addEventListener("click", () => {
    clearCalc();
});

equalBtn.addEventListener("click", () => {
    result(calcDisplay.innerHTML);
    percentBtn.disabled = false;
    plusMinusBtn.disabled = false;
})

document.addEventListener("keydown", (e) => {
    if (reg.test(e.key)) {
        calcDisplay.textContent += e.key;
    } else if (e.key === "Enter") {
        if (calcDisplay.innerHTML !== "") {
            result(calcDisplay.innerHTML);
        }
    } else if (e.key === "c") {
        clearCalc();
    } else if (e.key === "%") {
        if (calcDisplay.innerHTML !== "") {
            percentConvert(calcDisplay.innerHTML);
        }
    }
})

// ----- Helper Functions -----
function percentConvert (value) {
    value = (parseFloat(value)) / 100;
    calcDisplay.textContent = value;
    percentBtn.disabled = true;
}

function clearCalc () {
    calcDisplay.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    percentBtn.disabled = false;
    plusMinusBtn.disabled = false;
    dotBtn.disabled = false;
}

// ----- Functions for calculator operations -----
function add (num1, num2) {
    return (num1 + num2).toFixed(2) / 1;
}

function subtract (num1, num2) {
    return (num1 - num2).toFixed(2) / 1;
}

function multiply (num1, num2) {
    return (num1 * num2).toFixed(2) / 1;
}

function divide (num1, num2) {
    return (num1 / num2).toFixed(2) / 1;
}

// ----- Function to call an operation -----
function operate (num1, operator, num2) {
    switch (operator) {
        case "+" :
            return add(num1, num2);
        case "-" :
            return subtract(num1, num2);
        case "*" :
            return multiply(num1, num2);
        case "/" :
            if (num2 === 0) {
                return "No dice!";
            }
            return divide(num1, num2);
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

    if (isNaN(firstNumber)) {
        firstNumber = 0;
    } else if (isNaN(secondNumber)) {
        secondNumber = 0;
    }

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