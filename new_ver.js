const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorBtn = document.querySelector("#scissors") 
const header = document.querySelector(".container h1")

rockBtn.addEventListener("click",function(){
    playRound('rock');
})

paperBtn.addEventListener("click",function(){
    playRound('paper');
})

scissorBtn.addEventListener("click",function(){
    playRound('scissors')
})

header.style.color = "red";
console.log(document.querySelector(".container h1"));

const results = document.querySelector(".results")
const score = document.querySelector(".score")

const playerScoreSpan = document.querySelector("#playerScore")
const computerScoreSpan = document.querySelector("#computerScore")


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const arr = ["rock","paper","scissors"]
    const Choice = Math.floor(Math.random()*3);
    return arr[Choice];
    }

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        results.innerHTML = `<h2>it's a tie breaker</h2> <br><br>`
        // console.log("it's a tie breaker");
    }
    else if (
        (humanChoice ==="rock" && computerChoice ==="scissors") || 
        (humanChoice ==="paper" && computerChoice ==="rock") ||
        (humanChoice ==="scissors" && computerChoice ==="paper")
    ) {
        results.innerHTML = ` <h2> You Win this round! <br><br> ${humanChoice} beats ${computerChoice}. </h2> `
        playerScore++;
        // console.log("You Win!" + humanChoice + "beats " + computerChoice + ".");
    }
    else {
        results.innerHTML = ` <h2> You Lost this round! <br><br> ${computerChoice} beats ${humanChoice}. </h2> `
        computerScore++;
        // console.log("You Lost!" + computerChoice + "beats " + humanChoice + ".");
    }

    //updating scoreboard
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if (playerScore === 5) {
        results.innerHTML=`<h1> <strong> Player won the game ;) </strong> </h1>`
        results.style.color = "yellow";
    }else if(computerScore===5){
        results.innerHTML=`<h1> <strong> Computer won the game lol </strong> </h1>`
        results.style.color ="green";
    }

    }



