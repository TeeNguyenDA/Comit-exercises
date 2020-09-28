alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'));
if (secondNumber > firstNumber) {
    alert("Second number is greater than first number");
} else if (secondNumber < firstNumber) {
    alert("Second number is smaller than first number");
} else {
    alert("Both numbers are of the same value")
}
