let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector("#buttons");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "rock";
    } else if (x < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let resultMessage = `Human chose: ${humanChoice}, Computer chose: ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage += "You win this round!";
        humanScore++;
    } else {
        resultMessage += "You lose this round!";
        computerScore++;
    }

    resultDiv.textContent = resultMessage;
    updateScore();

    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        resetGame();
    }
}

function updateScore() {
    scoreDiv.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;
}

function announceWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
    } else if (computerScore === 5) {
        alert("Sorry! The computer won the game.");
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.textContent = "Game reset! Start a new game by clicking a choice.";
}

buttons.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON') {
        const humanChoice = target.id; // Gets "rock", "paper", or "scissors" based on button ID
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
});
