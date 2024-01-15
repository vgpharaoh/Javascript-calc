const operator = prompt('Enter operator (+, -, *, /, or ^):');
const num1 = parseFloat(prompt('Enter 1st number: '));
const num2 = parseFloat(prompt('Enter 2nd number: '));
let result;
if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/') {
    result = num1 / num2;
}
else {
    result = num1 ** num2;
}
console.log(result);