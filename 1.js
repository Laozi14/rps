console.log("Hello");

let n = 5;
console.log(playGame(n));

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

function getHumanChoice() {
    let y = prompt("Choose: rock, paper, or scissors");
    return y.toLowerCase();  // Convert human input to lowercase to match conditions properly
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
        console.log(`Human chose: ${humanChoice}, Computer chose: ${computerChoice}`);

        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose, paper beats rock");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win, rock beats scissors");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win, paper beats rock");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose, scissors beats paper");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win, scissors beats paper");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose, rock beats scissors");
            computerScore++;
        } else {
            console.log("It's a tie!");
        }
    }

    // Final result after all rounds
    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie game overall.");
    }
}
