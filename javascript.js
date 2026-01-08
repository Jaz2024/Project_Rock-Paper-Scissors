const container = document.querySelector("#container");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");


const result = document.querySelector("#result");
const score = document.querySelector("#score");
const myChoice = document.querySelector("#mychoice");
const compChoice = document.querySelector("#compchoice");


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
        result.textContent = `It's a tie! 🤝`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;

        document.body.style.color = "Orange";
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        ++humanScore;
       result.textContent = `You win! 🎉`;
       score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
       myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
       compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;  
       
       document.body.style.color = "Green";
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        ++computerScore;
        result.textContent = `You lose! 💔`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;    

        document.body.style.color = "Red";
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        ++humanScore;
        result.textContent = `You win! 🎉`
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}` ;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;   
        
        document.body.style.color = "Green";
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        ++computerScore;
        result.textContent = `You lose! 💔`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`; 
        
        document.body.style.color = "Red";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        result.textContent = `You win! 🎉`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;
        
        document.body.style.color = "Green";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        result.textContent = `You lose! 💔`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;

        document.body.style.color = "Red";
    }

    if(humanScore === 5) {
        result.textContent = `YOU WON! 👑`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;        
        document.body.style.backgroundColor = "Green";
        document.body.style.color = "White";
        buttonDisabled();

    } else if (computerScore === 5) {
        result.textContent = `YOU LOSE! ☠️`;
        score.textContent = `Score — You: ${humanScore} / Computer: ${computerScore}`;
        myChoice.textContent =`You chose: ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}`;  
        compChoice.textContent =`Computer chose: ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`;        
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


