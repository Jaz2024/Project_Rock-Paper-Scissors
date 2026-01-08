const container = document.querySelector("#container");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

const text = document.querySelector("#text");
const result = document.querySelector("#result");


rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorBtn.addEventListener("click", () => playRound("scissor", getComputerChoice()));



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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        text.textContent = `Tie  You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        ++humanScore;
       text.textContent = `You win  You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        ++computerScore;
        text.textContent = `You lose  You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        ++humanScore;
        text.textContent = `You win  You: ${humanScore} | Computer: ${computerScore}` ;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        ++computerScore;
        text.textContent = `You lose  You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        text.textContent = `You win  You: ${humanScore} | Computer: ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        text.textContent = `You lose  You: ${humanScore} | Computer: ${computerScore}`;
    }

    if(humanScore === 5) {
        text.textContent = `YOU WON!`;
        result.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        document.body.style.backgroundColor = "Green";
        document.body.style.color = "White";
        buttonDisabled();

    } else if (computerScore === 5) {
        text.textContent = `YOU LOSE!`;
        result.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
        document.body.style.backgroundColor = "Red";
        document.body.style.color = "White";
        buttonDisabled();
    }

}


function buttonDisabled(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}


