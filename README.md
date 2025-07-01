# Rock-Paper-Scissors


FUNCTION playGame
    SET humanScore TO 0
    SET computerScore TO 0

    DEFINE FUNCTION getComputerChoice
        GENERATE random number between 0 and 2
        IF number == 0 THEN RETURN "rock"
        ELSE IF number == 1 THEN RETURN "paper"
        ELSE RETURN "scissors"

    DEFINE FUNCTION playRound(humanChoice, computerChoice)
        CONVERT humanChoice TO lowercase
        IF humanChoice == computerChoice THEN
            DISPLAY "It's a tie!"
        ELSE IF (human wins based on game rules) THEN
            INCREMENT humanScore
            DISPLAY "You win!"
        ELSE
            INCREMENT computerScore
            DISPLAY "You lose!"

    FOR each of 5 rounds
        PROMPT user to enter "rock", "paper", or "scissors"
        CALL getComputerChoice and store result
        CALL playRound with user input and computer choice

    DISPLAY final scores
    IF humanScore > computerScore THEN
        DISPLAY "You won the game!"
    ELSE IF computerScore > humanScore THEN
        DISPLAY "You lost the game!"
    ELSE
        DISPLAY "It's a tie!"
