const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
let userChoice;
let computerChoice;  // Declared globally
let result;  // Declared globally

// Get all possible choices
const possibleChoices = document.querySelectorAll('button');
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'scissors';
    } else if (randomNumber === 2) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!';
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!';
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!';
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!';
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!';
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!';
    } else {
        result = "It's a draw!";
    }

    resultDisplay.innerHTML = result;
}
