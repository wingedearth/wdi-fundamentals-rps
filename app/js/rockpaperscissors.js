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

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {  
    return move || randomPlay();
}

function getWinner(playerMove,computerMove)
{
    var winner;
    console.log("The human player chooses", playerMove);
    console.log("The computer chooses", computerMove);
    if (playerMove==="rock")
    {
        if (computerMove=="rock")
            winner = "tie";
        else if (computerMove=="scissors")
            winner = "computer";
        else
            winner = "player";
    }

    if (playerMove==="scissors")
    {
        if (computerMove=="scissors")
            winner = "tie";
        else if (computerMove=="rock")
            winner = "computer";
        else
            winner = "player";
    }
    
    if (playerMove==="paper")
    {
        if (computerMove=="paper")
            winner = "tie";
        else if (computerMove=="scissors")
            winner = "computer";
        else
            winner = "player";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors, if you dare.");
    var playerWins = 0;
    var computerWins = 0;
    var win;

    while (1>0) {  // infinite loop with an exit condition.
        win = getWinner(getPlayerMove(), getComputerMove() );
            if (win == "player")
                playerWins = playerWins + 1;
            if (win == "computer")
                computerWins = computerWins + 1;
            if (win == "tie")
                console.log("It's a tie!!");
        console.log("Winner this round:",win);
        console.log("Human player:", playerWins);
        console.log("Computer:", computerWins);
        if ((playerWins>=5) || (computerWins>=5))
        {
            console.log("Overall Winner:", win);
            //return [playerWins, computerWins];
            return win;
        }
    }
    
}
playToFive();

