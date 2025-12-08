function getComputerChoice() {
let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
    computerChoice = "rock";
} else if (computerChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissor"
}

return computerChoice
};

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice? (Rock/Paper/Scissor)");

    if (humanChoice === null) {
        alert("You didn't enter anything");
    } else {
        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert(`Tie  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        ++humanScore;
        alert(`You win  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        ++computerScore;
        alert(`You lose  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        ++humanScore;
        alert(`You win  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        ++computerScore;
        alert(`You lose  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        alert(`You win  You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        alert(`You lose  You: ${humanScore} | Computer: ${computerScore}`);
    }

}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

   playRound(humanSelection, computerSelection);

}

while (humanScore < 5 && computerScore < 5){
    playGame();

    if (humanScore === 5) {
        alert(`YOU WON!!!`);
        break;
    } else if (computerScore === 5) {
        alert(`YOU LOST!!!`)
        break;
    }
}