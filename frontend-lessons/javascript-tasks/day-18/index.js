// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

// 1. Create an empty object named `book`.
const book={};
// 2. Add properties to the `book` object for `title`, `author`, and `year` with appropriate values.

book.title= "Harry Potter and the Chamber of Secrets";
book.author="J.K. Rowling";
book.year= 1998;

// 3. Access and print the `author` property of the `book` object.
console.log(book.author);
// Task 2: Object Operations

// 4. Create an object named `student` with properties for `name`, `age`, and `grade`.
const student={
    name: "Chez",
    age: "18",
    grade: 95,
};
// 5. Modify the `age` property of the `student` object to a different value.
student.age= 19;
// 6. Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.
student.subjects=["Differential Calculus", "Computer Programming", "Introduction to Computing"];
// Task 3: Object Methods

// 7. Create an object named `rectangle` with properties for `width` and `height`.
const rectangle={
    width: 10,
    length: 17,

    calculateArea: function(){
        return(this.width*this.length);
    }

}
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
const areaOfRectangle=rectangle.calculateArea();

// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.
console.log(areaOfRectangle);


// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
const person={
    name: "Chezter",
    age: "18",
    address: "Marikina City",
}
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
delete person.address;

// 12. Create another object named `employee` with properties for `name` and `position`. Combine the `person` and `employee` objects into a new object named `employeeDetails`.
const employee={
    name: "Superchez",
    position: "Fullstack Developer",
}

const employeeDetails={
    ...person,
    ...employee,
}
// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟

