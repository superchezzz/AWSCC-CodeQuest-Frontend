// Step 1: Define the choices available in the game
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display")// Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score")// Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display")// Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score")// Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status")// Get the element with the id of "game-status"
const resetGameButton =document.getElementById("reset-game-btn") // Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn") // Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn") // Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn") // Get the element with the id of "scissors-btn"

let player1Score=0;
let player2Score=0;

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    game("Rock");
});

paperBtn.addEventListener("click", function () {
    game("Paper");
});

scissorsBtn.addEventListener("click", function () {
    game("Scissors");
});

resetGameButton.addEventListener("click", function () { 
    player1Score=0;
    player2Score=0;
    player1ChoiceDisplay.innerHTML = "";
    player2ChoiceDisplay.innerHTML = "";
    gameStatusDisplay.innerHTML="SHOW YOUR HAND TO START THE GAME!";
    scoreboard();
});

// Step 4: Define helper functions that will be the actions of the game
function computerChoice(){
    const numberOfChoice= Math.floor(Math.random()*3);
    return choices[numberOfChoice];
}

function scoreboard(){
    player1ScoreDisplay.textContent=player1Score;
    player2ScoreDisplay.textContent=player2Score;
}

function win(userChoice, player2Choice){
    if (
        (userChoice === "Rock" && player2Choice === "Scissors") ||
        (userChoice === "Paper" && player2Choice === "Rock") ||
        (userChoice === "Scissors" && player2Choice === "Paper")
    ) {
        player1Score++;
        gameStatusDisplay.innerHTML = `${userChoice} beats ${player2Choice}.<br>You win!`;
    } else if (userChoice === player2Choice) {
        gameStatusDisplay.innerHTML = `${userChoice} equals ${player2Choice}.<br>It's a draw!`;
    } else {
        player2Score++;
        gameStatusDisplay.innerHTML = `${player2Choice} beats ${userChoice}.<br>You lose!`;
    }
}


function game(userChoice){
    const player2Choice=computerChoice();
    player1ChoiceDisplay.innerHTML = `<img src="assets/player1-${userChoice.toLowerCase()}.png" alt="${userChoice}">`;
    player2ChoiceDisplay.innerHTML = `<img src="assets/computer-${player2Choice.toLowerCase()}.png" alt="${player2Choice}">`;
    console.log("player 1 choice =>"+ userChoice);
    console.log("player 2 choice =>"+ player2Choice);

    switch(userChoice+player2Choice){
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            win(userChoice, player2Choice);
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            win(userChoice, player2Choice);
            break;
        default:
            gameStatusDisplay.innerHTML = `${userChoice} equals ${player2Choice}.<br>It's a draw!`;
    }
    scoreboard();
}


// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!