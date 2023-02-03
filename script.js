let computerScore = 0
let playerScore = 0

function computerPlay() {
    let randNum = Math.floor(Math.random() * 3) + 1
    switch (randNum) {
        case 1:
            computer = 'rock'
            break;
        case 2:
            computer = 'paper'
            break;
        case 3:
            computer = 'scissors'
            break;
    }
    return computer
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a DRAW! Play Again!!"

    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore ++
        return 'You LOSE! Paper beats Rock.'

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore ++
        return 'You WIN! Rock breaks Scissors'

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore ++
        return 'You LOSE! Scissors cuts Paper'

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore ++
        return 'You WIN! Paper beats Rock'

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore ++
        return 'You LOSE! Rock beats Scissors'

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore ++
        return 'You WIN! Scissors cuts Paper'
    }
}

function game() {

    for (let i = 0; i < 5; i ++) {
        let player = prompt('Rock, Paper or Scissor').toLowerCase();
        let computer = computerPlay()
        console.log(playRound(player, computer))
    }

    if (computerScore > playerScore) {
        return `You LOST! Computer score: ${computerScore} VS Your Score: ${playerScore}`
    } else if (computerScore < playerScore) {
        return `You WON! Computer score: ${computerScore} VS Your Score: ${playerScore}`
    } else {
        return `It's a DRAW! Computer score: ${computerScore} VS Your Score: ${playerScore}`
    }
}

console.log(game())