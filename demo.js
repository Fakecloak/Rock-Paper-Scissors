// console.log("hello world")

getHumanChoice();
getComputerChoice();
let humanScore=0, computerScore=0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





/* 
Rock: Crushes scissors, but is covered by paper.
Paper: Covers rock, but is cut by scissors.
Scissors: Cuts paper, but is crushed by rock. 
*/  
function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    
}



function getComputerChoice() {
    const computerInput = Math.floor(Math.random() * 3);
    // console.log(computerInput)
    let finalChoice;
    if (computerInput === 0) {
        finalChoice = "rock"
    } else if (computerInput ===1) {
        finalChoice = "paper"
    } else if (computerInput ===2){
        finalChoice = "scissors"
    }
    
    return console.log(finalChoice) && finalChoice;
}
// console.log(getRandomInt(3));

function getHumanChoice() {
    console.log("welcome to the Game\n");
    const userInput = prompt("Rock or Paper or Scissors").toLowerCase();
    
    return userInput && console.log(userInput);
}
