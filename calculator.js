const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
}

// console.log(calculator.add(20, 5));
// console.log(calculator.subtract(20, 5));
// console.log(calculator.multiply(20, 5));
// console.log(calculator.divide(20, 5));

let num1 = null;
let num2 = null;
let operator = null;

const operation = {
    "+": (a, b) => calculator.add(a, b),
    "-": (a, b) => calculator.subtract(a, b),
    "*": (a, b) => calculator.multiply(a, b),
    "/": (a, b) => calculator.divide(a, b)
};