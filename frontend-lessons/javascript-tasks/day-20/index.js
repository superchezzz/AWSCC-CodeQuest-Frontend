// JavaScript Fundamentals - Day 20: Assignment

// Task 1: Selecting Elements

// 1. Create an HTML document with various elements, including headings, paragraphs, and divs.
// 2. Use JavaScript to select and log the following elements to the console:

//    a. All paragraphs on the page using `getElementsByTagName`.
    const pElements = document.getElementsByTagName("p");
    console.log(pElements);

//    b. All elements with the class "info" using `getElementsByClassName`.
   const infoElements= document.getElementsByClassName("info");
   console.log(infoElements);
//    c. The element with the ID "header" using `getElementById`.
    const myHeader = document.getElementById("header");
    console.log(myHeader);
   
//    d. The first element with the class "highlight" using `querySelector`.
   const element= document.querySelector(".highlight");
   console.log(element);
// Task 2: Modifying Elements

// 3. Change the text content of the second paragraph to "This paragraph is now updated!".
    pElements[1].textContent="This paragraph is now updated!";
// 4. Change the background color of the div with the ID "header" to a different color of your choice.
myHeader.style.backgroundColor="yellow";

// Task 3: Creating and Appending Elements

// 5. Create a new `h3` element with the text "New Section" using `document.createElement`.
const h3Element= document.createElement('h3');
h3Element.textContent="New Section";
// 6. Append the newly created `h3` element to the end of the body of the HTML document.
document.body.appendChild(h3Element);
// Task 4: Removing Elements

// 7. Remove the first paragraph from the document.
const firstPara= document.querySelector('p')
firstPara.remove();
// Task 5: Handling Events

// 8. Add a click event listener to the div with the ID "header" that logs "Header clicked!" to the console when clicked.
const header= document.getElementById('header');

header.addEventListener('click', function() {
    console.log('Header clicked!');
});
// Task 6: Advanced Element Manipulation

// 9. Create an array of colors.
const colors=['red', 'green', 'blue', 'yellow', 'pink'];
// 10. Use a loop to iterate over all paragraphs and assign a different background color from the array to each paragraph.
const para= document.querySelectorAll('p');
for(let i=0; i<para.length; i++){
    para[i].style.backgroundColor= colors[i];
}
// *These tasks will help you practice selecting, modifying, creating, and removing elements from the DOM using JavaScript. Good luck! 🌐*
