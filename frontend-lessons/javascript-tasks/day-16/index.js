// JavaScript Fundamentals - Day 16: Assignment

// 1. Create a function named `greet` that prints a greeting message to the console.
function greet(){
    console.log("Hello!!");
}
// 2. Call the `greet` function to display the greeting.
greet()

// 3. Modify the `greet` function to take a parameter `name` and greet the person by name.
function greet(name){
    console.log(`Hello, ${name}!`);
}
greet("Chezter");
// 4. Create a function named `addNumbers` that takes two parameters and returns their sum.
function addNumbers(num1,num2){
    return num1+num2;
}
const result=addNumbers(7,5);
console.log(result);
// 5. Call the `addNumbers` function with different values and print the results.
const result1=addNumbers(8,31);
console.log(result1);
// 6. Create a function named `calculateAverage` that takes an array of numbers as a parameter and returns the average.
function calculateAverage{
    let sum=0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum / nums.length;
    }
// 7. Use the `calculateAverage` function with an array of numbers and print the result.
   
const numbers = [1.00, 1.25,1,25,1.00,1.00];
const average = calculateAverage(numbers);

console.log(`Your average for the first sem is ${average}`);
// These are the fundamental concepts of functions in JavaScript. Functions allow you to write modular and reusable code, making your programs more organized and easier to maintain.