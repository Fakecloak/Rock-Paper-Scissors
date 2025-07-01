function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const number = Math.floor(Math.random()*3);
        if (number=== 0) return "rock";
        if (number=== 1) return "paper";
        if (number=== 2) return "scissors";
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase(); //converting to case insensitive.

        if (humanChoice === computerChoice){
            console.log("it's a tie breaker");
        }
        else if (
            (humanChoice ==="rock" && computerChoice ==="scissors") || 
            (humanChoice ==="paper" && computerChoice ==="rock") ||
            (humanChoice ==="scissors" && computerChoice ==="paper")
        ) {
            humanScore++;
            console.log("You Win!" + humanChoice + "beats " + computerChoice + ".");
        }
        else {
            computerScore++;
            console.log("You Lost!" + computerChoice + "beats " + humanChoice + ".");
        }

    }
    //getting user input from user via prompt.
    const round1 = prompt("Round 1: Rock, Paper, or Scissors?");
    playRound(round1,getComputerChoice());

    const round2 = prompt("Round 2: Rock, Paper, or Scissors?");
    playRound(round1,getComputerChoice());

    const round3 = prompt("Round 3: Rock, Paper, or Scissors?");
    playRound(round1,getComputerChoice());

    const round4 = prompt("Round 4: Rock, Paper, or Scissors?");
    playRound(round1,getComputerChoice());

    const round5 = prompt("Round 5: Rock, Paper, or Scissors?");
    playRound(round1,getComputerChoice());

    console.log(`Final Scores:\n`);
    console.log("You(Human): "+humanScore);
    console.log("Computer: "+computerScore);


    if (humanScore>computerScore) {
        console.log("you won!")
    }
    else if (humanScore < computerScore) {
        console.log("you lost!")
    }
    else {
         console.log("it's tie!")
    }

}

playGame();