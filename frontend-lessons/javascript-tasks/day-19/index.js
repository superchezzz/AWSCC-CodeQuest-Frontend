// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
const product={
    name: "Celeteque Moisturizer",
    price:"₱155",
    quantity: "25",
}
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
const productJSON= JSON.stringify(product);
// 3. Print the resulting JSON string to the console.
console.log(productJSON);
// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
const bookJSON={
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publishedYear: "1998",
}
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
const book= JSON.parse(bookJSON);
// 6. Access and print the `author` property of the resulting JavaScript object.
console.log(book.author);
// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
const person=[
    {name: "Huh Yun-Jin", age: 22, city: "Gangnam"},
    {name: "Hong Eun-chae", age: 17, city: "Miryang"},
    {name: "Hanni Pham", age: 19, city:"Melbourne"},
    {name: "Minji", age: 19, city: "Chuncheon"}
]
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
const personJSON=JSON.stringify(personJSON);
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
const personConverted=JSON.parse(personJSON);
// 10. Print the `name` and `city` of each person in the array to the console.
person.forEach(function(person){
    console.log(person.name, person.city);
  });