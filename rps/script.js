
// // function to start application and run the game
// function playGame() { 
//     let round = 1;  
//     let playerScore = 0;
//     let computerScore = 0;
//     let tie = 0;

//     let plays = getRounds();
//     console.log(`Number of rounds: ${plays}`);
//     do {
//         console.log(`ROUND #${round}`);
//         let result = game(playerSelection(), computerSelection());
        
//         if (result === 'COMPUTER WINS!') {
//             computerScore++;
//         } else if (result === 'PLAYER WINS!') {
//             playerScore++;
//         } else if (result === 'TIE!') {
//             tie++;
//         }
//             round++;       
//     } while (round <= plays)

//     console.log(`CHECK THE FINAL SCORE BELOW:`);
//     console.log(`PLAYER SCORE: ${playerScore}`);    
//     console.log(`COMPUTER SCORE: ${computerScore}`);
//     console.log(`TIE GAME: ${tie}`);
// }
// function getRounds() {
//     let answer = prompt("How many rounds you would like to play?");

//     while (isNaN(answer) || answer == undefined || parseInt(answer, 10) == false) {  
//         alert("Please try again with a valid number!");
//         answer = prompt("How many rounds you would like to play?");
//     }

//         return parseInt(answer);
// }

// // function to get Player selection
// function playerSelection() {
    
//    let playerSelection = prompt("Please select your option: 'Must be between rock, paper or scissors'");
   
//    switch(playerSelection.toLowerCase()) {
//        case 'rock':
//            playerSelection = 'rock';
//            break;  
//         case 'paper':
//             playerSelection = 'paper';
//         break;
//         case 'scissors':
//         playerSelection = 'scissors';
//         break;
//         default: playerSelection = 'rock';
//         break;
//    }
//    console.log(`PLAYER: ${playerSelection}`);
//    return playerSelection.toLowerCase();
   
// }

// // function to get Computer selection
// function computerSelection() {
//     let computerSelection;
//     let computer = Math.floor(Math.random() * 4);
    
//     switch (computer) {
//         case 1: 
//             computerSelection = 'rock';
//             break;
//         case 2:
//             computerSelection = 'paper';
//             break;
//         case 3:
//             computerSelection = 'scissors';
//             break;
//         default:
//             computerSelection = 'rock';
//             break;
//     }
//     console.log(`COMPUTER: ${computerSelection}`);
//     return computerSelection.toLowerCase();
// }


// // Function to play the game
// function game(playerSelection, computerSelection) {
//     let result;

//     const rock = 'rock';
//     const paper = 'paper';
//     const scissors = 'scissors';

//     if (playerSelection === rock && computerSelection === rock) {
//         result = 'TIE!';
//     } else if (playerSelection === rock && computerSelection === paper) {
//         result = 'COMPUTER WINS!';
//     } else if (playerSelection === rock && computerSelection === scissors) {
//         result = 'PLAYER WINS';
//     } else if (playerSelection === paper && computerSelection === rock) {
//         result = 'PLAYER WINS!';
//     } else if (playerSelection === paper && computerSelection === paper) {
//         result = 'TIE!';
//     } else if (playerSelection === paper && computerSelection === scissors) {
//         result = 'COMPUTER WINS!';
//     } else if (playerSelection === scissors && computerSelection === rock) {
//         result = 'COMPUTER WINS!'
//     } else if (playerSelection === scissors && computerSelection === paper) {
//         result = 'PLAYER WINS!';
//     } else if (playerSelection === scissors && computerSelection === scissors) {
//         result = 'TIE!';
//     }

//     console.log(`Round Score: ${result}`);

//     return result;


// }

