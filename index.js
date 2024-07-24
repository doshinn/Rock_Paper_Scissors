// Generating computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 10)

    switch (random) {
        case 1:
        case 2:
        case 3:
            return 'rock'

        case 4:
        case 5:
        case 6:
            return 'paper'
        
        default:
            return 'scissors'
    }
}

function getPlayerChoice() {
    return prompt('Enter your choice: ').toLowerCase()
}

// Play a single round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie'
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'paper'
        && computerChoice === 'rock' || playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'win'
    } else {
        return 'lost'
    }
}

let playerScore = 0;
let computerScore = 0;

// Add score to the winner's score
function addScore(result) {
    switch (result) {
        case 'win':
            playerScore++;
            break;
        case 'lost':
            computerScore++;
            break
        default:
            break
    }
}

// Play 5 rounds
function play5Rounds() {
    addScore(addScore(playRound(getPlayerChoice(), getComputerChoice())));
    addScore(addScore(playRound(getPlayerChoice(), getComputerChoice())));
    addScore(addScore(playRound(getPlayerChoice(), getComputerChoice())));
    addScore(addScore(playRound(getPlayerChoice(), getComputerChoice())));
    addScore(addScore(playRound(getPlayerChoice(), getComputerChoice())));
    defineWinner();
}

// defines the winner
function defineWinner() {
    console.log(playerScore, computerScore)
    if (playerScore > computerScore) {
        console.log('You won!')
    } else {
        console.log("You lost :'(")
    }
}
play5Rounds();