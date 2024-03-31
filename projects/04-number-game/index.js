
const feedback = document.getElementById('feedback');
const userInput = document.getElementById("userGuess");
const guessButton = document.getElementById("guessButton");
const revealNumber= document.getElementById("revealButton");
const newNumber = document.getElementById("newNumberButton");
let randomNumber= generateNumber();

function generateNumber(){
    return Math.floor(Math.random() * 100) + 1;
}
guessButton.addEventListener("click", function() {
    const userNumber = Number(userInput.value);
    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
        feedback.textContent = "Please enter a number between 1 and 100.";
    } else if (userNumber === randomNumber) {
        feedback.textContent = "Congratulations! You guessed the correct number!";
    } else if (userNumber < randomNumber) {
        feedback.textContent = "Too low. Try again!";
    } else {
        feedback.textContent = "Too high. Try again!";
    }
});

revealNumber.addEventListener("click", function(){
    feedback.textContent= `The number is ${randomNumber}`;

})

newNumber.addEventListener("click", function(){
    randomNumber=generateNumber();
    userInput.value="";
    feedback.textContent="";
})