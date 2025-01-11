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
        calculator.percentConvert(calcDisplay.innerHTML);
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
    calculator.clearCalc();
});

equalBtn.addEventListener("click", () => {
    calculator.result(calcDisplay.innerHTML);
    percentBtn.disabled = false;
    plusMinusBtn.disabled = false;
})

document.addEventListener("keydown", (e) => {
    if (calculator.reg.test(e.key)) {
        calcDisplay.textContent += e.key;
    } else if (e.key === "Enter") {
        if (calcDisplay.innerHTML !== "") {
            calculator.result(calcDisplay.innerHTML);
        }
    } else if (e.key === "c") {
        calculator.clearCalc();
    } else if (e.key === "%") {
        if (calcDisplay.innerHTML !== "") {
            calculator.percentConvert(calcDisplay.innerHTML);
        }
    } else if (e.key === "Backspace") {
        let value = calcDisplay.innerHTML;
        calcDisplay.textContent = value.slice(0, value.length -1);
    }
})

// ----- Calculator Object -----
let calculator = {
    firstNumber : 0,
    secondNumber : 0,
    operator : "",
    reg : /[0-9+-/*.]/,
    percentConvert (value) {
        value = (parseFloat(value)) / 100;
        calcDisplay.textContent = value;
        percentBtn.disabled = true;
    },
    clearCalc () {
        calcDisplay.textContent = "";
        this.firstNumber = 0;
        this.secondNumber = 0;
        this.operator = "";
        percentBtn.disabled = false;
        plusMinusBtn.disabled = false;
        dotBtn.disabled = false;
    },
    roundValue (num) {
        return num.toFixed(2) / 1;
    },
    evaluate (num1, num2) {
        switch (this.operator) {
            case "+" :
                return this.roundValue((num1 + num2));
            case "-" :
                return this.roundValue((num1 - num2)); 
            case "*" :
                return this.roundValue((num1 * num2));
            case "/" :
                if (num2 === 0) {
                    return "No dice!";
                }
                return this.roundValue((num1 / num2));
            default :
                console.log("Not a valid operation");
        }
    },
    result (equation) {
        let operatorPos = 0;
        for (let value in equation) {
            if (isNaN(equation[value]) && equation[value] !== ".") {
                operatorPos = parseInt(value);
                this.operator = equation[value];
            }
        }
        this.firstNumber = parseFloat(equation.slice(0, operatorPos));
        this.secondNumber = parseFloat(equation.slice(operatorPos + 1, equation.length));
    
        if (isNaN(this.firstNumber)) {
            this.firstNumber = 0;
        } else if (isNaN(this.secondNumber)) {
            this.secondNumber = 0;
        }
    
        calcDisplay.textContent = "";
        calcDisplay.textContent = this.evaluate(this.firstNumber, this.secondNumber);
    },
}

// ----- Test cases -----
console.log("-- Main Function --");
console.log(`Addition of 10 + 10 = ${calculator.evaluate(10, "+", 10)}`);
console.log(`Subtraction of 1000 - 350 = ${calculator.evaluate(1000, "-", 350)}`);
console.log(`Multiplication of 50 * 50 = ${calculator.evaluate(50, "*", 50)}`);
console.log(`Division of 1000 / 10 = ${calculator.evaluate(1000, "/", 10)}`);