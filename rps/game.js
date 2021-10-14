class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        //*********************************ADD CODE HERE *************************************/
        this.countOfPlayerWins++;
    }

    incrementComputerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfComputerWins property
        this.countOfComputerWins++;
    }

    incrementCountOfTies(){
        //*********************************ADD CODE HERE *************************************/
        this.countOfTies++;
    }


    setNumberOfRounds(numberOfRounds){
        //*********************************ADD CODE HERE *************************************/
        // Set the numberOfRounds property to the parameter
        this.numberOfRounds = numberOfRounds;
    }

    newGame(){
        //*********************************ADD CODE HERE *************************************/
        // Clear all properties to their default values
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
        //*********************************ADD CODE HERE *************************************/
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
        
        if(isNaN(num || num == undefined || parseInt(num, 10) == false || num == 0)) {
            alert("Please try again with a valid number!");
            num = prompt("How many rounds you would like to play?");
            return false;
        } else {
            return true;
        }

        
    }
}
    





// DO NOT TOUCH THIS CODE
let unit_test  = Game;