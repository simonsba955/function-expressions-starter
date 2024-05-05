// Mike Jenkins
// 04 APR 20XX
// JS Function Expression Example

// Assign function add to a variable named sum
const sum = function(num1, num2){
    return num1 + num2;
}

// Find the sum by calling the function
// Result of calculation is returned from the function and
// stored in a new variable named answer
const answer = sum(12, 5);
// Option 1
// Displaying the result of the calculation in the browser console
console.log(`(Option 1): The sum is: ${answer}`);
// Option 2
// Calling the function sum from within the template string
console.log(`(Option 2): The sum is: ${sum(20, 4)}`);
// Calling the function sum from within the template string
const firstNum = 20;
const secondNum = 4;
console.log(`(Option 3): The sum is: ${sum(firstNum, secondNum)}`);