////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

//function getPlayerMove(move) {
  function getPlayerMove(playerMove) {  
    return getInput(playerMove);
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
}

//function getComputerMove(move) {
function getComputerMove(computerMove) {    
    return randomPlay(computerMove);
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
}

function getWinner(playerMove,computerMove)
{
    var winner;
    console.log("Player chooses", playerMove);
    console.log("Computer chooses", computerMove);
    if (playerMove==="rock")
        {
        if (computerMove=="rock") {
            winner = "tie"; }
        else if (computerMove=="scissors") {
            winner = "computer"; }
        else {
            winner = "player"; }
        }

    if (playerMove==="scissors")
        {
        if (computerMove=="scissors") {
            winner = "tie"; }
        else if (computerMove=="rock") {
            winner = "computer"; }
        else {
            winner = "player"; }
        }
    
        if (playerMove==="paper")
        {
        if (computerMove=="paper") {
            winner = "tie"; }
        else if (computerMove=="scissors") {
            winner = "computer"; }
        else {
            winner = "player"; }
        }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var win;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (1>0) {
        win = getWinner(getPlayerMove(), getComputerMove() );
            if (win == "player")
                playerWins = playerWins + 1;
            if (win == "computer")
                computerWins = computerWins + 1;
            if (win == "tie")
                console.log("It's a tie!!");
        console.log("Winner this round:",win);
        console.log("player:", playerWins);
        console.log("computer:", computerWins);
        if ((playerWins>=5) || (computerWins>=5))
        {
            console.log("Overall Winner:");
            //return [playerWins, computerWins];
            return win;
        }
    }
    
}
playToFive();

