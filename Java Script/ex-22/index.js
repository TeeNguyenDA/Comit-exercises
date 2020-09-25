"use strict"
alert("Enter two numbers to see if the first is greater than the second");

let message = Number(prompt(firstNumber));
let message = Number(prompt(secondNumber));
if (secondNumber > firstNumber) {
    alert("Your second number is greater than your first number");
} else if(secondNumber < firstNumber) {
    alert("Your second number is smaller than your first number");
} else(secondNumber = firstNumber) {
    alert("Both numbers are of the same value");
}