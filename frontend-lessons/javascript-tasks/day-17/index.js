// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
const cities= ["Marikina", "Manila", "Makati", "Antipolo", "Parañaque"];
// 2. Access and print the third city in the `cities` array.;
console.log(cities[2]);
// 3. Modify the second city in the array to a different city of your choice.
cities[1]="Pasay";

// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
const fruits=["apple", "banana", "mango"];
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
fruits.push("avocado");
// 6. Remove the last fruit from the array using the `pop()` method.
fruits.pop()
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.
for(let i=0; i<=fruits.length; i++){
    console.log(fruits[i]);
}
fruits.forEach(function(fruits){
    console.log(fruits);
  })
  
// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
const numbers=[1,2,3,4,5];
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
const doubleNum  = numbers.map(function(number){
    return number*2;
})
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.
const greaterThanFive= numbers.filter(function(numbers){
    return numbers>5;
})
// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
const colors=["blue", "red", "pink", "yellow",];
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
colors.unshift("purple");
// 13. Remove the first color from the array using the `shift()` method.
colors.shift();
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.
const secondAndThirdColor=colors.slice(1,3);
// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
const characters=['a','b','c','d','e','f'];
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
characters.splice(2,0,"c","d");
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.
characters.splice(4,3);
// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀
